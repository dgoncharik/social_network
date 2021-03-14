import css from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from 'react';
import SendMessage from "./SendMessage/SendMessage";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(dialog => {
      return (
          <li key={dialog.id}>
            <DialogItem
            id={dialog.id}
            pathAvatar={dialog.pathAvatar}
            name={dialog.name}
            />
          </li>)
    })

  let messagesElements = props.messages.map(el => {
    return <Message
        key={el.id}
        message={el.message}
        myMessage={el.myMessage}/>
  })

  return (
      <section className={css.dialogs}>

        <ul className={css.dialogs__list}>
          {dialogsElements}
        </ul>

        <section className={css.messages}>
          {messagesElements}
        </section>

        <SendMessage sendNewMessage={props.sendNewMessage} />

      </section>
  )
}

export default Dialogs