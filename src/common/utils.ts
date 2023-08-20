import findIndex from 'lodash/findIndex';
import { ICard, EnShape, EnColor, EnPattern } from '../types/board.type';

export const isSelectedCard = (list: ICard[], value: ICard) => {
  return findIndex(list, value) !== -1;
};

export function getDeck(): ICard[] {
  const shapes: EnShape[] = Object.values(EnShape);
  const colors: EnColor[] = Object.values(EnColor);
  const counts: number[] = [1, 2, 3];
  const patterns: EnPattern[] = Object.values(EnPattern);

  const deck: ICard[] = [];
  for (const shape of shapes) {
    for (const color of colors) {
      for (const count of counts) {
        for (const pattern of patterns) {
          deck.push({ key: `${deck.length}`, shape, color, count, pattern });
        }
      }
    }
  }
  return shuffle(deck);
}

export function shuffle(deck: ICard[]): ICard[] {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export function isSet(cards: ICard[]): boolean {
  if (cards.length !== 3) {
    return false;
  }

  const shapes = cards.map((card) => card.shape);
  const colors = cards.map((card) => card.color);
  const counts = cards.map((card) => card.count);
  const shadings = cards.map((card) => card.pattern);

  if (
    isValidFeature(shapes) &&
    isValidFeature(colors) &&
    isValidFeature(counts) &&
    isValidFeature(shadings)
  ) {
    return true;
  } else {
    return false;
  }
}

export function isValidFeature(features: Array<string | number>): boolean {
  // Check if all three features are the same
  if (features[0] === features[1] && features[1] === features[2]) {
    return true;
  }

  // Check if all three features are different
  if (
    features[0] !== features[1] &&
    features[1] !== features[2] &&
    features[2] !== features[0]
  ) {
    return true;
  }

  return false;
}

export function anySet(board: ICard[]): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = i + 1; j < board.length; j++) {
      for (let k = j + 1; k < board.length; k++) {
        const card1 = board[i];
        const card2 = board[j];
        const card3 = board[k];

        if (isSet([card1, card2, card3])) {
          return true;
        }
      }
    }
  }
  return false;
}
