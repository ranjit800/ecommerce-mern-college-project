const { app } = require(".");
const { connectDb } = require("./config/db");

const port=process.env.PORT;
app.listen(port,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",port)
})