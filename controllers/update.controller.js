'use strict'
const {bookModel}=require('../Models/Book.model')


let updateController = async (req,res)=>{
    let bookId= req.params.id;
    let updatedData=req.body;
    bookModel.findOne({_id:bookId}).then(async book=>{
    book.title= updatedData.title;
    book.description=updatedData.description;
    book.status=updatedData.status;
    book.email=updatedData.email;
    await book.save();})
    
    let updatedList=await bookModel.find({});
    res.status(200).json(updatedList);

}
module.exports={updateController}

