import { useEffect, useState } from 'react';
import { Row } from 'antd';
import { styled } from '@stitches/react';

import theme from '../../style/theme';
import { ICard } from '../../types/board.type';

import BoardItem from './BoardItem';

const BoardRow = styled(Row, {
  gap: '0.25rem',
  height: 'calc(25% - 0.25rem)',
  marginBottom: '0.25rem',
});

const Board = () => {
  const [selectedList, setSelectedList] = useState<ICard[]>([]);
  const [dummy] = useState<ICard[][]>([
    [
      { id: 0, color: 'red', count: 2, shape: 'penguins' },
      { id: 0, color: 'blue', count: 2, shape: 'panda' },
      { id: 0, color: 'green', count: 1, shape: 'penguins' },
    ],
    [
      { id: 0, color: 'red', count: 1, shape: 'pig' },
      { id: 0, color: 'green', count: 2, shape: 'unicon' },
      { id: 0, color: 'green', count: 1, shape: 'unicon' },
    ],
    [
      { id: 0, color: 'blue', count: 1, shape: 'butterfly' },
      { id: 0, color: 'red', count: 2, shape: 'pig' },
      { id: 0, color: 'blue', count: 2, shape: 'panda' },
    ],
    [
      { id: 0, color: 'green', count: 3, shape: 'penguins' },
      { id: 0, color: 'blue', count: 1, shape: 'panda' },
      { id: 0, color: 'green', count: 2, shape: 'butterfly' },
    ],
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

  useEffect(() => {
    console.log({ selectedList });
  }, [selectedList]);

  return (
    <div
      className="board-container"
      style={{
        background: theme.color.content,
        padding: '1rem',
        gap: '0.25rem',
        height: '100%',
      }}
      onClick={onClickCard}
    >
      {dummy.map((row) => (
        <BoardRow>
          {row.map((col) => (
            <BoardItem data={col} />
          ))}
        </BoardRow>
      ))}
      {/* <BoardRow>
        <BoardCard bordered={false}>🐧🐧</BoardCard>
        <BoardCard bordered={false}>🐼🐼🐼</BoardCard>
        <BoardCard bordered={false}>🐧</BoardCard>
      </BoardRow>
      <BoardRow>
        <BoardCard bordered={false}>🐷</BoardCard>
        <BoardCard bordered={false}>🦄🦄</BoardCard>
        <BoardCard bordered={false}>🦄</BoardCard>
      </BoardRow>
      <BoardRow>
        <BoardCard bordered={false}>🦋</BoardCard>
        <BoardCard bordered={false}>🐷🐷</BoardCard>
        <BoardCard bordered={false}>🐼🐼</BoardCard>
      </BoardRow>
      <BoardRow>
        <BoardCard bordered={false}>🐧🐧🐧</BoardCard>
        <BoardCard bordered={false}>🐼</BoardCard>
        <BoardCard bordered={false}>🦋🦋</BoardCard>
      </BoardRow> */}
    </div>
  );
};

export default Board;
