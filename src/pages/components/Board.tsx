import { useEffect, useState } from 'react';
import { Row } from 'antd';
import { styled } from '@stitches/react';
import { chunk } from 'lodash';

import theme from '../../style/theme';
import { EnColor, EnPattern, EnShape, ICard } from '../../types/board.type';

import Card from './Card';
import { isSelectedCard } from '../../common/utils';

const Container = styled('div', {
  background: theme.color.content,
  padding: '1rem',
  gap: '0.25rem',
  height: '100%',
  minHeight: '1100px',
});

const BoardRow = styled(Row, {
  gap: '0.25rem',
  // height: 'calc(25% - 0.25rem)',
  // marginBottom: '0.25rem',
});

const Board = () => {
  const [selectedList, setSelectedList] = useState<ICard[]>([]);
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]); // todo: store 에서 관리
  const [dummy] = useState<ICard[]>([
    {
      id: 0,
      color: EnColor.Red,
      shape: EnShape.Diamond,
      pattern: EnPattern.Empty,
      count: 2,
    },
    {
      id: 1,
      color: EnColor.Purple,
      shape: EnShape.Oval,
      pattern: EnPattern.Stripted,
      count: 2,
    },
    {
      id: 2,
      color: EnColor.Green,
      shape: EnShape.Zigzag,
      pattern: EnPattern.Filled,
      count: 1,
    },

    {
      id: 3,
      color: EnColor.Red,
      shape: EnShape.Zigzag,
      pattern: EnPattern.Stripted,
      count: 1,
    },
    {
      id: 4,
      color: EnColor.Green,
      shape: EnShape.Oval,
      pattern: EnPattern.Stripted,
      count: 2,
    },
    {
      id: 5,
      color: EnColor.Green,
      shape: EnShape.Diamond,
      pattern: EnPattern.Empty,
      count: 1,
    },
    {
      id: 6,
      color: EnColor.Purple,
      shape: EnShape.Diamond,
      pattern: EnPattern.Filled,
      count: 1,
    },
    {
      id: 7,
      color: EnColor.Red,
      shape: EnShape.Oval,
      pattern: EnPattern.Filled,
      count: 2,
    },
    {
      id: 8,
      color: EnColor.Purple,
      shape: EnShape.Oval,
      pattern: EnPattern.Empty,
      count: 2,
    },
    {
      id: 9,
      color: EnColor.Green,
      shape: EnShape.Zigzag,
      pattern: EnPattern.Stripted,
      count: 3,
    },
    {
      id: 10,
      color: EnColor.Purple,
      shape: EnShape.Zigzag,
      pattern: EnPattern.Empty,
      count: 1,
    },
    {
      id: 11,
      color: EnColor.Green,
      shape: EnShape.Diamond,
      pattern: EnPattern.Filled,
      count: 2,
    },
  ]);

  const onClickCard = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    setSelectedList((list) => {
      if (list.includes(target.innerText)) {
        return list.filter((item) => item !== target.textContent);
      }
      const textContent = target.innerText.trim();
      if (textContent) {
        return [...list, textContent];
      }
      return list;
    });
  };

  const handleCardOnClick = (card: ICard) => {
    if (isSelectedCard(selectedCards, card)) {
      setSelectedCards(selectedCards.filter((item) => item.id !== card.id));
    } else {
      if (selectedCards.length >= 3) return;
      setSelectedCards([...selectedCards, { ...card }]);
    }
  };

  useEffect(() => {
    console.log({ selectedList });
  }, [selectedList]);

  return (
    <Container className="board-container" onClick={onClickCard}>
      {chunk(dummy, 3).map((row: ICard[], index: number) => (
        <BoardRow key={index}>
          {row.map((item) => (
            <Card
              key={item.id}
              data={item}
              onClick={handleCardOnClick}
              selectedCards={selectedCards}
            />
          ))}
        </BoardRow>
      ))}
    </Container>
  );
};

export default Board;
