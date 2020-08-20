import React from 'react';

const Post = (props) => {

return (
    <div>
        <p>Title: {props.title}</p>
        <img src={props.img}/> 
        <p>Content: {props.content}</p>  
    </div>
)
}

export default Post;