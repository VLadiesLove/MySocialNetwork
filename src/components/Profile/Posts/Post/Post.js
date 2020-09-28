import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    
    return (
        <div className={style.item}>
           <img src='https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg' />
           {props.message}
        </div>
            
            );
}

export default Post;