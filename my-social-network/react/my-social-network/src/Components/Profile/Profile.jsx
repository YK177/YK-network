import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div>
            <div className={s.profile__background}>
                <img src="https://placeimg.com/936/200/nature/grayscale" alt="profile__background"/>
            </div>
            <div className={s.profile__content}>
                <img className={s.profile__avatar} src="https://placeimg.com/65/65/people" alt="avatar"/>
                    <div className={s.profile__info}>
                        <p className={s.profile__name}>Yuri Kotenev</p>
                        <p className={s.profile__birthday}>21 March 1991</p>
                    </div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;