const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const db = require('./db/db')
const cors = require('cors')

const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const storeRouter = require('./routes/store')

db()

app.use(express.json())
app.use(cors())

// user router
app.use('/user', userRouter)

// product router
app.use('/product', productRouter)

// store router
app.use('/store', storeRouter)

app.get('/', (req, res) => {
    res.send('hello Express!')
})

app.listen(port, () => {
    console.log('server started... at ', port);
})