import Dialogs from "./Dialogs";
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs:  state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendNewMessage})(Dialogs);

export default DialogsContainer;