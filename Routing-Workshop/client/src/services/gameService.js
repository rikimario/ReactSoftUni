const baseURL = "http://localhost:3030/jsonstore";

export const create = async (gameData) => {
  const response = await fetch(`${baseURL}/games`, {
    method: "POST",
    headers: {
      "content-type": "aplication/json",
    },
    body: JSON.stringify(gameData),
  });
  const result = await response.json();

  return result;
};
