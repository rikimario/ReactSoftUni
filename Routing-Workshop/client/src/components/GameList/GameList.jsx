import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as gameService from "../../services/gameService";

export default function GameList({ title, category, maxLevel, name, summary }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);
  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {/* Display div: with information about every game (if any) */}
      <div className="allGames">
        <div className="allGames-info">
          <img src="./images/avatar-1.jpg" />
          <h6>Action</h6>
          <h2>Cover Fire</h2>
          <Link to="/details" className="details-button">
            Details
          </Link>
        </div>
      </div>

      {/* Display paragraph: If there is no games  */}
      <h3 className="no-articles">No articles yet</h3>
    </section>
  );
}
