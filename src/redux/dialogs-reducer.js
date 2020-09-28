const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Jane' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Alvin' },
        { id: 4, name: 'Sam' }
    ],

    messageData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How r u' },
        { id: 3, message: 'Where are you?' },
        { id: 4, message: '???' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {

        stateCopy = {
            ...state,
            newMessageBody : action.body
        }

    } else if (action.type === SEND_MESSAGE) {

        stateCopy = {
            ...state,
            messageData: [...state.messageData]
        }

        let length = state.messageData.length + 1;
        let body = state.newMessageBody;
        stateCopy.newMessageBody = '';
        stateCopy.messageData.push({ id: length, message: body })
    } else {
        return state;
    }
    return stateCopy;
}

export default dialogsReducer;

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE }
  }
  
  export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
  }
  