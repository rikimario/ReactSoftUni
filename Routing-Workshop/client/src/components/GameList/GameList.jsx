import { useEffect, useState } from "react";
import * as gameService from "../../services/gameService";
import GameListItem from "./GameListItem/GameListItem";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* <div class="allGames-info">
        <img src="./images/avatar-1.jpg" />
        <h6>Action</h6>
        <h2>Cover Fire</h2>
        <a href="#" class="details-button">
          Details
        </a>
      </div> */}
      {/* Display div: with information about every game (if any) */}
      {games.map((game) => (
        <GameListItem key={game._id} {...game} />
      ))}

      {/* Display paragraph: If there is no games  */}
      {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
}
