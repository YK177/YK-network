import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <ul className={s.menu}>
                <li className={s.list}>
                    <NavLink className={s.link} activeClassName={s.link_active} to="/profile">Profile</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink className={s.link} activeClassName={s.link_active} to="/dialogs">Messages</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink className={s.link} activeClassName={s.link_active} to="/news">News</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink className={s.link} activeClassName={s.link_active} to="/music">Music</NavLink>
                </li>
                <li className={s.list}>
                    <NavLink className={s.link} activeClassName={s.link_active} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;