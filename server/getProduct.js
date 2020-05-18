const products = require('../products.json')


const getProduct= (req, res) =>{
    const product = products.find(e => e.id === +req.params.id)

    if(product){
        res.status(200).send(product)
    } else{
        res.status(404).send('Product not listed')
    }
}

module.exports = getProduct
