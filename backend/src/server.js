const { app } = require(".");
const { connectDb } = require("./config/db");
const port=process.env.PORT|| 4000;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})