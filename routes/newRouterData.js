import express from 'express';

import { getPost,getPosts,updatePost,deletePost,createPost } from '../controller/postController.js';


let router = express.Router();

// GET
router.get('/:id',getPost)
router.get('/api/datas',getPosts);


// create new post
router.post('/',createPost);


// PUT
router.put('/:id',updatePost);


// DELETE
router.delete('/:id',deletePost)

// PATCH
// router.patch()


export default router;