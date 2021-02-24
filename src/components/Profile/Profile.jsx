import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <section>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </section>
  )
}

export default Profile