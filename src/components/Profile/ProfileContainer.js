import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {

    let userID = this.props.match.params.userID;
    if (!userID) userID = 15567;
    usersAPI.showProfile(userID).then((data) => {
      this.props.setUserProfile(data);
    })
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
                      {setUserProfile})(withRouterContainer);