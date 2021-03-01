import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

  return (
      <div className="app-wrapper">

        <Header/>
        <Navbar state={props.store.getState().navbar}/>

        <div className="app-wrapper-content">

          <Route path="/Dialogs"  render={ () => <DialogsContainer store={props.store} /> } />
          <Route path="/Profile"  render={ () => <Profile store={props.store} /> } />
          <Route path="/News"     render={ () => <News />     } />
          <Route path="/Music"    render={ () => <Music />    } />
          <Route path="/Settings" render={ () => <Settings /> } />

        </div>
      </div>
  );
}

export default App;
