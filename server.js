const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const {CoffeeShop} = require('./models')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/coffeeshop', async (req, res) => {
    try {
    const coffeeshopData = await CoffeeShop.findAll()
    res.json(coffeeshopData)
    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

app.get('/coffeeshop/:id', async (req, res) => {
    const id = req.params.id
    try {
        const coffeeshopData = await CoffeeShop.findByPk(id)
        res.json(coffeeshopData)
    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

app.post('/coffeeshop', async (req, res) => {
    try {
        const coffeeshopData = await CoffeeShop.create(req.body)
        res.json(coffeeshopData)
    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

app.put('/coffeeshop/:id', async (req, res) => {
    const id = req.params.id
    try {
        const coffeeshopData = await CoffeeShop.findByPk(id)
        await coffeeshopData.update(req.body)
        res.json(coffeeshopData)
    } catch(e) {
        res.status(500).json({
            message: e.message
        })
    }
})

app.delete('/coffeeshop/:id', async (req, res) => {
    id = req.params.id
    try {
        await CoffeeShop.destroy({where: {id}})
        res.json({
            message: `The coffeeshop at id ${id} was removed from the list.`
        })
    } catch(e) {
        res.status(500).json({
            message: `Internal server issue.`
        })
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
