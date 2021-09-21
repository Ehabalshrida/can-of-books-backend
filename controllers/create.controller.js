'use strict'
const {bookModel}=require('../Models/Book.model')


let createController = async (req,res)=>{

    let bookData=req.Body;
    let newBook=new bookModel(bookData);
    newBook.save();
    await bookModel.find({}).then(data=>{res.status(200).json(data)});

}


module.exports={createController};