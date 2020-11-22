import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={s.mypost}>
                <div className={s.mypost__new}>
                    <textarea placeholder="My new post"></textarea>
                    <div className={s.mypost__buttons}>
                        <button className={s.button}>Send</button>
                        <button className={`${s.button} ${s.button_cancel}`}>Cancel</button>
                    </div>
                </div>
            </div>
            <Post username='Slava Karasev' message='Hi! How are you?' />
            <Post username='Dima Frolov' message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi dicta ducimus maiores optio quaerat, sapiente. Aspernatur at, beatae eos ipsa iste maiores nesciunt quas quis repellendus reprehenderit vel, voluptates!"/>
            <Post username='Sergey Groshev' message='Shut up fuck up!'/>
        </div>
    )
}

export default MyPosts;