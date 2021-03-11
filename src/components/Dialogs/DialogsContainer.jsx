import Dialogs from "./Dialogs";
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogs:  state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const DialogsWithAuthRedirect = withAuthRedirect(Dialogs);

export default connect(mapStateToProps, {updateNewMessageText, sendNewMessage})(DialogsWithAuthRedirect);

;