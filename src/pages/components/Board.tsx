import { Card, Row } from 'antd';
import theme from '../../style/theme';

import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';

const BoardRow = styled(Row, {
  gap: '0.25rem',
  height: 'calc(25% - 0.25rem)',
  marginBottom: '0.25rem',
});

const BoardCard = styled(Card, {
  maxWidth: '33%',
  height: '100%',
  flex: '1',
});

type SelectedList = string[];

const Board = () => {
  const [selectedList, setSelectedList] = useState<SelectedList>([]);

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
      <BoardRow>
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
      </BoardRow>
    </div>
  );
};

export default Board;
