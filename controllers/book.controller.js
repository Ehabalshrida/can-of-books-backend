"use strict";
const {bookModel}=require("../Models/Book.model");

let bookcontroller= (req,res)=>{
    bookModel.find().then(data=>{
         res.json(data);
     })  
}


module.exports=bookcontroller;