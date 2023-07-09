import { styled } from '@stitches/react';
import { Col } from 'antd';

import { ICard } from '../../types/board.type';

import { iconPath } from '../../images/card/index';
import { isSelectedCard } from '../../common/utils';

const BoardCard = styled('div', {
  // flex: '1',
  textAlign: 'center',

  variants: {
    selected: {
      true: {
        border: '1px solid red',
      },
      false: {
        border: '1px solid white',
      },
    },
  },
});

interface IProps {
  data: ICard;
  onClick: (card: ICard) => void;
  selectedCards: ICard[];
}

const Card = ({ data, onClick, selectedCards }: IProps) => {
  console.log(selectedCards);
  return (
    <BoardCard
      onClick={() => onClick(data)}
      selected={`${isSelectedCard(selectedCards, data)}`}
    >
      <img
        src={iconPath(data.color + data.shape + data.pattern + data.count)}
      />
    </BoardCard>
  );
};

export default Card;
