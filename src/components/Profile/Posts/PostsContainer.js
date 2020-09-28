import React from 'react';
import style from './Posts.module.css'
import Posts from './Posts'
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profile-reducer'
import {connect} from "react-redux"

// const PostsContainer = (props) => {

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     const onPostchange = (text) => {
//         ;
//         props.store.dispatch(updateTextActionCreator(text));
//     }

//     return <Posts updatePost={onPostchange} addPost={addPost}
//         posts={props.store.getState().profilePage.posts}
//         newPostText={props.store.getState().profilePage.newPostText} />
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (text) => {dispatch(updateTextActionCreator(text));},
        addPost : () => {dispatch(addPostActionCreator());}
    }
}


const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;