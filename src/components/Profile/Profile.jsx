import MyPosts from './MyPosts/MyPosts';
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    <section>
      <ProfileInfo />
      <MyPosts
          posts={props.state.posts}
          addNewPost={props.addNewPost}
          updateNewPostText={props.updateNewPostText}
          newPostText = {props.state.newPostText}
      />
    </section>
  )
}

export default Profile