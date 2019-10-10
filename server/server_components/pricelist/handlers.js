
 
 
 const getPricelist =  (req, res) =>{ 
   const { knex } = req.app.locals
    knex
    //.select('PriceListId as id','SalesItemName as item_name', 'Price as price', 'SalesItemUnits as units')
    .select('PriceListId','SalesItemName', 'Price', 'SalesItemUnits')
    .from('PriceList')
    .leftJoin('SalesItems', 'PriceList.SalesItemId', 'SalesItems.SalesItemId')
    /*We going to use a promise based lib */
    .then(data =>  res.status(200).json(data))
    .catch(error => res.status(500).json(error))
    
}

const getPricelistById = (req, res) =>{
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('PriceListId','SalesItemName', 'Price', 'SalesItemUnits')
        .from('PriceList')
        .leftJoin('SalesItems', 'PriceList.SalesItemId', 'SalesItems.SalesItemId')
        .where({
            PriceListId: `${id}`
        })
        /*We going to use a promise based lib */
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Employee with ID ${id} do not exist`);
            }
        })
        .catch(error => res.status(500).json(error))
   
}

const insertSelectSalesItem = async (salesItem, req, res) => //insert or select existing sales_items_id
{
    const { knex } = req.app.locals
    let salesItemsId=-1;
    await knex.select('*').from('SalesItems') //searching for existing salesItemsID
    .where(salesItem)
    .then(
        (rows) => {
            if (rows.length>0)
            {
                salesItemsId=rows[0]['SalesItemID'];
            }
    })
    .catch(error => res.status(500).json(error))

    if (salesItemsId===-1) // if we cannot find, we need to create new, and get id of it
    {
        //create new salesitem (with object)
        let newSalesItem = salesItem;
        await knex.insert(newSalesItem).into('SalesItems').returning("SalesItemID").then(function (id) {
            console.log("SalesItemID===" + JSON.stringify(id));
            salesItemsId = id[0]; // id is returned as array, so we need to extract element 0
        }).catch(error => res.status(500).json(error));
    }

    return salesItemsId;
   
}

const post = async (req, res) =>{
   
    const { knex } = req.app.locals // calling knex
    const payload = req.body.data // gathering json from request body
    const mandatoryColumns = ['Price', 'SalesItemName', 'SalesItemUnits'] //this fields should be provided to add record
    
    const payloadKeys = Object.keys(payload) //checking keys in payload
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc)) // if all mandatory fields included return true
    //console.log(payload);
    if (mandatoryColumnsExists) {

        let salesItemsId = await insertSelectSalesItem({
            SalesItemName: `${payload.SalesItemName}`,
            SalesItemUnits: `${payload.SalesItemUnits}`
        }, req, res);

        
        let newPriceListItem = {  //creating object to insert
            price: payload.Price,
            SalesItemID: salesItemsId
        }
        let insertedid=-1;
        await knex.insert(newPriceListItem).into('PriceList').returning("SalesItemID").then(function (id) {
            insertedid = id[0]; // id is returned as array, so we need to extract element 0
        }).catch(error => res.status(500).json(error));

        await knex
        .select('PriceListId','SalesItemName', 'Price', 'SalesItemUnits')
        .from('PriceList')
        .leftJoin('SalesItems', 'PriceList.SalesItemId', 'SalesItems.SalesItemId')
        .where( {PriceListId: insertedid})
        .then(data =>  res.status(200).json(data))
        .catch(error => res.status(500).json(error))


    } else {
        let msg = `Mandatory Columns are required ${mandatoryColumns}`;
        console.log(msg)
        return res.status(400).json(msg);
    }
    
}


const patchById = async (req, res) =>{
    
    const { knex } = req.app.locals;
    const { id } = req.params;
    let salesItemsId=-1;
    let found =  true;
   
    await knex // look for record in its exists -> continue
        .select('*')
        .from('PriceList')
        .where({
            PriceListId: id
        })
        .then(data => {
            if (data.length === 0) { found=false; } // record not found  
            else
            {
                salesItemsId=data[0]['SalesItemId']; // if found gat salesitemsid for future queries
               
            }
        })
        .catch(error => res.status(500).json(error))
        
        if (found) // modify existing record
        {
            const payload = req.body.data // gathering json from request body
            console.log(payload);
            for (let key in payload) { //for each key in payload perform update to db
                let ele=payload[key];
                if (key.toLowerCase()=="SalesItemName".toLowerCase())
                {
                    await knex('SalesItems').where({ salesItemID: salesItemsId }).update({ SalesItemName: ele })
                }
                if (key.toLowerCase()=="SalesItemUnits".toLowerCase())
                {
                    await knex('SalesItems').where({ salesItemID: salesItemsId }).update({ SalesItemUnits: ele })
                }
                if (key.toLowerCase()=="price".toLowerCase())
                {
                    await knex('PriceList').where({ PriceListId: id }).update({ Price: ele })
                }
              }
              return res.status(200).send("OK");
        } else
        {
            return res.status(400).send(`Not found ${id}`);
        }

        //return res.status(400).send(`Item not found: ${id}`);
}

const deleteById = async (req, res) =>{
    const { knex } = req.app.locals;
    const { id } = req.params;
    let salesItemsId=-1;

    let found =  true;
    
    await knex // look for record in its exists -> continue
        .select('*')
        .from('PriceList')
        .where({
            PriceListId: id
        })
        .then(data => {
            if (data.length === 0) { found=false; } // record not found  
            else
            {
                salesItemsId=data[0]['SalesItemId']; // get id to delete corresponding record in salesitems table
            }
        })
        .catch(error => res.status(500).json(error))
    if (found) // modify existing record
    {
        await knex('SalesItems').where({ salesItemID: salesItemsId }).del();  
        await knex('PriceList').where({ PriceListId: id }).del();
        return res.status(200).send("OK");
    } else
    {
        return res.status(400).send(`Not found ${id}`);
    }
}


module.exports = {
    getPricelist, getPricelistById, post, patchById, deleteById
}