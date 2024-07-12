import { HangedPhaseEnum } from './enums';

export interface IHanged {
  riddle: string;
  letters: ILetter[];
  lettersRiddle: ILetter[];
  attempts: number;
  lastSelection: string;
  phase: HangedPhaseEnum;
}

export interface ILetter {
  name: string;
  isSelected?: boolean;
}
