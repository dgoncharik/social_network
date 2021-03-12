import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {showProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.showProfile(this.props.match.params.userId);
  }

  render() {
    return <Profile {...this.props}/> ;
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
    connect(mapStateToProps, {showProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)