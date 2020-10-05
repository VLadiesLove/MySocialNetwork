import usersAPI from "../api/api";

const UPDATE_TEXT = 'UPDATE-TEXT';
const PUSH_POST = 'PUSH-POST';
const SET_PROFILE = 'SET_PROFILE';
const GET_PROFILE = 'GET_PROFILE';


const initialState = {
  posts: [
    { id: 1, post: 'Sup' },
    { id: 2, post: 'Sup' },
    { id: 3, post: 'Sup' },
    { id: 4, post: 'Sup' },
  ],
  newPostText: 'here is text from state',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  let stateCopy = {...state};
  stateCopy.posts = [...state.posts];

  if (action.type === UPDATE_TEXT) {
    stateCopy.newPostText = action.newText;

  } else if (action.type === PUSH_POST) {
    let length = state.posts.length + 1;
    stateCopy.posts.push({ id: length, post: state.newPostText });
    stateCopy.newPostText = '';

  }else if(action.type === 'SET_PROFILE'){

    return{...state, profile:action.profile}

  }
  return stateCopy;
}

export default profileReducer;


export const addPostActionCreator = () => {
  return { type: PUSH_POST }
}

export const updateTextActionCreator = (newText) => {
  return { type: UPDATE_TEXT, newText }
}

export const setProfileActionCreator = (profile) => {
  return { type: SET_PROFILE, profile }
}

export const getProfileThunkCreator = (userID) => {
  return (dispatch) => {
    return usersAPI.getProfile(userID)
    .then(response => {
        dispatch(setProfileActionCreator(response.data))
    })
  }
}
