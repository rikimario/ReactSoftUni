import * as request from "../lib/request";

const baseURL = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(baseURL);

  return result;
};

export const getOne = async (gameId) => {
  const result = await request.get(`${baseURL}/${gameId}`);

  return result;
};

export const create = async (gameData) => {
  const result = await request.post(baseURL, gameData);

  return result;
};
