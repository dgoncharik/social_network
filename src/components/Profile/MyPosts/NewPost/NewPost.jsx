import css from './NewPost.Module.css';
import {Field, Form} from "react-final-form";
import React from "react";

const MyPostForm = (props) => {

  return (
      <form className={css.newPost__form} onSubmit={props.handleSubmit}>
        <Field className={css.newPost__text} name={"textNewMessage"} component={"textarea"} cols="30" rows="10"/>
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