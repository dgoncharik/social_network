import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => {
      return <DialogItem state={dialog}/>
    })

  let messagesElements = props.state.messages.map(el => {
    return <Message message={el.message} myMessage={el.myMessage}/>
  })

  let sendMessageTextareaElements = React.createRef();

  const updateNewMessageText = () => {
    props.updateNewMessage(sendMessageTextareaElements.current.value);
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
          <button onClick={ props.sendMessage } className={css.sendMessage__button}>Отправить</button>
        </div>


      </section>
  )
}

export default Dialogs