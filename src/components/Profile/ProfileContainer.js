import Axios from 'axios';
import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfileActionCreator} from '../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        
        let userID = this.props.match.params.userId;
        userID = parseInt(userID);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        .then(response => {
            this.props.setProfile(response.data)
        })        
    }
    render = () => {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state) =>{
    return {
        profile:state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setProfile :(profile) =>dispatch(setProfileActionCreator(profile))
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent);