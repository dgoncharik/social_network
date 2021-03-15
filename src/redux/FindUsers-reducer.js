import {usersAPI} from "../api/api";

const FOLLOW_UNFOLLOW_SUCCES  = "FOLLOW_UNFOLLOW_SUCCES";
const SET_USERS               = "SET_USERS";
const CHANGE_CURRENT_PAGE     = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT   = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING      = "TOOGLE_IS_FETCHING";
const FOLLOWING_PROCESS       = "FOLLOWING_PROCESS";

let initalState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProcess: []
};

const findUsersReducer = (state=initalState, action) => {

  switch (action.type) {
    case(FOLLOW_UNFOLLOW_SUCCES):

      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) return {...user, followed: !user.followed};
          return user;
        })
      }

    case(CHANGE_CURRENT_PAGE):

      return {
        ...state,
        currentPage: action.newCurrentPage
      }

    case(SET_USERS):

      return {
        ...state,
        users: [...action.users]
      }

    case(SET_TOTAL_USERS_COUNT):
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
      case(TOOGLE_IS_FETCHING):
      return {
        ...state,
        isFetching: action.isFetching
      }

    case(FOLLOWING_PROCESS):
      return {
        ...state,
        followingProcess: action.isProcess ?
            [...state.followingProcess, action.userId] :
            state.followingProcess.filter(userId => userId !== action.userId)
      }
    default:
      return state;
  }
};

// action creators
export const followUnfollowSucces = (userId) => ({type: FOLLOW_UNFOLLOW_SUCCES, userId:userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (newCurrentPage) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const setFollowingProcess = (isProcess, userId) => ({type: FOLLOWING_PROCESS, isProcess, userId});

// thunk creators
export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then((response) => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsersCount(response.totalCount));
      dispatch(toogleIsFetching(false));
      dispatch(changeCurrentPage(page));
    });
  }
}

export const followUnfollow = (userId, followed) => {

  return (dispatch) => {
    dispatch(setFollowingProcess(true, userId));
    if (followed) {
      usersAPI.unfollow(userId).then((response) => {
        dispatch(setFollowingProcess(false, userId));
        if (response.resultCode === 0) {
          dispatch(followUnfollowSucces(userId))
        }
      })
    } else {
      usersAPI.follow(userId).then((response) => {
        dispatch(setFollowingProcess(false, userId));
        if (response.resultCode === 0) {
          dispatch(followUnfollowSucces(userId))
        }
      })
    }
  }
}

export default findUsersReducer;
