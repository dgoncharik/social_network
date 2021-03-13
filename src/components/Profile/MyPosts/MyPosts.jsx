import css from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import NewPost from "./NewPost/NewPost";

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => {
    return <Post
        key={post.id}
        message={post.message}
    />
  })


  return (
    <div className={css.myPost}>
      <h3>My post</h3>
      {/*<div className={css.newPost}>*/}
      {/*  <MyPostReactFinalForm onSubmit={props.addNewPost}/>*/}
      {/*</div>*/}
      <NewPost addNewPost={props.addNewPost}/>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts