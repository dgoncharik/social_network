import css from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  const path = `/Dialogs/${props.id}`;

  return (
      <div className={css.dialogItem}>
        <NavLink to={path} className={css.dialogItem__link} activeClassName={css.active}>

          <span className={css.avatarWrapper}>
            <img className={css.dialogItem__avatar} src={props.pathAvatar} alt="Аватар"/>
          </span>

          <span className={css.dialogItem__name}>{props.name}</span>
        </NavLink>
      </div>
  )
}

export default DialogItem