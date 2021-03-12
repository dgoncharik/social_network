import Dialogs from "./Dialogs";
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogs:  state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

export default compose(
    connect(mapStateToProps, {updateNewMessageText, sendNewMessage}),
    withAuthRedirect
)(Dialogs)
