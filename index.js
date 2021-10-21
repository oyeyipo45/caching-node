const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()


const PORT = process.env.PORT || 4000

const app = express()

const limiter = rateLimit({
    windowMs: 100 * 60 * 1000,
    max: 5
})

app.use(limiter)
app.set('trust proxy', 1)

app.use('/api', require('./routes'))

app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

