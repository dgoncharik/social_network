const FOLLOW_UNFOLLOW       = "FOLLOW_UNFOLLOW";
const SET_USERS             = "SET_USERS";
const CHANGE_CURRENT_PAGE   = "CHANGE_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING    = "TOOGLE_IS_FETCHING";
const FOLLOWING_PROCESS     = "FOLLOWING_PROCESS";

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
    case(FOLLOW_UNFOLLOW):

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

export const followUnfollow = (userId) => ({type: FOLLOW_UNFOLLOW, userId:userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changeCurrentPage = (newCurrentPage) => ({type: CHANGE_CURRENT_PAGE, newCurrentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toogleIsFetching = (isFetching) => ({type: TOOGLE_IS_FETCHING, isFetching});
export const setFollowingProcess = (isProcess, userId) => ({type: FOLLOWING_PROCESS, isProcess, userId});

export default findUsersReducer;
