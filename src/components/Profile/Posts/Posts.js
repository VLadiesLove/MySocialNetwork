import React from 'react';
import style from './Posts.module.css'
import Post from './Post/Post'

let postElement = React.createRef();

const Posts = (props) => {
    let postsElements = props.posts.map((p) => { return <Post message={p.post} /> });

    let onAddPost = () => {
        props.addPost();
    }

    const onPostchange = () => {
        let text = postElement.current.value;
        props.updatePost(text);
    }

    return (
        <div>
            <textarea ref={postElement} onChange={onPostchange} value={props.newPostText} />
            <button onClick={onAddPost} > Push post </button>
            { postsElements}
        </div>

    );
}

export default Posts;