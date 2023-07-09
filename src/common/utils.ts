import findIndex from 'lodash/findIndex';
import { ICard } from '../types/board.type';

export const isSelectedCard = (list: ICard[], value: ICard) => {
  return findIndex(list, value) !== -1;
};
