import Axios from 'axios';
import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfileActionCreator,getProfileThunkCreator} from '../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import usersAPI from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        
        let userID = this.props.match.params.userId;
        if(this.props.match.params.userId == null){ userID = 9768}

        this.props.getProfile(userID);       
    }
    render = () => {
        
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state) =>{
    return {
        profile:state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setProfile :(profile) =>dispatch(setProfileActionCreator(profile)),
        getProfile: (userID) => {dispatch(getProfileThunkCreator(userID))}
    }
}


export default compose( connect(mapStateToProps,mapDispatchToProps) , withRouter,  withAuthRedirect )(Profile);