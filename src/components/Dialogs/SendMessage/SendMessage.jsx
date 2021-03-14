import css from "./SendMessage.module.css";
import {Field, Form} from "react-final-form";
import React from "react";
import {Textarea} from "../../Common/CustomFormElements/CustomFormElements";
import {composeValidators, maxlenghtCreator, required} from "../../../utils/validators/validators";

const SendMessageForm = (props) => {
  const maxlenght50 = maxlenghtCreator(50);

  return (
      <form className={css.sendMessage__form} onSubmit={props.handleSubmit}>
        <Field
            className={css.sendMessage__textarea}
            name={"textNewMessage"}
            component={Textarea}
            validate={composeValidators(required, maxlenght50)}
            cols="30"
            rows="10"/>
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