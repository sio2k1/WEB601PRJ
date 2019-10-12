
 
 
 const getAll =  (req, res) =>{ 
   const { knex } = req.app.locals
    knex
    //.select('PriceListId as id','SalesItemName as item_name', 'Price as price', 'SalesItemUnits as units')
    .select('*')
    .from('Articles')

    /*We going to use a promise based lib */
    .then(data =>  res.status(200).json(data))
    .catch(error => res.status(500).json(error))
    
}

const getById = (req, res) =>{
    const { knex } = req.app.locals;
    const { id } = req.params;
    knex
        .select('*')
        .from('Articles')
        .where({
            ArticleId: id
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

module.exports = {
    getAll, getById
}