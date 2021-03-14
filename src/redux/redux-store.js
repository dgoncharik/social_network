import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./FindUsers-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer,
  app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; //for debug

export default store;