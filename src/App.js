import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import PreloaderKitKat from "./components/Common/PreloaderKitKat/PreloaderKitKat";

class App extends Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <PreloaderKitKat/>
    }

    return (
        <div className="app-wrapper">

          <HeaderContainer/>
          <NavbarContainer/>

          <div className="app-wrapper-content">

            <Route path="/Dialogs" render={() => <DialogsContainer/>}/>
            <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route path="/News" render={() => <News/>}/>
            <Route path="/Music" render={() => <Music/>}/>
            <Route path="/Settings" render={() => <Settings/>}/>
            <Route path="/FindUsers" render={() => <FindUsersContainer/>}/>
            <Route path="/login" render={() => <Login/>}/>

          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initializeApp})(App);
