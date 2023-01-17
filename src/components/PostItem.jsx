import React from "react"
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="s_btns" >
                <MyButton onClick={() => props.remove(props.post)} className="btn btnShadow" type="button">Delete</MyButton>
            </div>
            {/* <div type="button" className="btn btn__shadow"><p>Delete</p></div> */}

        </div>

    )
}

export default PostItem;