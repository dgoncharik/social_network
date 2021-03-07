import React from 'react';
import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {changeCurrentPageAC, followUnfollowAC, setTotalUsersCountAC, setUsersAC} from "../../redux/FindUsers-reducer";
import * as axios from "axios";

class FindUsersContainer extends React.Component {

  componentDidMount() {
    const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
    axios.get(URL).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }

  onPaginationItemClick = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
    const URL = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
    axios.get(URL).then((response) => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return <FindUsers
        users={this.props.users}
        followUnfollow={this.props.followUnfollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPaginationItemClick={this.onPaginationItemClick}
    />
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.findUsersPage.users,
    pageSize: state.findUsersPage.pageSize,
    totalUsersCount: state.findUsersPage.totalUsersCount,
    currentPage:state.findUsersPage.currentPage
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindUsersContainer);

