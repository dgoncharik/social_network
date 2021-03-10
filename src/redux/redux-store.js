import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./FindUsers-reducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  findUsersPage: findUsersReducer,
  auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;