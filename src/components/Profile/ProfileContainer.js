import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserStatus, setUserProfile, showProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.autorizedUserId;
    if (!userId) {
      this.props.history.push("/login"); // redirect to login
    } else {
        this.props.showProfile(userId);
        this.props.getUserStatus(userId);
    }
  }

  componentWillUnmount() {
    this.props.setUserProfile(null);
  }

  render() {
    return <Profile {...this.props}/> ;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId
  }
}

export default compose(
    connect(mapStateToProps, {showProfile, getUserStatus, updateUserStatus, setUserProfile}),
    // withAuthRedirect,
    withRouter
)(ProfileContainer)