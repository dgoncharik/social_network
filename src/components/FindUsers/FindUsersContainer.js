import React from 'react';
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
  changeCurrentPageAC,
  followUnfollowAC,
  setTotalUsersCountAC,
  setUsersAC,
  toogleIsFetching
} from "../../redux/FindUsers-reducer";
import * as axios from "axios";
import Preloader from "../Common/Preoader/Preloader";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    this.props.toogleIsFetching(true);
    const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(URL).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.toogleIsFetching(false);
    })
  }

  onPaginationItemClick = (pageNumber) => {
    this.props.toogleIsFetching(true);
    this.props.changeCurrentPage(pageNumber);
    const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(URL).then((response) => {
      this.props.setUsers(response.data.items);
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
    isFetching: state.findUsersPage.isFetching
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    followUnfollow: (userID) => {
     dispatch(followUnfollowAC(userID));
   },

   setUsers: (users) => {
      dispatch(setUsersAC(users));
   },

   changeCurrentPage: (newCurrentPage) => {
      dispatch(changeCurrentPageAC(newCurrentPage));
   },

    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },

    toogleIsFetching: (isFetching) => {
      dispatch(toogleIsFetching(isFetching));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

