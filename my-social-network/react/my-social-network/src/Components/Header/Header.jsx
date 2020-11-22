import React from 'react';
import s from './Header.module.css';


const Header = ()=> {
    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.logo}>
                    <a href="#">
                        <img src="logo3.png" alt="logo"/>
                    </a>
                </div>
            </div>
        </header>
    )
}


export default Header;