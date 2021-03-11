import {usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    {id:1, message: "Текст номер 1", likesCount:12},
    {id:2, message: "Текст номер 2", likesCount:11},
    {id:3, message: "Текст номер 3", likesCount:10}
  ],
  newPostText: "",
  profile: null
};

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST: {
      if (!state.newPostText) return state;

      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    }

    case UPDATE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: action.newText
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    default:
      return state;
  }

}

// action creators
export const updateNewPostText = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})
export const addNewPost = () => ({type:ADD_NEW_POST})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

// thunk creators
export const showProfile = (userId) => {
  return (dispatch) => {
    if (!userId) userId = 15567 // Временно. Мой ID
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    })
  }
}

export default profileReducer;