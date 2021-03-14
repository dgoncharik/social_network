import css from './NewPost.Module.css';
import {Field, Form} from "react-final-form";
import React from "react";
import {composeValidators, maxlenghtCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/CustomFormElements/CustomFormElements";

const maxlenght100 = maxlenghtCreator(100);

const MyPostForm = (props) => {

  return (
      <form className={css.newPost__form} onSubmit={props.handleSubmit}>
        <Field
            validate={composeValidators(required, maxlenght100)}
            name="textNewMessage"
            component={Textarea}
            // className={css.newPost__text}
            cols="30"
            rows="10"
        />

        <button className={css.newPost__btnAdd}>Добавить пост</button>
      </form>
  )
}

const MyPostReactFinalForm = (props) => {

  const onSubmit = (formData) => {
    props.onSubmit(formData.textNewMessage);
  }

  return (
      <Form
          onSubmit={onSubmit}
          render={MyPostForm}
      />
  )
}

const NewPost = (props) => {
  return (
      <div className={css.newPost}>
        <MyPostReactFinalForm onSubmit={props.addNewPost}/>
      </div>
  )
}

export default NewPost;