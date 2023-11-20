import * as requset from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/comments";

export const create = async (gameId, username, text) => {
  const newComment = await requset.post(baseURL, {
    gameId,
    username,
    text,
  });

  return newComment;
};
