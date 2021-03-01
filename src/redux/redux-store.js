import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbar: navbarReducer
})

let store = createStore(reducers);

export default store;