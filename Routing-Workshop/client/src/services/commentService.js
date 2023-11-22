import * as request from "../lib/request";

const baseURL = "http://localhost:3030/data/comments";

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId=${gameId}`,
  });

  const result = await request.get(`${baseURL}?${query}`);

  return result;
};

export const create = async (gameId, username, text) => {
  const newComment = await request.post(baseURL, {
    gameId,
    username,
    text,
  });

  return newComment;
};
