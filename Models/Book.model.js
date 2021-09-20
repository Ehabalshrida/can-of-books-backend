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
        title:"Book2",
        description:"small book",
        status:"sold",
        email:"cde@gmail.com",


    });
    let newBook2=new bookModel({
        title:"Book3",
        description:"long book",
        status:"available",
        email:"ghh@gmail.com",


    });
    let newBook3=new bookModel({
        title:"Book1",
        description:"long book",
        status:"sold",
        email:"abc@gmail.com",


    });
    newBook.save();
    newBook2.save();
    newBook3.save();
}

module.exports={seedBook,bookModel}