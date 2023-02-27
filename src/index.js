const express = require("express")
const router = require("./routes/route")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

mongoose.connect("", {
    useNewUrlParser: true
})
    .then(() => console.log("mongoDB is Connected"))
    .catch((err) => console.log(err))

app.use("/", router)

app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port", process.env.PORT || 3000)
})