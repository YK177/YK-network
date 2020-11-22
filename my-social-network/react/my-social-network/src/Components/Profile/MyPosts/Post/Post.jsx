import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.posts__item}>
                <div className={s.posts__ava}>
                    <img src="https://placeimg.com/65/65/people" alt="post__ava"/>
                </div>
                <div className={s.posts__username}>
                    {props.username}
                </div>
                <div className={s.posts__text}>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default Post;