export enum EnColor {
  Red = 'r',
  Green = 'g',
  Purple = 'p',
}

export enum EnShape {
  Diamond = 'd',
  Oval = 'o',
  Zigzag = 'z',
}

export enum EnPattern {
  Filled = 'f',
  Stripted = 's',
  Empty = 'e',
}

export interface ICard {
  id: number;
  color: EnColor;
  shape: EnShape;
  pattern: EnPattern;
  count: number;
}
