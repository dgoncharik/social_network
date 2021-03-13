import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preoader/Preloader";

const Profile = (props) => {

  if (props.profile === null) {
    return <Preloader/>
  }

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