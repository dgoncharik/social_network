import css from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => {
    return <Post
        key={post.id}
        message={post.message}
    />
  })

  // let newPostElement = React.createRef();

  const updateNewPostText = (evt) => {
    // const value = newPostElement.current.value;
    const value = evt.target.value;
    props.updateNewPostText(value);
  }

  const addNewPost = (evt) => {
    props.addNewPost()
  }

  return (
    <div className={css.myPost}>
      <h3>My post</h3>
      <div className={css.newPost}>
        <textarea onChange={updateNewPostText} /*ref={newPostElement}*/ className={css.newPost__text} value={props.newPostText} cols="30" rows="10"/>
        <button onClick={addNewPost} className={css.newPost__btnAdd}>Добавить пост</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts