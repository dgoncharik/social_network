const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_NEW_POST:
      const newPost = state.newPostText;
      if (!newPost) return
      state.posts.push(
          {
            id: 5,
            message: newPost,
            likesCount: 0
          }
      )
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

}

export const updateNewPostTextActionCreator = (text) => ({type:UPDATE_NEW_POST_TEXT, newText:text})
export const addNewPostActionCreator = () => ({type:ADD_NEW_POST})

export default profileReducer;