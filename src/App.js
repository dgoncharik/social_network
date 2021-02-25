import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

  return (
      <div className="app-wrapper">

        <Header/>
        <Navbar state={props.state.navbar}/>

        <div className="app-wrapper-content">

          <Route path="/Dialogs"  render={ () => <Dialogs state={props.state.dialogsPage} updateNewMessage={props.updateNewMessage} sendMessage={props.sendMessage} /> } />
          <Route path="/Profile"  render={ () => <Profile state={props.state.profilePage} updateNewPostText={props.updateNewPostText} addNewPost={props.addNewPost}  /> } />
          <Route path="/News"     render={ () => <News />     } />
          <Route path="/Music"    render={ () => <Music />    } />
          <Route path="/Settings" render={ () => <Settings /> } />

        </div>
      </div>
  );
}

export default App;
