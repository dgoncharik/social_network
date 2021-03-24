import css from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileData from "./ProfileData/ProfileData";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

const ProfileInfo = (props) => {

  return (
      <section className={css.profileInfo}>
        <ProfileStatus
            isOwner={props.isOwner}
            status={props.status}
            updateUserStatus={props.updateUserStatus}
        />

        <ProfileAvatar
            isOwner={props.isOwner}
            photos={props.profile.photos}
            setAvatar={props.setAvatar}
        />

       <ProfileData
           profile={props.profile}
           isOwner={props.isOwner}
           saveProfileData={props.saveProfileData}
       />
      </section>
    )
}



export default ProfileInfo