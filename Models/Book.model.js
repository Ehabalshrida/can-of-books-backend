'use strict'

const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({
    title:String,
    description:String,
    status:String,
    email:String,
});

const bookModel=mongoose.model('book',bookSchema);

let seedBook=()=>{
    let newBook=new bookModel({
        title:"Book1",
        description:"long book",
        status:"sold",
        email:"abc@gmail.com",


    });
    newBook.save();
}

module.exports=seedBook;