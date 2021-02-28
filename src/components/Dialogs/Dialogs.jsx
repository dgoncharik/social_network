import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => {
      return <DialogItem state={dialog}/>
    })

  let messagesElements = props.state.messages.map(el => {
    return <Message message={el.message} myMessage={el.myMessage}/>
  })

  let sendMessageTextareaElements = React.createRef();

  const updateNewMessageText = () => {
    const value = sendMessageTextareaElements.current.value;
    const action = updateNewMessageTextActionCreator(value)

    props.dispatch(action);
  }

  const sendNewMessage = () => {
    const action = sendNewMessageActionCreator();

    props.dispatch(action)
  }

  return (
      <section className={css.dialogs}>

        <ul className={css.dialogs__list}>
          {dialogsElements.map(dialog => <li>{dialog}</li>)}
        </ul>

        <section className={css.messages}>
          {messagesElements}
        </section>

        <div className={css.sendMessage}>
          <textarea onChange={updateNewMessageText} className={css.sendMessage__textarea} ref={sendMessageTextareaElements} name="sendMessage__textarea" cols="30" rows="10" value={props.state.newMessageText} />
          <button onClick={sendNewMessage} className={css.sendMessage__button}>Отправить</button>
        </div>


      </section>
  )
}

export default Dialogs