import * as actionTypes from "./types";
//this are the functions to be attached to the actions decleared in the shop-types file

export const authenticateUser = (itemID) => {
  //it returns the type of action performed and a payload you want
  return {
    type: actionTypes.AUTHENTICATE_USER,
    payload: {},
  };
};
