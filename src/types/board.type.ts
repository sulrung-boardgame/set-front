export enum EnColor {
  Red = 'red',
  Green = 'green',
  Purple = 'purple',
}

export enum EnShape {
  Diamond = 'diamond',
  Oval = 'oval',
  Squiggle = 'squiggle',
}

export enum EnPattern {
  Solid = 'solid',
  Stripted = 'striped',
  Outlined = 'outlined',
}

export interface ICard {
  key: string;
  color: EnColor;
  shape: EnShape;
  pattern: EnPattern;
  count: number;
}
