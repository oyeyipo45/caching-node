const express = require('express')
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT || 400

const app = express()


app.get('/api', (req, res) => {
    res.json({sucess: true})
})

app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))