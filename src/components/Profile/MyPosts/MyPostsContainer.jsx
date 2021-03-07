import MyPosts from "./MyPosts";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//   let store = props.store;
//   let state = store.getState();
//
//   const updateNewPostText = (value) => {
//     store.dispatch(updateNewPostTextActionCreator(value))
//   }
//
//   const addNewPost = () => {
//     store.dispatch(addNewPostActionCreator())
//   }
//
//   return (
//       <MyPosts
//           posts={state.profilePage.posts}
//           newPostText={state.profilePage.newPostText}
//           updateNewPostText={updateNewPostText}
//           addNewPost={addNewPost}
//       />
//   )
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (value) => {
      dispatch(updateNewPostTextActionCreator(value));
    },
    addNewPost: () => {
      dispatch(addNewPostActionCreator());
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;