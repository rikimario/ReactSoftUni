import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";

export default function Details() {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    gameService.getOne(gameId).then(setGame);
  }, [gameId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newComment = await commentService.create(
      gameId,
      formData.get("username"),
      formData.get("comment")
    );

    console.log(newComment);
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <input type="text" name="username" placeholder="username" />
          <textarea
            name="comment"
            placeholder="Comment......"
            defaultValue={""}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </section>
  );
}
