import React from "react"

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            {/* <div className="s_btns" >
                <button class="s_btn" type="button">Delete</button>
            </div> */}
            <div type="button" className="btn btn__shadow"><p>Delete</p></div>

        </div>

    )
}

export default PostItem;