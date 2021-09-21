'use strict'

const {bookModel}=require('../Models/Book.model');


let deleteController =  async (req,res)=>{
    let bookId=req.params.id;
     await bookModel.findByIdAndDelete(bookId).then(()=>{
        bookModel.find().then(data=>res.json(data))
} ) }


module.exports={
    deleteController
}
