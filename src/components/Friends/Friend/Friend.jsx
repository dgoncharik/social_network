import css from './Friend.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
  return (
      <div className={css.friend}>

        <NavLink to={'/friendId'} className={css.friend__link} activeClassName={css.active}>
          <span className={css.friend__avatarWrapper}>
            <img className={css.friend__avatar} src={props.data.pathAvatar} alt="Аватар"/>
          </span>
          <span className={css.friend__name}>{props.data.name}</span>

        </NavLink>

      </div>
  )
}

export default Friend