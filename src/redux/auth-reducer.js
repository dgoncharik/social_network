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

export const setAuthUserData = (userID, email, login) => ({type:SET_AUTH_USER_DATA, data: {userID, email, login}});

export default authReducer;