import GamesList from "../components/GamesList";

function Homepage({ gamesList, setGamesList }) {
  return (
    <>
      <GamesList gamesList={gamesList} setGamesList={setGamesList} />
    </>
  );
}
export default Homepage;
