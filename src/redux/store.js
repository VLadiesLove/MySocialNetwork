import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const UPDATE_TEXT = 'UPDATE-TEXT';
const PUSH_POST = 'PUSH-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {

  getState() {
    return this._state;
  },

  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'June' },
        { id: 2, name: 'July' },
        { id: 3, name: 'Aug' },
        { id: 4, name: 'Sept' }
      ],

      messageData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Hola' },
        { id: 3, message: 'Holo' },
        { id: 4, message: 'Holy' }
      ],
      newMessageBody: ''
    },
    profilePage: {
      posts: [
        { id: 1, post: 'Sup' },
        { id: 2, post: 'Sup' },
        { id: 3, post: 'Sup' },
        { id: 4, post: 'Sup' },
      ],
      newPostText: 'here is text from state'
    }
  },

  _pushPost() {
    let length = this._state.profilePage.posts.length + 1;
    this._state.profilePage.posts.push({ id: length, post: this._state.profilePage.newPostText });
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },

  _updateText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();

  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {

  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage,action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
    this._callSubscriber();

    // if (action.type === UPDATE_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber();

    // } else if (action.type === PUSH_POST) {
    //   let length = this._state.profilePage.posts.length + 1;
    //   this._state.profilePage.posts.push({ id: length, post: this._state.profilePage.newPostText });
    //   this._state.profilePage.newPostText = '';
    //   this._callSubscriber();
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //   this._state.dialogsPage.newMessageBody = action.body;
    //   this._callSubscriber();
    // } else if (action.type === SEND_MESSAGE) {

    //   let length = this._state.dialogsPage.messageData.length + 1;
    //   let body = this._state.dialogsPage.newMessageBody;
    //   this._state.dialogsPage.newMessageBody = '';
    //   this._state.dialogsPage.messageData.push({ id: length, message: body })
    //   this._callSubscriber();
    // }
  }

}








window.store = store;
export default store;