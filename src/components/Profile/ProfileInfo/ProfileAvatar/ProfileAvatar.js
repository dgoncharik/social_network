import css from "./ProfileAvatar.module.css"
import defaultAvatar from "../../../../img/default-avatar.png";

const ProfileAvatar = ({isOwner, photos, setAvatar}) => {

  const onAvatarSelected = (evt) => {
    if (evt.target.files.length) {
      const file = evt.target.files[0];
      setAvatar(file);
    }
  }

  return (
      <div className={css.avatarWrapper}>
        <img className={css.avatar} src={photos.large || defaultAvatar}/>
        {isOwner && <input type={"file"} onChange={onAvatarSelected}/>}
      </div>
  )
}

export default ProfileAvatar