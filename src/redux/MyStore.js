// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import navbarReducer from "./navbar-reducer";

 // let store = {
 //   _state: {
 //     profilePage: {
 //       posts: [
 //         {id:1, message: "Текст номер 1", likesCount:12},
 //         {id:2, message: "Текст номер 2", likesCount:11},
 //         {id:2, message: "Текст номер 3", likesCount:10}
 //       ],
 //       newPostText: "",
 //     },
 //     dialogsPage: {
 //       messages: [
 //         {id:1, message:"Привет!",       myMessage: false},
 //         {id:2, message:"Как дела?",     myMessage: false},
 //         {id:3, message:"Привет. Норм!", myMessage: true}
 //       ],
 //       dialogs: [
 //         {id:1, name:"Дима",   pathAvatar: picture.one},
 //         {id:2, name:"Андрей", pathAvatar: picture.two},
 //         {id:3, name:"Света",  pathAvatar: picture.three},
 //         {id:4, name:"Саша",   pathAvatar: picture.four},
 //         {id:5, name:"Витёк",  pathAvatar: picture.five},
 //         {id:6, name:"Валера", pathAvatar: picture.six}
 //       ],
 //       newMessageText: "",
 //     },
 //     navbar: {
 //       friends: [
 //         {id:1, name:"Дима",   pathAvatar: picture.one},
 //         {id:2, name:"Андрей", pathAvatar: picture.two},
 //         {id:3, name:"Света",  pathAvatar: picture.three},
 //         {id:4, name:"Саша",   pathAvatar: picture.four},
 //         {id:5, name:"Витёк",  pathAvatar: picture.five},
 //       ]
 //     }
 //   },

//    _callSubscriber() {
//      console.log("store: subscriber not set");
//    },
//
//    subscribe(callback) {
//      if (callback) {
//        this._callSubscriber = callback;
//      }
//    },
//
//    getState() {
//      return this._state;
//    },
//
//    dispatch(action) {
//      this._state.profilePage = profileReducer(this._state.profilePage, action);
//      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//      this._state.navbar      = navbarReducer(this._state.navbar, action)
//
//      this._callSubscriber(this._state);
//    }
//  }
//
// window.store = store; // Для дебага
//
// export default store
