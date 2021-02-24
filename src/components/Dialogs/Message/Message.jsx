import css from "./Message.module.css";

const Message = (props) => {

  return (
      <div className={`${css.message} ${props.myMessage ? css.messageMy:css.messageNoMy}`}>
        {props.message}
      </div>
  )
}

export default Message