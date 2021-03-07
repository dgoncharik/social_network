import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {

  return (
      <div className={css.navBarWrapper}>
        <nav className={css.navbar}>
          <div className={css.item}>
            <NavLink to="/Profile" activeClassName={css.active} className={css.item__link}>Профиль</NavLink>
          </div>
          <div className={css.item}>
            <NavLink to="/FindUsers" activeClassName={css.active} className={css.item__link}>Пользователи</NavLink>
          </div>
          <div className={css.item}>
            <NavLink to="/Dialogs" activeClassName={css.active} className={css.item__link}>Мессенджер</NavLink>
          </div>
          <div className={css.item}>
            <NavLink to="/News" activeClassName={css.active} className={css.item__link}>Новости</NavLink>
          </div>
          <div className={css.item}>
            <NavLink to="/Music" activeClassName={css.active} className={css.item__link}>Музыка</NavLink>
          </div>
          <div className={css.item}>
            <NavLink to="/Settings" activeClassName={css.active} className={css.item__link}>Настройки</NavLink>
          </div>
        </nav>

        <Friends friends={props.friends}/>
      </div>
  )
}

export default Navbar