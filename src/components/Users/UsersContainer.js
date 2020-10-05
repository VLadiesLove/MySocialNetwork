import React from 'react';
import {connect} from 'react-redux';
import {followActionCreator, unfollowActionCreator,setUsersActionCreator, setCurrentPageActionCreator,setTotalUsersCountActionCreator,toggleIsFetchingActionCreator, toggleFollowingProgressActionCreator, getUsersThunkCreator} from '../../redux/users-reducer';
import Users from './Users';
import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';
import usersAPI from '../../api/api';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        

    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {


        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                followingInProgress={this.props.followingInProgress}
                currentPage={this.props.currentPage}
                onPageChanged={this.onChangeCurrentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress} 
                getUsers={this.props.getUsers}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followActionCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingActionCreator(isFetching))},
        getUsers: (currentPage, pageSize) => dispatch(getUsersThunkCreator(currentPage, pageSize)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);