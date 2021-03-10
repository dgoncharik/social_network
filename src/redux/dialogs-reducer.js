import {picture} from "./Picture";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_NEW_MESSEGE = "SEND-NEW-MESSEGE";

let initialState = {
  messages: [
    {id:1, message:"Привет!",       myMessage: false},
    {id:2, message:"Как дела?",     myMessage: false},
    {id:3, message:"Привет. Норм!", myMessage: true}
  ],
  dialogs: [
    {id:1, name:"Дима",   pathAvatar: picture.one},
    {id:2, name:"Андрей", pathAvatar: picture.two},
    {id:3, name:"Света",  pathAvatar: picture.three},
    {id:4, name:"Саша",   pathAvatar: picture.four},
    {id:5, name:"Витёк",  pathAvatar: picture.five},
    {id:6, name:"Валера", pathAvatar: picture.six}
  ],
  newMessageText: "",
};

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {

    case SEND_NEW_MESSEGE: {
      if (!state.newMessageText) return state;

      const newMessage = {
            id: 7,
            message: state.newMessageText,
            myMessage: true
          };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ""
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {

      return {
        ...state,
        newMessageText: action.newText
      };
    }
    default:
      return state;
  }
}

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText:text})
export const sendNewMessage = () => ({type: SEND_NEW_MESSEGE})

export default dialogsReducer;