import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
  <header className={css.header}>
    <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg"/>
    <div className={css.login}>
      {props.isAuth ? props.login : <a className={css.login__link} target="_blank" href={'https://social-network.samuraijs.com/'} >Авторизоваться</a>}
    </div>
  </header>
  )
}

export default Header