import { styled } from '@stitches/react';
import { Col } from 'antd';

import { ICard } from '../../types/board.type';

import { iconPath } from '../../images/card/index';

const BoardCard = styled(Col, {
  // flex: '1',
  textAlign: 'center',
});

interface IProps {
  data: ICard;
}

const Card = ({ data }: IProps) => {
  return (
    <BoardCard bordered={false}>
      <img
        src={iconPath(data.color + data.shape + data.pattern + data.count)}
      />
    </BoardCard>
  );
};

export default Card;
