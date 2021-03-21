import {authAPI} from "../api/api";
import {FORM_ERROR} from "final-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";

const initialState = {
  userId: null,
  email:  null,
  login:  null,
  isFetching: false,
  isAuth: false
}

const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case(SET_AUTH_USER_DATA):
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

// action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({type:SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});

// thunk creators
// export const authorizeMe = () => {
//   return  (dispatch) => {
//     return authAPI.authorizeMe().then((response) => {
//       if (response.resultCode === 0) {
//         let {id, login, email} = response.data;
//         dispatch(setAuthUserData(id, email, login, true));
//       } else {
//         //alert(`error authorizeMe!\n${response.messages}\nresultCode ${response.resultCode}`)
//       }
//     })
//   }
// }

export const authorizeMe = () => {
  return async (dispatch) => {
    let response = await authAPI.authorizeMe();

    if (response.resultCode === 0) {
      let {id, login, email} = response.data;
      dispatch(setAuthUserData(id, email, login, true));
    } else {
      //alert(`error authorizeMe!\n${response.messages}\nresultCode ${response.resultCode}`)
    }
  }
}

export const signIn = (email, password, rememberMe) => {
  return (dispatch) => {
     return authAPI.signIn(email, password, rememberMe)
        .then(response => {

          if (response.resultCode === 0) {
            dispatch(authorizeMe());
          } else {
            return { [FORM_ERROR]: response.messages }
            // alert(`error signIn!\n${response.messages}\nresultCode ${response.resultCode}`)
          }
        })
  }
}

export const signOut = () => {
  return (dispatch) => {
    authAPI.signOut()
        .then(response => {
          if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
          }
        })
  }
}

export default authReducer;