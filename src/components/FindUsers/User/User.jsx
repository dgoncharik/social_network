import css from "./User.module.css"
import defaultAvatar from "./img/default-avatar.png"
import {NavLink} from "react-router-dom";
import {setFollowingProcess} from "../../../redux/FindUsers-reducer";

const User = (props) => {

  const onBtnSubscribeClick = () => {
    props.followUnfollow()
  }

  const avatarSmall = props.photos.small ? props.photos.small : defaultAvatar;

  return (
      <li className={css.user}>

        <div>
          <div className={css.avatar__wrapper}>
            <NavLink to={`/Profile/${props.id}`}>
              <img className={css.avatar} src={avatarSmall}/>
            </NavLink>
          </div>
          <button disabled={props.followingProcess.some(id => id === props.id)} onClick={onBtnSubscribeClick} className={css.btnSubscribe}>{props.followed ? "Отписаться" : "Подписаться"}</button>
        </div>

        <div className={css.user__info}>

          <div className={css.user__infoBlock}>
            <p className={css.user__name}>{props.name}</p>
            <p className={css.user__status}>{props.status}</p>
          </div>
          <div className={css.user__locationBlock}>
            <p className={css.user__locationCountry}>props.location.country,</p>
            <p className={css.user__locationCity}>props.location.city</p>
          </div>

        </div>
      </li>
  )
}

export default User;