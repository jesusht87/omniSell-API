process.stdout.write('\x1B[2J\x1B[0f') // This is for clearing the terminal screen
require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")


    ; (async function () {
        try {
            await mongoose.connect(process.env.MONGO_URL, {
                dbName: process.env.MONGO_DB || 'onmiSell'
            })
            console.info('>'.repeat(40))
            console.log('✅  Database Connected with Success')
        } catch (err) {
            throw new Error(`Error connecting to Database: ${err}`)
        }

        try {
            const app = express()
                .use(cors())
                .use(morgan('combined'))
                .use(express.json())
                .use('/api', apiRouter)

            const PORT = process.env.PORT || 3000
            app.listen(PORT, (err) => {
                if (err) {
                    throw new Error(err)
                }
                console.info('>'.repeat(40))
                console.info('💻  Welcome to omniSell Server')
                console.info(`📡  PORT: http://localhost:${PORT}`)
                console.info('>'.repeat(40) + '\n')
            })
        } catch (error) {
            throw new Error(error)
        }
    })()

const apiRouter = require('./src/routers/index')