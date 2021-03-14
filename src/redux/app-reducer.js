import {authorizeMe} from "./auth-reducer";

const INITIALIZATION_COMPLETE = "INITIALIZATION_COMPLETED";


const initialState = {
  initialized: false
}

const appReducer = (state=initialState, action) => {
  switch (action.type) {
    case(INITIALIZATION_COMPLETE):
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const initializationComplete = () => {return {type: INITIALIZATION_COMPLETE}};

export const initializeApp = () => {
  return (dispatch) => {
     const promise = dispatch(authorizeMe());
     promise.then(() => {
       dispatch(initializationComplete());
     })
  }
}

export default appReducer;