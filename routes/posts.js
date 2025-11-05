import express from "express";
// import path from 'path';

const router = express.Router();

let products = [
    {id: 1, product: 'Tomato'},
    {id: 2, product: 'Apple'},
    {id: 3, product: 'Banana'},
    {id: 4, product: 'Mango'},
    {id: 5, product: 'Pineapple'}
];

router.get('/',(req,res) => {
    res.json('hi guys...')
});

router.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = products.find((product) => product.id == id);
    
    if(post){
        res.status(404).json(post);
    }else{
        res.status(404).json('IT IS NOT AVAILABLE !');
    }
});




export default router;