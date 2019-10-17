// this is handlers we use to handle routes for articles
  
 
 const getAll =  (req, res) =>{  // for get request -> get all items
   const { knex } = req.app.locals // get ref to knex
    knex
    //.select('PriceListId as id','SalesItemName as item_name', 'Price as price', 'SalesItemUnits as units')
    .select('*')
    .from('Articles')
    .then(data =>  res.status(200).json(data)) // return promise
    .catch(error => res.status(500).json(error)) // error handle for upper promise
    
}

const getById = (req, res) =>{  // for get request with id -> get specified items
    const { knex } = req.app.locals; // get ref to knex
    const { id } = req.params; // get id from request params
    knex
        .select('*')
        .from('Articles')
        .where({
            ArticleId: id
        })
        /*We going to use a promise based lib */
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data) // if we have some data to output, return it
            } else {
                return res.status(404).json(`Employee with ID ${id} do not exist`); // id not in db
            }
        })
        .catch(error => res.status(500).json(error))
   
}

module.exports = {
    getAll, getById
}