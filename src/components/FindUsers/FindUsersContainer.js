import React from 'react';
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
  changeCurrentPage,
  followUnfollow, setFollowingProcess,
  setTotalUsersCount,
  setUsers,
  toogleIsFetching,
} from "../../redux/FindUsers-reducer";
import Preloader from "../Common/Preoader/Preloader";
import {usersAPI} from "../../api/api";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((response) => {
      this.props.setUsers(response.items);
      this.props.setTotalUsersCount(response.totalCount);
      this.props.toogleIsFetching(false);
    });
  }

  onPaginationItemClick = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.changeCurrentPage(pageNumber);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.setUsers(response.items);
      this.props.toogleIsFetching(false);
    })
  }

  render() {

    return <>
    {this.props.isFetching && <Preloader/>}
    <FindUsers
        users={this.props.users}
        followUnfollow={this.props.followUnfollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPaginationItemClick={this.onPaginationItemClick}
        setFollowingProcess = {this.props.setFollowingProcess}
        followingProcess = {this.props.followingProcess}
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
                      {followUnfollow, setUsers, changeCurrentPage,
                        setTotalUsersCount, toogleIsFetching, setFollowingProcess})(FindUsersContainer);

