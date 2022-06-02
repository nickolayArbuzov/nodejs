const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const entity = require('./routes/entity.routes');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/entity', entity)

const start = async () => {

    try {
        await mongoose.connect(config.get('dbUrl'))
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} PORT` )
        })
    }

    catch (e) {
        console.log(e)
    }

}
start ()