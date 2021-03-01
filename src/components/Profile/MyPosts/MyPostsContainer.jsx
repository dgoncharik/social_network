import MyPosts from "./MyPosts";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let store = props.store;
  let state = store.getState();

  const updateNewPostText = (value) => {
    store.dispatch(updateNewPostTextActionCreator(value))
  }

  const addNewPost = () => {
    store.dispatch(addNewPostActionCreator())
  }

  return (
      <MyPosts
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
          updateNewPostText={updateNewPostText}
          addNewPost={addNewPost}
      />
  )
}

export default MyPostsContainer;