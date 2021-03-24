import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preoader/Preloader";
import {saveProfileData} from "../../redux/profile-reducer";

const Profile = (props) => {

  if (props.profile === null) {
    return <Preloader/>
  }

  return (
    <section>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateUserStatus={props.updateUserStatus}
                   isOwner={props.isOwner}
                   setAvatar={props.setAvatar}
                   saveProfileData={props.saveProfileData}
      />
      <MyPostsContainer />
    </section>
  )
}

export default Profile