import React from 'react';
import style from './Profile.module.css'
import PostsContainer from './Posts/PostsContainer.js';
import Post from './Posts/Post/Post.js';
import Profileinfo from './Profileinfo/Profileinfo';



const Profile = (props) => {
    return (<div className={style.content}>
        <Profileinfo profile={props.profile}/>
        <PostsContainer store={props.store}/>
        <div> like </div>
         </div>);
}

export default Profile;