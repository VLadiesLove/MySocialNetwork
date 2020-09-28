import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import {connect} from "react-redux"

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

// const DialogsContainer = (props) => {
//     let state = props.store.getState();
//     const messageDialog = state.dialogsPage.messageData.map((m) => { return <Message message={m.message} /> });

//     let dialogElements = state.dialogsPage.dialogsData.map(
//         (dialog) => {
//             return <Dialog name={dialog.name} id={dialog.id} />
//         }
//     );

//     let newMessageBody = state.dialogsPage.newMessageBody;

//     const sendMessage = () => {
//         props.store.dispatch(sendMessageCreator());
//     }


//     const messageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));


//     }

//     return ( <Dialogs sendMessage={sendMessage} 
//                       messageChange={messageChange}
//                       messageData={props.store.getState().dialogsPage.messageData}
//                       dialogsData={props.store.getState().dialogsPage.dialogsData}
//                       newMessageBody={props.store.getState().dialogsPage.newMessageBody} />);
// }



let mapStateToProps = (state) => {
    return {
        messageData : state.dialogsPage.messageData,
        dialogsData : state.dialogsPage.dialogsData,
        newMessageBody : state.dialogsPage.newMessageBody
        }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        messageChange: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;