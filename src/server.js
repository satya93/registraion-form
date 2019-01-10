exp=require("express")
bp=require("body-parser")
app=exp()
app.use(bp.json())
app.listen(1000)
mj=require("mongojs")
con=mj("mongodb://localhost:27017/login")



app.post("/insrec",function(re,rs){
rteqdata=re.body
con.register.save(rteqdata)
rs.send("Inserted")
})

// app.get("/getdata",function(req,res){
//     con.tbl_user.find(function(err,resu){
//         res.send(resu)
//     })
// })