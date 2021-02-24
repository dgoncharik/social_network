import css from './Header.module.css';

const Header = () => {
  return (
  <header className={css.header}>
    <img className={css.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJk32a66hE_Q1bTr4zDuudTUM1wHjx7OGbA&usqp=CAU"></img> 
  </header>
  )
}

export default Header