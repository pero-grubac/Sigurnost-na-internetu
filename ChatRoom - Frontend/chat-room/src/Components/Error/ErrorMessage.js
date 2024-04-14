import { message } from "antd";

export const handleLoginError = () => {
  message.error("Invalid credentials");
};

export const handleTokenError = () => {
  message.error("Invalid token");
};

export const handleGetForumRooms = (error) => {
  checkJWT(error);
  message.error("Error happened");
};

export const handleUpdateForumRoom = (error) => {
  checkJWT(error);
  message.error("Error happened while updateing room");
};

export const handleCreateForumRoom = (error) => {
  checkJWT(error);
  message.error("Error happened while creating room");
};

export const hadnleDeleteForumRoom = (error) => {
  checkJWT(error);
  message.error("Error happened while deleting room");
};

export const hadnleCreateComment = (error) => {
  checkJWT(error);
  message.error("Error happened while creating comment");
};

export const hadnleGetComments = (error) => {
  checkJWT(error);
  message.error("Error happened while getting comments");
};

export const handleGetRequestedComments = (error) => {
  checkJWT(error);
  message.error("Error happened while getting comment requests ");
};

export const handleDeleteComments = (error) => {
  checkJWT(error);
  message.error("Error happened while deleting comment requests ");
};

export const handleApproveComments = (error) => {
  checkJWT(error);
  message.error("Error happened while approving comment requests ");
};

export const handleUpdateComments = (error) => {
  checkJWT(error);
  message.error("Error happened while updating comment requests ");
};
const checkJWT = (error) => {
  if (
    error.response &&
    error.response.status === 401 &&
    error.response.data.message === "JWT expired"
  ) {
    sessionStorage.clear();
  }
};
