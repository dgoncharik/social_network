import { Form, Field } from 'react-final-form'
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Input} from "../Common/CustomFormElements/CustomFormElements";
import {composeValidators, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const LoginForm = ({submitError, handleSubmit}) => {

  return (
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor={"login"}>Логин</label>
          <Field id={"login"} name="email" component={Input} placeholder="Логин" validate={composeValidators(required)} />
        </p>

        <p>
          <label htmlFor={"password"}>Пароль</label>
          <Field id={"password"} type={"password"} name="password" component={Input} placeholder="Пароль" validate={composeValidators(required)} />
        </p>

        <p>
          <label htmlFor={"rememberMe"}>Запомнить меня</label>
          <Field id={"rememberMe"} type={"checkbox"} name="rememberMe" component={Input} placeholder="" />
        </p>

        <p style={{color:"red", fontWeight: "bold"}}>
          {submitError}
        </p>

        <p>
          <button type="submit">Войти</button>
        </p>
      </form>
  )
}


const Login = (props) => {

  const onSubmit = async (formData) => {
   return props.signIn(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"}/>
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: () => {
//       dispatch(signIn())
//     }
//   }
// }



export default connect(mapStateToProps, {signIn})(Login);