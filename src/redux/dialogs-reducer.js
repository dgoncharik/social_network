const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSEGE = "SEND-NEW-MESSEGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {

    case SEND_NEW_MESSEGE:
      const newMessage = state.newMessageText;
      if (!newMessage) return
      state.messages.push(
          {
            id: 6,
            message: newMessage,
            myMessage: true
          }
      );
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
}

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})
export const sendNewMessageActionCreator = () => ({type: SEND_NEW_MESSEGE})

export default dialogsReducer;