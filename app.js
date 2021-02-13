const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");   

const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var inputItems=[];

app.set('view engine','ejs');
app.get("/",function(req,res)
{
    
    var today=new Date();
    var options={ 
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options);
    res.render("lists",
    {
            kindofday:day,
            newListItems:inputItems
        });
    
    });
    
    app.post("/",function(req,res)
    { var inputItem=req.body.newItem;
        inputItems.push(inputItem);
        res.redirect("/");
    });

    

app.listen(3000,function()
{
    console.log("Server is running on port 3000");
});