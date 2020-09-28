import React from 'react';
import {connect} from 'react-redux';
import {followActionCreator, unfollowActionCreator,setUsersActionCreator, setCurrentPageActionCreator,setTotalUsersCountActionCreator,toggleIsFetchingActionCreator} from '../../redux/users-reducer';
import Users from './Users';
import * as Axios from 'axios';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false);
            });

    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items) });
    }

    render() {


        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onChangeCurrentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followActionCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageActionCreator(pageNumber))},
        setTotalUsersCount: (count) => {dispatch(setTotalUsersCountActionCreator(count))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingActionCreator(isFetching))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);