import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import {getAuthUserDataThunkCreator} from '../../redux/auth-reducer';
 
class HeaderContainer  extends React.Component{

    componentDidMount(){
       this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>
    }
}


const mapStateToProps = (state) => {
    return{
        isAuth:state.auth.isAuth,
        login: state.auth.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAuthUserData : () => { dispatch(getAuthUserDataThunkCreator())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);