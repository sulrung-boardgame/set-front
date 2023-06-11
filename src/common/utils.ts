import _ from 'lodash';
import { ICard } from '../types/board.type';

export const isSelectedCard = (list: ICard[], value: ICard) => {
  return _.findIndex(list, value) !== -1;
};
