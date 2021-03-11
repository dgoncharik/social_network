import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {showProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.showProfile(this.props.match.params.userId);
  }

  render() {
    return this.props.isAuth ? <Profile {...this.props}/> : <Redirect to={"/login"}/>;
  }
}

const withRouterContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps,
                      {showProfile})(withRouterContainer);