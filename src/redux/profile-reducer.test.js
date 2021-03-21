import profileReducer, {addNewPost, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {id:1, message: "Текст номер 1", likesCount:12},
    {id:2, message: "Текст номер 2", likesCount:11},
    {id:3, message: "Текст номер 3", likesCount:10}
  ]
};

const textForNewPost = "Текст поста из теста";



test('new post shold be incremented', () => {

  const action = addNewPost(textForNewPost);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);

});

test('message of new post shold be correct', () => {

  const action = addNewPost(textForNewPost);
  const newState = profileReducer(state, action);
  expect(newState.posts[newState.posts.length - 1].message).toBe(textForNewPost);

});


test('after deleting length of messages shoud be decrement', () => {

  const postId = 1;
  const action = deletePost(postId);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(state.posts.length - 1);

});

test("after deleting length shouldn`t be decrement if id is incorrect", () => {

  const postId = 100000;
  const action = deletePost(postId);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(state.posts.length);

});
