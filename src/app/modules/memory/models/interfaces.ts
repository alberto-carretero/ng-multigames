export interface ICard {
  image: string;
  selected: boolean;
  value: string;
  locked: boolean;
}

export interface IMemoryGameState {
  isFinished: boolean;
  isSuccesful: boolean;
}
