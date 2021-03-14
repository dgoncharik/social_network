import {picture} from "./Picture";

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
};

const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {

    case SEND_NEW_MESSEGE: {

      const newMessage = {
            id: 7,
            message: action.newMessage,
            myMessage: true
          };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }

    default:
      return state;
  }
}

export const sendNewMessage = (newMessage) => ({type: SEND_NEW_MESSEGE, newMessage})

export default dialogsReducer;