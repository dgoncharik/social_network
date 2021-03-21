import {usersAPI} from "../api/api";

const FOLLOW_UNFOLLOW_SUCCES  = "findUsers/FOLLOW_UNFOLLOW_SUCCES";
const SET_USERS               = "findUsers/SET_USERS";
const CHANGE_CURRENT_PAGE     = "findUsers/CHANGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT   = "findUsers/SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING      = "findUsers/TOOGLE_IS_FETCHING";
const FOLLOWING_PROCESS       = "findUsers/FOLLOWING_PROCESS";

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

  return async (dispatch) => {
    dispatch(setFollowingProcess(true, userId));
    if (followed) {
      const response = await usersAPI.unfollow(userId);
      dispatch(setFollowingProcess(false, userId));
      if (response.resultCode === 0) {
        dispatch(followUnfollowSucces(userId))
      }
    } else {
        const response = await usersAPI.follow(userId);
        dispatch(setFollowingProcess(false, userId));
        if (response.resultCode === 0) {
          dispatch(followUnfollowSucces(userId))
        }
    }
  }
}

export default findUsersReducer;
