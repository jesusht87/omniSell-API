const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")

;(async function () {
    try {
        await mongoose.connect('mongodb://localhost:27017', { dbName: 'omniSell' })
        console.log("DB Conectada")
    } catch (error) {
        console.log('Db no conectada')
    }
})()

const app = express()
.use(express.json())
.use(morgan('dev'))


app.listen(3000, () => {
    console.log("Servidor Escuchando")
})

const apiRouter = require('./src/routers/index')
app.use('/api', apiRouter)

