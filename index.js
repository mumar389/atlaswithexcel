const express=require('express');
const port=5640;
//importing the mongoose file
const db=require('./mongoose');

/*
steps to run this
step-1:npm init(ignore if already done)
2:get all three files-:index.js,model.js,mongoose.js,package-lock.json,package.json
3:npm install
4:get your excel file in the same folder
5:change the mongodb url in mongoose.js,,place your own mongodb url from atlas

*/
//Importing the model
const User=require('./model');

//excel sheet
const parser = require("simple-excel-to-json");
const json2xls = require("json2xls");
const fs = require("fs");
//Give your excel sheet name here
const ourExcelDocument = parser.parseXls2Json("./Example.xlsx");


const app=express();

ourExcelDocument[0].map(async(student)=>{
    var allUsers=await User.create({
        name:student.Name,
        rollno:student.RollNo
    });

})

    console.log("Excel saved to mongodb");







app.listen(port,function(){
    console.log(`Server is sunning on port-:${port}`);
})
