import Dialogs from "./Dialogs";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let store = props.store;
  let state = store.getState().dialogsPage;

  const updateNewMessageText = (value) => {
    store.dispatch(updateNewMessageTextActionCreator(value));
  }

  const sendNewMessage = () => {
    store.dispatch(sendNewMessageActionCreator());
  }

  return (<Dialogs
      state={state}
      updateNewMessageText={updateNewMessageText}
      sendNewMessage={sendNewMessage}
  />)
}

export default DialogsContainer;