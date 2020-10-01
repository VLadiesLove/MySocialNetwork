import React from 'react';
import {connect} from 'react-redux';
import {followActionCreator, unfollowActionCreator,setUsersActionCreator, setCurrentPageActionCreator,setTotalUsersCountActionCreator,toggleIsFetchingActionCreator, toggleFollowingProgressActionCreator} from '../../redux/users-reducer';
import Users from './Users';
import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';
import usersAPI from '../../api/api';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {

               this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false);
            });

    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items) });
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
                toggleFollowingInProgress={this.props.toggleFollowingInProgress} />
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
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
        setTotalUsersCount: (count) => {dispatch(setTotalUsersCountActionCreator(count))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingActionCreator(isFetching))},
        toggleFollowingInProgress: (isFollowing) => {dispatch(toggleFollowingProgressActionCreator(isFollowing))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);