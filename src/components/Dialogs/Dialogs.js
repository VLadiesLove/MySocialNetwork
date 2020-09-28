import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {

    return (
        <div>
            <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div >
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    const messageDialog = props.messageData.map((m) => { return <Message message={m.message} /> });

    let dialogElements = props.dialogsData.map(
        (dialog) => {
            return <Dialog name={dialog.name} id={dialog.id} />
        }
    );

    let newMessageBody = props.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage();
        //props.store.dispatch(sendMessageCreator());
    }

    const onMessageChange = (e) => {
        let body = e.target.value;
        props.messageChange(body);
       //props.store.dispatch(updateNewMessageBodyCreator(e.target.value));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogUser}>
                {dialogElements}

            </div>

            <div className={style.message}>
                <div>{messageDialog}</div>
                <div><textarea onChange={onMessageChange} value={newMessageBody}> </textarea></div>
                <div><button onClick={onSendMessageClick}> Send </button></div>

            </div>


        </div>
    );
}

export default Dialogs;