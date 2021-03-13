import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Redirect} from "react-router-dom";
import {updateUserStatus} from "../../redux/profile-reducer";

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer />
    </section>
  )
}

export default Profile