import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";

const rerenderEntireThree = (state) => {

  ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
              state={state}
              updateNewPostText={store.updateNewPostText.bind(store)}
              addNewPost={store.addNewPost.bind(store)}
              updateNewMessage = {store.updateNewMessage.bind(store)}
              sendMessage = {store.sendMessage.bind(store)}
          />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
  );
};

store.subscribe(rerenderEntireThree)
rerenderEntireThree(store.getState());







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
