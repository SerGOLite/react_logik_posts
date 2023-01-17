import React, { useState, useRef } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: ' JavaScript', body: 'Description' },
    { id: 2, title: ' JavaScript 2', body: 'Description' },
    { id: 3, title: ' JavaScript 3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <PostForm create={createPost} />

      <PostList posts={posts} title='Posts über JS' />
    </div>
  );
}

export default App;
