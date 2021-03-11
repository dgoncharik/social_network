import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {showProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.showProfile(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

const withRouterContainer = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps,
                      {showProfile})(withRouterContainer);