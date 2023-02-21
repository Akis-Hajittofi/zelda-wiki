import { useEffect } from "react";
import GameCard from "./GameCard";
// import "../styles/gamesList.css";

function GamesList({ gamesList, setGamesList }) {
  // The list is not sorted in order of release. I'll need to make a function that achieves this
  // For now, make do with the 1st page, sort out the CSS & JSX.

  // TODO: Instead of getting the games list from the server, making my own file
  // storing the data in an array. Similar to store-items.js in Greengrocers.
  // This will make it easier for me since I want platform and box art data
  useEffect(() => {
    fetch("https://zelda.fanapis.com/api/games")
      .then((res) => res.json())
      .then((data) => {
        // console.log("THIS: ", data.data[0].id);
        setGamesList(data.data);

        // data.success === true ? setGamesList(data.data) : console.log("ERROR");
        // console.log("Response data: ", data.data);
        // console.log(gamesList);
        // Something random
      });
  }, []);

  return (
    <>
      <ul className="game-list">
        {gamesList.map((game, index) => (
          <GameCard game={game} key={index} />
        ))}
      </ul>
    </>
  );
}
export default GamesList;
