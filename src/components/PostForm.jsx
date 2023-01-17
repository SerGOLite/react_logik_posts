import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    // Möglichkeit #1 Die Daten von Input zu bekommen 
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' }) // Clean Input
    }

    return (
        <form>
            {/* Kontrolierbare Component */}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder='Post Name' />

            {/* Nicht kontrolierbare Component mit forwardRef()...*/}
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder='Post Beschreibung' />

            <MyButton onClick={addNewPost}>Post erstellen</MyButton>
        </form>
    );
};

export default PostForm;