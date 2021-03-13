import {profileAPI} from "../api/api";

//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    {id:1, message: "Текст номер 1", likesCount:12},
    {id:2, message: "Текст номер 2", likesCount:11},
    {id:3, message: "Текст номер 3", likesCount:10}
  ],
  //newPostText: "",
  profile: null,
  status: ""
};

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST: {
      if (!action.newPost) return state;

      const newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        //newPostText: ""
      };
    }

    // case UPDATE_NEW_POST_TEXT: {
    //
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   };
    // }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }

}

// action creators
//export const updateNewPostText = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})
export const addNewPost = (newPost) => ({type:ADD_NEW_POST, newPost})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})

// thunk creators
export const showProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    })
  }
}

export const getUserStatus = (userId) => {
  return (dispath) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
          dispath(setStatus(response))
        })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(response => {
          if (response.resultCode === 0) {
            dispatch(setStatus(status));
          }
        })
  }
}

export default profileReducer;