// Datas
let datas = [
    {name: 'Salman', id: 1},
    {name: 'Babu', id: 3},
    {name: 'Ismail', id: 5},
    {name: 'Shamil', id: 7}
];


// GET
export let getPost = (req,res,next) => {
    let id = parseInt(req.params.id);
    let result = datas.find((val) => id == val.id);

    if(result){
        return res.json(result);
    }
    const error = new Error("It is not available");
    error.status = 404;
     next(error)
}



// GET 2
export let getPosts = (req,res) => {
    res.json(datas);
};

// POST
export let createPost = (req,res) => {
    let idfind = datas.map((value) => value.id);
    let finalId = Math.max(...idfind);
    console.log(req.body)
    let newOne = {
        name: req.body.name,
        id : finalId+2
    }
    if(!newOne.name){
        console.log("Enter a Name!")
    }else{
    datas.push(newOne)
    }
    res.status(200).json(datas);
}

// PUT
export let updatePost = (req,res) => {
    let id = parseInt(req.params.id);
    let post = datas.find((post) => id === post.id);
    if(!post){
        return res.status(404).json({msg: "You are wrong!"})
    }
    post.name = req.body.name;
    res.status(200).json(datas)
};

// DELETE
export let deletePost = (req,res) => {
    let id = parseInt(req.params.id);
    let post = datas.find((value) => id == value.id);

    if(!post){
        return res.status(404).json("Please Enter a Valid ID")
    }

    datas = datas.filter((val) => val.id != id);
    res.status(200).json(datas);
};