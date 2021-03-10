import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
  <header className={css.header}>
    <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg"/>
    <div className={css.login}>
      {props.isAuth ? props.login : <NavLink className={css.login__link} to={'/login'} >Авторизоваться</NavLink>}
    </div>
  </header>
  )
}

export default Header