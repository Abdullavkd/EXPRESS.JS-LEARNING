import express from 'express';


let router = express.Router();

let datas = [
    {name: 'Salman', id: 1},
    {name: 'Babu', id: 3},
    {name: 'Ismail', id: 5},
    {name: 'Shamil', id: 7}
];



// GET
router.get('/:id',(req,res,next) => {
    let id = parseInt(req.params.id);
    let result = datas.find((val) => id == val.id);

    if(result){
        return res.json(result);
    }
    const error = new Error("It is note available");
    error.status = 404;
     next(error)
})





router.get('/',(req,res) => {
    res.json(datas);
});


// create new post
router.post('/',(req,res) => {
    let idfind = datas.map((value) => value.id);
    let finalId = Math.max(...idfind);
    let newOne = {
        name: req.body.name,
        id : finalId+2
    }
    if(!newOne.name){
        console.log("You  Enter a Name!")
    }else{
    datas.push(newOne)
    }
    res.status(200).json(datas);
});


// PUT
router.put('/:id',(req,res) => {
    let id = parseInt(req.params.id);
    let post = datas.find((post) => id === post.id);
    if(!post){
        return res.status(404).json({msg: "You are wrong!"})
    }
    post.name = req.body.name;
    res.status(200).json(datas)
});


// DELETE
router.delete('/:id',(req,res) => {
    let id = parseInt(req.params.id);
    let post = datas.find((value) => id == value.id);

    if(!post){
        return res.status(404).json("Please Enter a Valid ID")
    }

    datas = datas.filter((val) => val.id != id);
    res.status(200).json(datas);
})

// PATCH
// router.patch()


export default router;