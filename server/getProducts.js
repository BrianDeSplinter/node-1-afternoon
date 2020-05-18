const products = require('../products.json')

module.exports = {

getProducts: (req, res) =>{
    if(req.query.price){
        const items = products.filter(e => e.price >= +req.query.price)
        res.status(200).send(items)
    } else{
        res.status(200).send(products)
    }
    
},

}
