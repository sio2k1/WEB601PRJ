 const getPricelist = async (req, res, next) =>{
   

    
   const { knex } = req.app.locals
   await knex
    .select('PriceListId', 'price')
    .from('PriceList')
    /*We going to use a promise based lib */
    .then( data =>  res.status(200).json(data))
    .catch(error => res.status(500).json(error))
    
    
    //res.send('pricelist2');
    next();
}



const getPricelistById = (req, res, next) =>{
    res.send('pricelist2');
    next();
}

const postPricelist = (req, res, next) =>{
    res.send('pricelist3');
    next();
}

module.exports = {
    getPricelist,getPricelistById,
    postPricelist
}