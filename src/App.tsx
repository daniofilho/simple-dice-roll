import { useEffect, useState } from "react";
import Dice from "./components/Dice";

function App() {
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (rolling) {
      setTimeout(() => {
        setRolling(false);
      }, 2000);
    }
  }, [rolling]);

  return (
    <main>
      <section>
        <Dice rolling={rolling} />
      </section>
      <footer>
        <button
          type="button"
          onClick={() => setRolling(true)}
          disabled={rolling}
        >
          {rolling ? "rolling..." : "roll"}
        </button>
      </footer>
    </main>
  );
}

export default App;
