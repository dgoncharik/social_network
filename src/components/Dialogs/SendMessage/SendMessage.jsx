import css from "./SendMessage.module.css";
import {Field, Form} from "react-final-form";
import React from "react";

const SendMessageForm = (props) => {

  return (
      <form className={css.sendMessage__form} onSubmit={props.handleSubmit}>
        <Field className={css.sendMessage__textarea} name={"textNewMessage"} component={"textarea"} cols="30" rows="10"/>
        <button className={css.sendMessage__button}>Отправить</button>
      </form>
  )
}

const SendMessageReactFinalForm = (props) => {

  const onSubmit = (formData) => {
    props.sendNewMessage(formData.textNewMessage);
  }

  return (
      <Form
          onSubmit={onSubmit}
          render={SendMessageForm}
      />
  )
}

const SendMessage = (props) => {
  return (
      <div className={css.sendMessage}>
        <SendMessageReactFinalForm sendNewMessage={props.sendNewMessage} />
      </div>
  )
}

export default SendMessage;