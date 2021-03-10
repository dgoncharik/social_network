import MyPosts from "./MyPosts";
import {addNewPost, updateNewPostText} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps,
                                {updateNewPostText, addNewPost})(MyPosts);

export default MyPostsContainer;