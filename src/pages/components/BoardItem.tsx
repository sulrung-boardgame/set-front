import { Card } from 'antd';
import { styled } from '@stitches/react';

import { ICard } from '../../types/board.type';

const BoardCard = styled(Card, {
  width: '100%',
  height: '100%',
  flex: '1',
});

interface IProps {
  data: ICard;
}

const BoardItem = ({ data }: IProps) => {
  const renderShape = (type: string) => {
    switch (type) {
      case 'penguins':
        return <>🐧</>;

      case 'panda':
        return <>🐼</>;

      case 'pig':
        return <>🐷</>;

      case 'butterfly':
        return <>🦋</>;
      case 'unicon':
        return <>🦄</>;
    }
  };

  return (
    <BoardCard bordered={false}>
      {[...Array(data.count)].map(() => renderShape(data.shape))}
    </BoardCard>
  );
};

export default BoardItem;
