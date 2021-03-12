import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo profile={props.profile} status={"Hello, react!!!"}/>
      <MyPostsContainer />
    </section>
  )
}

export default Profile