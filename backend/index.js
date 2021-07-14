require('dotenv').config()
require('./middlewares/passport')
require('./services/email.service')
const path = require('path')
const express = require('express')
const cors = require('cors');
const app = express()
const sequelize = require('./db/index')
const models = require('./models/models')
const router = require('./router/index')
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router)

async function start() {
    await sequelize.authenticate()
    await sequelize.sync({force: true})
    app.listen(PORT, () => console.log('Listen on port ' + PORT))
}

start()
