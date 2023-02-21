import "../styles/gamesList.css";
// import "../assets/box-art-images"

function GameCard({ game }) {
  return (
    <li className="game-card">
      <div>
        <img
          src={`/assets/box-art-images/${game.id}.png`}
          alt={`${game.name} box art cannot be found`}
        />
        <h2 className="game-title">{game.name}</h2>
      </div>
    </li>
  );
}
export default GameCard;
