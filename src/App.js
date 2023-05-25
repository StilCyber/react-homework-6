import { useState } from "react";
import PostForm from "./components/PostForm";
import PostContainer from "./components/styles/PostContainer";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript'},
    {id: 2, title: 'Python'}
])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostContainer posts={posts} remove={removePost}/>
    </div>
  );
}

export default App;
