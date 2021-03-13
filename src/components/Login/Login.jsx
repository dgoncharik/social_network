import { Form, Field } from 'react-final-form'
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const LoginForm = (props) => {

  return (
      <form onSubmit={props.handleSubmit}>
        <p>
          <label htmlFor={"login"}>Логин</label>
          <Field id={"login"} name="login" component="input" placeholder="Логин" />
        </p>

        <p>
          <label htmlFor={"password"}>Пароль</label>
          <Field id={"password"} type={"password"} name="password" component="input" placeholder="Пароль" />
        </p>

        <p>
          <label htmlFor={"rememberMe"}>Запомнить меня</label>
          <Field id={"rememberMe"} type={"checkbox"} name="rememberMe" component="input" placeholder="" />
        </p>

        <p>
          <button type="submit">Войти</button>
        </p>
      </form>
  )
}


const Login = (props) => {

  const onSubmit = (formData) => {
    props.signIn(formData.login, formData.password, formData.rememberMe);
  }

  return (
  <div>
    <h1>Войти</h1>

    <Form
        onSubmit={onSubmit}
        render={LoginForm}
    />

  </div>
  )
}

export default connect(null, {signIn})(Login);