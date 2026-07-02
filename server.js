const app = require('./src/app')
const connectDB = require('./src/db/db.js')
require("dotenv").config();

connectDB()

app.listen(process.env.PORT, () => {
    console.log("server run at port 3000");
    
})
