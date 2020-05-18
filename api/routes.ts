import { Router }from 'https://deno.land/x/oak/mod.ts'
import { getPosts, getPost, addPost, updatePost, deletePost } from './controller.ts'

const router = new Router()
router.get('/posts', getPosts)
      .get('/posts/:id', getPost)
      .post('/posts', addPost)
      .put('/posts/:id', updatePost)
      .delete('/posts/:id', deletePost)

export default router