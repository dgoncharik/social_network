import {profileAPI} from "../api/api";

const ADD_NEW_POST      = "profile/ADD-NEW-POST";
const SET_USER_PROFILE  = "profile/SET_USER_PROFILE";
const SET_STATUS        = "profile/SET_STATUS";
const DELETE_POST       = "profile/DELETE_POST";

let initialState = {
  posts: [
    {id:1, message: "Текст номер 1", likesCount:12},
    {id:2, message: "Текст номер 2", likesCount:11},
    {id:3, message: "Текст номер 3", likesCount:10}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_NEW_POST: {

      const newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

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

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId)
      }

    default:
      return state;
  }

}

// action creators
export const addNewPost = (newPost) => ({type:ADD_NEW_POST, newPost})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const deletePost = (postId) => ({type:DELETE_POST, postId})

// thunk creators
// export const showProfile = (userId) => {
//   return (dispatch) => {
//     profileAPI.getProfile(userId).then((data) => {
//       dispatch(setUserProfile(data));
//     })
//   }
// }

export const showProfile = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  }
}

export const getUserStatus = (userId) => {
  return async (dispath) => {
    const response = await profileAPI.getUserStatus(userId);
    dispath(setStatus(response))
  }
}

// export const updateUserStatus = (status) => {
//   return (dispatch) => {
//     profileAPI.updateUserStatus(status)
//         .then(response => {
//           if (response.resultCode === 0) {
//             dispatch(setStatus(status));
//           }
//         })
//   }
// }

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
}

export default profileReducer;