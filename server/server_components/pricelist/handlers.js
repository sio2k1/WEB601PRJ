 // this is handlers we use to handle routes for price list
  
 
 
 const getAll =  (req, res) =>{  // for get request -> get all items
   const { knex } = req.app.locals // get ref to knex
    knex
    .select('PriceListId','SalesItemName', 'Price', 'SalesItemUnits')
    .from('PriceList')
    .leftJoin('SalesItems', 'PriceList.SalesItemId', 'SalesItems.SalesItemId')
    /*We going to use a promise based lib */
    .then(data =>  res.status(200).json(data))
    .catch(error => res.status(500).json(error)) // error handling
    
}

const getById = (req, res) =>{// for get request with id -> get specified items
    const { knex } = req.app.locals; // get ref to knex
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
            if (data.length > 0) { // if we have data in db return it else return NOT EXISTS
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Employee with ID ${id} do not exist`);
            }
        })
        .catch(error => res.status(500).json(error)) // error handling
   
}

const insertSelectSalesItem = async (salesItem, req, res) => //insert or select existing sales_items_id
{
    const { knex } = req.app.locals // get ref to knex
    let salesItemsId=-1;
    await knex.select('*').from('SalesItems') //searching for existing salesItemsID
    .where(salesItem)
    .then(
        (rows) => {
            if (rows.length>0)
            {
                salesItemsId=rows[0]['SalesItemID']; // actual id in array at element 0
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

const post = async (req, res) =>{ // use this to add items in db
   
    const { knex } = req.app.locals // calling knex
    const payload = req.body.data // gathering json from request body
    const mandatoryColumns = ['Price', 'SalesItemName', 'SalesItemUnits'] //this fields should be provided to add record
    
    const payloadKeys = Object.keys(payload) //checking keys in payload
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc)) // if all mandatory fields included return true
    //console.log(payload);
    if (mandatoryColumnsExists) { // checking required fields

        let salesItemsId = await insertSelectSalesItem({ // call insertSelectSalesItem get id from salesitems table
            SalesItemName: `${payload.SalesItemName}`,
            SalesItemUnits: `${payload.SalesItemUnits}`
        }, req, res);

        
        let newPriceListItem = {  //creating object to insert
            price: payload.Price,
            SalesItemID: salesItemsId
        }
        let insertedid=-1; // id holder
        await knex.insert(newPriceListItem).into('PriceList').returning("SalesItemID").then(function (id) {
            insertedid = id[0]; // id is returned as array, so we need to extract element 0
        }).catch(error => res.status(500).json(error));

        await knex //we will return MutationRecord, that we just inserted
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


const patchById = async (req, res) =>{ // update existing record
    
    const { knex } = req.app.locals; // get ref to knex
    const { id } = req.params; // target record id
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
            console.log(req.body);
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

const deleteById = async (req, res) =>{ // delete target record
    const { knex } = req.app.locals; // get ref to knex
    const { id } = req.params; // get id from request params
    let salesItemsId=-1; // items id holder (we need to delete rows in 2 joined tables)

    let found =  true; // holder for condition if we found record or not
    
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
        await knex('SalesItems').where({ salesItemID: salesItemsId }).del();  //actual delete
        await knex('PriceList').where({ PriceListId: id }).del();//actual delete
        return res.status(200).send("OK");
    } else
    {
        return res.status(400).send(`Not found ${id}`);
    }
}


module.exports = {
    getAll, getById, post, patchById, deleteById
}