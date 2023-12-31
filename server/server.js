const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000

require('dotenv').config()

const MONGOURI = process.env.MONGOURI

mongoose.connect(MONGOURI)
mongoose.connection.on("connected", () => {
    console.log("Successfully connected!!!");
})

mongoose.connection.on("error", (err) => {
    console.log("Error connecting!!!", err);
})

require("./models/ProductModel")
require("./models/CulturalStoryModel")
require("./Models/UserModel")

const productRouter = require('./Routes/ProductRoutes')
const storyRouter = require('./Routes/culturalStory')
const authRouter = require('./Routes/AuthRoute')

const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use('/products', productRouter)
app.use('/stories', storyRouter)
app.use('/auth', authRouter)


app.listen(PORT, () => {
    console.log("Running on port ", PORT);
})