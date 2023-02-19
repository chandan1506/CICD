const app = require("express")()

app.get("/",(req,res)=>{
  res.send("success!")
})


app.listen(8080,()=>{
    console.log("server is listening on 8080")
})