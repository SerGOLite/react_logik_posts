import React, { useState, useRef } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';
import MySelect from "./components/UI/select/mySelect";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: ' JavaScript', body: 'Description' },
    { id: 2, title: ' JavaScript 2', body: 'Description' },
    { id: 3, title: ' JavaScript 3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // post mit callback von Kindkomponent bekommen 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }}></hr>
      <div>
        <MySelect
          defaultValue="Sortieren nach"
          options={[]}
        />
      </div>
      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title='Posts über JS' />
        :
        <h1 style={{ textAlign: 'center', fontFamily: 'Montserrat', color: '#9baacf' }}>
          Keine Post's vorhanden
        </h1>
      }

    </div>
  );
}

export default App;
