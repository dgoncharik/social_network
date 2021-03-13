import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

const initialState = {
  userID: null,
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
        ...action.data,
        isAuth: true
      };

    default:
      return state;
  }
}

// action creators
export const setAuthUserData = (userID, email, login) => ({type:SET_AUTH_USER_DATA, data: {userID, email, login}});



// thunk creators
export const authorizeMe = () => {
  return (dispatch) => {
    authAPI.authorizeMe().then((response) => {
      if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login));
      } else {
        alert(`error authorizeMe! resultCode ${response.resultCode}`)
      }
    })
  }
}

export const signIn = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.signIn(email, password, rememberMe)
        .then(response => {
          if (response.resultCode === 0) {
            dispatch(authorizeMe());
          } else {
            alert(`error signIn! resultCode ${response.resultCode}`)
          }
        })
  }
}

export default authReducer;