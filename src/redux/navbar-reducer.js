import {picture} from "./Picture";

let initialState = {
  friends: [
    {id:1, name:"Дима",   pathAvatar: picture.one},
    {id:2, name:"Андрей", pathAvatar: picture.two},
    {id:3, name:"Света",  pathAvatar: picture.three},
    {id:4, name:"Саша",   pathAvatar: picture.four},
    {id:5, name:"Витёк",  pathAvatar: picture.five},
  ]
};

const navbarReducer =(state=initialState, action) => {
  return state;
}

export default navbarReducer;