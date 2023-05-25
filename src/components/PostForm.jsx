import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

 const PostForm = ({create}) => {

    const [post, setPost] = useState({title: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: ''})
    }

    return (
        <form>
            <Input value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <Button onClick={addNewPost}>Add post</Button>
        </form>
    )
 }

 export default PostForm;