import express from 'express';


let router = express.Router();

let datas = [
    {name: 'Salman', id: 1},
    {name: 'Babu', id: 3},
    {name: 'Ismail', id: 5},
    {name: 'Shamil', id: 7}
];


router.get('/:id',(req,res) => {
    let id = parseInt(req.params.id);
    let result = datas.find((val) => id == val.id);

    if(result){
        return res.json(result);
    }
    return res.json('There is No Data Available');
})

router.get('/',(req,res) => {
    res.json(datas);
})


// create new post
router.post('/',(req,res) => {
    let idfind = datas.map((value) => value.id);
    let finalId = Math.max(...idfind);
    let newOne = {
        name: req.body.name,
        id : finalId+2
    }
    datas.push(newOne)
    res.status(200).json(datas);
});

export default router;