import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserDataActionCreator} from '../../redux/auth-reducer';
 
class HeaderContainer  extends React.Component{

    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
            .then((response) => {
                if(response.data.resultCode === 0){
                    this.props.setAuthUserData(response.data.data)
                }
            });
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
        setAuthUserData : (data) => { dispatch(setAuthUserDataActionCreator(data))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);