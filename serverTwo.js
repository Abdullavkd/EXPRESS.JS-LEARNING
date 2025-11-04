const express = require('express');
const path = require('path');

const port = process.env.PORT;
const app = express();



let posts = [
    {id: 1, name: 'Suhail'},
    {id: 2, name: 'Ihsan'},
    {id: 3, name: 'Hamdan'},
    {id: 4, name: 'Shafeeq'},
    {id: 5, name: 'Shahul'},
    {id: 6, name: 'Abbas'},
    {id: 7, name: 'Ibrahim'},
    {id: 8, name: 'Sulthan'},

]

app.get('/contact',(req,res) => {
    res.sendFile(path.join(__dirname,'public','contact.html'));
})

app.use(express.static(path.join(__dirname,'public')));

app.get('/api/posts/:id',(req,res) => {
    let id = parseInt(req.params.id)
    res.json(posts.filter((val) => val.id == id))
});


app.get('/api/address/posts',(req,res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(posts.slice(0,limit));
        console.log(req.query)
    }else{
        res.json(posts)
    }
})


app.listen(port,() => {
    console.log(`Programme is running on port: ${port}`)
})