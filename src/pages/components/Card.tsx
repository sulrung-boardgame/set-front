import { styled } from '@stitches/react';
import { Col } from 'antd';

import { ICard } from '@/types/board.type';

import { iconPath } from '@/images/card/index';
import { isSelectedCard } from '@/common/utils';

const BoardCard = styled('div', {
  // flex: '1',
  textAlign: 'center',
  flexBasis: '30%',
  height: 'calc(100% / 4)',

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
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
  },
});

interface IProps {
  data: ICard;
  onClick: (card: ICard) => void;
  selectedCards: ICard[];
}

const Card = ({ data, onClick, selectedCards }: IProps) => {
  return (
    <BoardCard
      onClick={() => onClick(data)}
      selected={`${isSelectedCard(selectedCards, data)}`}
    >
      <img
        src={iconPath(
          `${data.color}_${data.shape}_${data.pattern}_${data.count}`
        )}
      />
    </BoardCard>
  );
};

export default Card;
