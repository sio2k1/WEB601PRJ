 const getPricelist =  (req, res) =>{ 
   const { knex } = req.app.locals
    knex
    .select('*')
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
        .select('*')
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

const postPricelist = async (req, res) =>{
    const { knex } = req.app.locals
    /* Now we are going to work with employees table and we can insert and then if we call
    a response for that. 
    */

   
    // console.log(req.body)
    const payload = req.body
    /* When you do a POST method you also send a payload with your POST req, express access the payload.
       We need to parse payload because Express does not see payload as part of the req body */
    const mandatoryColumns = ['price', 'SalesItemName', 'SalesItemUnits']
    
    const payloadKeys = Object.keys(payload)
    
    

    //return res=req.body;

    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    
    /*
{
"SalesItemUnits": "Kg.",
"price": "33333",
"SalesItemName": "Salt"
}


    */

    if (mandatoryColumnsExists) {

        let salesItemsId=-1;
        await knex.select('*').from('SalesItems')
        .where({
            SalesItemName: `${payload.SalesItemName}`,
            SalesItemUnits: `${payload.SalesItemUnits}`
        })
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
            let newSalesItem = {
                SalesItemName: `${payload.SalesItemName}`,
                SalesItemUnits: `${payload.SalesItemUnits}`
            }
            await knex.insert(newSalesItem).into('SalesItems').returning("SalesItemID").then(function (id) {
                console.log("SalesItemID====" + JSON.stringify(id));
                salesItemsId = id[0]; // id is returned as array, so we need to extract element 0
            }).catch(error => res.status(500).json(error));
        }

/*
        .where({
            SalesItemName: `${payloadKeys.SalesItemName}`,
            SalesItemUnits: `${payloadKeys.SalesItemUnits}`
        }).then(r => sales_items = JSON.stringify(r))
*/
        console.log(salesItemsId);
        //console.log(sales_items.SalesItemId);
        return res.status(400).json(salesItemsId); 
/*
        knex.transaction(function(trx) {

            const record = [
              {title: 'Canterbury Tales'},
              {title: 'Moby Dick'},
              {title: 'Hamlet'}
            ];
          
            knex.insert({name: 'Old Books'}, 'id')
              .into('catalogues')
              .transacting(trx)
              .then(function(ids) {
                books.forEach((book) => book.catalogue_id = ids[0]);
                return knex('books').insert(books).transacting(trx);
              })
              .then(trx.commit)
              .catch(trx.rollback);
          })
          .then(function(inserts) {
            console.log(inserts.length + ' new books saved.');
          })
          .catch(function(error) {
            // If we get here, that means that neither the 'Old Books' catalogues insert,
            // nor any of the books inserts will have taken place.
            console.error(error);
          });

*/

        /*knex('employees')
            .insert(payload)
            .then(response => res.status(201).json('Employee record created'))
            .catch(error => res.status(500).json(error))*/

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
    
}

module.exports = {
    getPricelist,getPricelistById,
    postPricelist
}