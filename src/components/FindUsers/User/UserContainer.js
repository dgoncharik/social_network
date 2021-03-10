import React from "react";
import {connect} from "react-redux";
import User from "./User";
import * as axios from "axios";
import {usersAPI} from "../../../api/api";

class UserContainer extends React.Component {

  btnFollowUnfollowDisabled = false;

  followUnfollow = () => {
    this.props.setFollowingProcess(true, this.props.id);
    if (this.props.followed === true) {
      usersAPI.unfollow(this.props.id).then((response) => {
        this.props.setFollowingProcess(false, this.props.id);
        if (response.resultCode === 0) {
          this.props.followUnfollow(this.props.id)
        };
      })
    } else {
        usersAPI.follow(this.props.id).then((response) => {
          this.props.setFollowingProcess(false, this.props.id);
          if (response.resultCode === 0) {
            this.props.followUnfollow(this.props.id)
          };
        })
    }
  }


  render() {
    return <User {...this.props} followUnfollow={this.followUnfollow} />
  }
}



export default UserContainer;