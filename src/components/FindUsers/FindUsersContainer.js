import React from 'react';
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
  changeCurrentPage, requestUsers, setFollowingProcess,
  followUnfollow
} from "../../redux/FindUsers-reducer";
import Preloader from "../Common/Preoader/Preloader";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  render() {

    return <>
    {this.props.isFetching && <Preloader/>}
    <FindUsers
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        getUsers={this.props.getUsers}
        followingProcess  = {this.props.followingProcess}
        followUnfollow = {this.props.followUnfollow}
    />
    </>
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage:state.findUsersPage.currentPage,
    isFetching: state.findUsersPage.isFetching,
    followingProcess: state.findUsersPage.followingProcess
  }
}

export default connect(mapStateToProps,
                      {changeCurrentPage,
                        setFollowingProcess, getUsers: requestUsers, followUnfollow})(FindUsersContainer);

