import usersAPI from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching : true,
    followingInProgress:false
}

const usersReducer = (state = initialState, action) => {

    if (action.type == 'FOLLOW') {
        return {
            ...state,
            users: state.users.map((u) => {
                if (u.id === action.userId) { return { ...u, followed: true } }
                return u;
            })
        }
    } else if (action.type == 'UNFOLLOW') {
        return {
            ...state,
            users: state.users.map((u) => {
                if (u.id === action.userId) { return { ...u, followed: false } }
                return u;
            })
        }
    } else if (action.type == 'SET_USERS') {
        return {
            ...state,
            users: [...action.users]
        }
    } else if (action.type === 'SET_TOTAL_USERS_COUNT') {

        return { ...state, totalUsersCount: action.totalUsersCount }

    } else if (action.type === 'SET_CURRENT_PAGE') {

        return { ...state, currentPage: action.currentPage }

    } else if (action.type === 'TOGGLE_IS_FETCHING') {

        return { ...state, isFetching: action.isFetching }

    } else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
        return {
            ...state,
            folowingInProgress: action.followingInProgress
        }
    } else return state;


}
export default usersReducer;


export const followActionCreator = (userId) => {
    return { type: FOLLOW, userId }
}
export const unfollowActionCreator = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsersActionCreator = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPageActionCreator = (pageNumber) => {
    return {type: SET_CURRENT_PAGE, currentPage:pageNumber }
}

export const setTotalUsersCountActionCreator = (count) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount: count }
}

export const toggleIsFetchingActionCreator = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching:isFetching}
}

export const toggleFollowingProgressActionCreator = (followingInProgress) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress:followingInProgress}
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setUsersActionCreator(data.items))
            dispatch(setTotalUsersCountActionCreator(data.totalCount))
            dispatch(toggleIsFetchingActionCreator(false));
        });
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        usersAPI.follow(userId).then((data) => {
            dispatch(setUsersActionCreator(data.items))
            dispatch(followActionCreator(userId))
            dispatch(toggleIsFetchingActionCreator(false));
        });
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingActionCreator(true))
        usersAPI.unfollow(userId).then((data) => {
            dispatch(setUsersActionCreator(data.items))
            dispatch(unfollowActionCreator(userId))
            dispatch(toggleIsFetchingActionCreator(false));
        });
    }
}



  