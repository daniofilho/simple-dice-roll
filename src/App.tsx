import { useContext } from "react";

import Dice from "./components/Dice";
import { DiceContext } from "./contexts/DiceContext";

function App() {
  const { rolling, startRoll, rolledNumber } = useContext(DiceContext);

  return (
    <main>
      <section>
        <Dice />
      </section>
      <footer>
        <button type="button" onClick={() => startRoll()} disabled={rolling}>
          {rolling ? "rolling..." : "roll"}
        </button>
        <p>{rolledNumber}</p>
      </footer>
    </main>
  );
}

export default App;
