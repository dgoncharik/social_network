import css from './Post.module.css';

const Post = (props) => {
  return (

    <div className={css.post}>
      <img className={css.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"></img>
      {props.message}
    </div>

  )
}

export default Post