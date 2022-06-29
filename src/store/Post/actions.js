import { constants } from "../../app";

export const getAllPost = (payload) => {
  return {
    type: constants.GET_ALL_POST,
    payload,
  };
};

export const getPostSuccess = (payload) => {
  return {
    type: constants.GET_POST_SUCCESS,
    payload,
  };
};
export const getPostError = (payload) => {
  return {
    type: constants.GET_POST_ERROR,
    payload,
  };
};

export const addNewPost = (payload) => {
  return {
    type: constants.ADD_NEW_POST,
    payload,
  };
};
