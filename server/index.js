const express = require('express')
const products = require('../products.json')
const getProducts= require('./getProducts')
const getProduct= require('./getProduct')
const app = express()
const SERVER_PORT = 4001

app.get('/api/products', getProducts.getProducts)

app.get('/api/product/:id', getProduct)

app.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`))