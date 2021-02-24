import { createContext, useState, ReactNode, useCallback } from "react";

import diceSides from "../lib/dices-sides";

type DiceProviderProps = {
  children: ReactNode;
};

export const DiceContext = createContext({} as DiceContextData);

export function DiceProvider({ children }: DiceProviderProps) {
  const initialNumber = 1;

  const [rolledNumber, setRolledNumber] = useState<number>(initialNumber);

  // # Dice

  const [dice, setDice] = useState<IDice>({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: diceSides[initialNumber - 1].rotation,
  });

  // # Rolling

  const [rolling, setRolling] = useState<boolean>(false);

  const startRoll = useCallback(() => {
    setRolling(true);
    setTimeout(() => {
      // Select a random number

      const rngIndex = Math.floor(Math.random() * diceSides.length);
      const rngDice = diceSides[rngIndex];

      // Update props

      setRolledNumber(rngDice.side);

      setDice((oldState) => {
        return {
          ...oldState,
          rotation: rngDice.rotation,
        };
      });

      setRolling(false);
    }, 2000);
  }, []);

  return (
    <DiceContext.Provider
      value={{
        dice,
        rolling,
        rolledNumber,
        startRoll,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
}
