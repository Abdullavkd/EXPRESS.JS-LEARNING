const express = require('express')
// const path = require('path')

const port = process.env.lock;
const app = express();

let logins = [
    {id: 1, name: 'Suhail'},
    {id: 2, name: 'Ihsan'},
    {id: 3, name: 'Hamdan'},
    {id: 4, name: 'Shafeeq'},
    {id: 5, name: 'Shahul'},
    {id: 6, name: 'Abbas'},
    {id: 7, name: 'Ibrahim'},
    {id: 8, name: 'Sulthan'},

]

app.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = logins.find((person) => person.id === id);

    if(!post){
        res.status(404).json(`There is no one available at ${id}th possition.`);
    }else{
        res.status(200).json(logins.filter((person) => person.id == id))   
    }
})

app.listen(port,() => console.log(`it is working on port: ${port}`))