/* Common */
declare interface ICoordinates {
  x: number;
  y: number;
  z: number;
}

declare type DiceKeys = "position" | "rotation";

declare interface IDice {
  position: ICoordinates;
  rotation: ICoordinates;
}

/* Dice Context */
declare type updateDiceProps = {
  key: DiceKeys;
  values: ICoordinates;
};

declare type DiceContextData = {
  dice: IDice;
  rolling: boolean;
  rolledNumber: number;
  startRoll(): void;
};
