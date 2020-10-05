import React from 'react';
import style from './Dialogs.module.css';
import { NavLink, Redirect } from 'react-router-dom';
import Dialogs from './Dialogs'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from 'redux';

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




let mapStateToProps = (state) => {
    return {
        messageData : state.dialogsPage.messageData,
        dialogsData : state.dialogsPage.dialogsData,
        newMessageBody : state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
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





export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);