import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo />
      <MyPosts
          posts={props.state.posts}
          newPostText = {props.state.newPostText}
          dispatch={props.dispatch}
      />
    </section>
  )
}

export default Profile