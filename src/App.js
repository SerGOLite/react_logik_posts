import React, { useState, useRef, useMemo } from "react";
// import ClassCounter from "./components/ClassCounter";
// import Counter from "./components/counter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import './styles/App.css';
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: ' aa', body: 'bbb' },
    { id: 2, title: ' bb 2', body: 'aaa' },
    { id: 3, title: ' cc 3', body: 'ccc' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('SORTED POST FUNKT');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  // post mit callback von Kindkomponent bekommen 
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <MyButton style={{ marginTop: 40 }} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>


      <hr style={{ margin: '15px 0' }}></hr>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts über JS' />
    </div>
  );
}

export default App;
