import * as actionTypes from "./types";

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_USER:
      // Update isLoggedIn to true in a new state object
      const updatedState = {
        ...state,
        isLoggedIn: true,
      };

      // Store the updated state in local storage
      localStorage.setItem("auth", JSON.stringify(updatedState));

      // Return the updated state
      return updatedState;

    case actionTypes.SIGN_OUT_USER:
      localStorage.removeItem("auth");
      // Return the updated state
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default authReducer;

const INITIAL_STATE = {
  isLoggedIn: JSON.parse(localStorage.getItem("auth")),
};
