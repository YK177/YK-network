import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink className={s.item} activeClassName={s.item_active} to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        1
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem name="Yuri" id="1"/>
                <DialogItem name="Daria" id="2"/>
                <DialogItem name="Dima" id="3" />
                <DialogItem name="John" id="4" />
            </div>
            <div className={s.messages}>
                <div className={`${s.message} ${s.message_incoming}`}>How are you</div>
                <div className={`${s.message} ${s.message_outgoing}`}>How are you</div>
                <div className={`${s.message} ${s.message_incoming}`}>How are you</div>
            </div>
        </div>
    )
}

export default Dialogs;