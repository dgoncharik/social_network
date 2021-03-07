import Dialogs from "./Dialogs";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//   let store = props.store;
//   let state = store.getState().dialogsPage;
//
//   const updateNewMessageText = (value) => {
//     store.dispatch(updateNewMessageTextActionCreator(value));
//   }
//
//   const sendNewMessage = () => {
//     store.dispatch(sendNewMessageActionCreator());
//   }
//
//   return (<Dialogs
//       state={state}
//       updateNewMessageText={updateNewMessageText}
//       sendNewMessage={sendNewMessage}
//   />)
// }

const mapStateToProps = (state) => {
  return {
    dialogs:  state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateNewMessageText: (value) => {
        dispatch(updateNewMessageTextActionCreator(value))
      },
      sendNewMessage: () => {
        dispatch(sendNewMessageActionCreator())
      }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;