import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./FindUsers-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer,
  findUsersPage: findUsersReducer
})

let store = createStore(reducers);

export default store;