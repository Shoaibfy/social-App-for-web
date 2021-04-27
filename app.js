const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const { MONGO_URI } = require('./config/keys')
// var cors = require('cors')


require('./models/uerModel')
require('./models/postModel')

// app.use(cors())
app.use(express.json())
app.use(require('./routes/authRoutes'))
app.use(require('./routes/postRoutes'))

if (process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


mongoose.connect(MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.on('connected', () => {
    console.log("Mongoose DATA BASE Connected")
})

mongoose.connection.on('error', (err) => {
    console.log("Mongoose DATA BASE Connection Failed", err)
})


app.listen(PORT, () => {
    console.log("server is running on", PORT)
})