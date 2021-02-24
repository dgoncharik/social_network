import css from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => {
    return <Post message={post.message} />
  })

  return (
    <div className={css.myPost}>
      <h3>My post</h3>
      <div className={css.newPost}>
        <textarea className={css.newPost__text} name="Mypost" id="Mypost" cols="30" rows="10"></textarea>
        <button className={css.newPost__btnAdd}>Добавить пост</button>
      </div>
      <div className={css.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts