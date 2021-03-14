import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

  let element = <NavLink className={css.login__link} to={'/login'} >Авторизоваться</NavLink>;
  if (props.isAuth) {
    element = (
        <>
          <span className={css.login__userName} >{props.login}</span>
          <button onClick={props.signOut} className={css.login__btnLogOut}>Выйти</button>
        </>
    )
  }

  return (
  <header className={css.header}>
    <img className={css.logo} src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg"/>
    <div className={css.login}>
      {element}
    </div>
  </header>
  )
}

export default Header