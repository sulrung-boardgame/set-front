import { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { difference, chunk } from 'lodash';

import theme from '@/style/theme';
import { EnColor, EnPattern, EnShape, ICard } from '@/types/board.type';

import Card from './Card';
import {
  isSelectedCard,
  getDeck,
  shuffle,
  isSet,
  isValidFeature,
  anySet,
} from '@/common/utils';

const Container = styled('div', {
  background: theme.color.content,
  padding: '1rem',
  gap: '0.25rem',
  height: '100%',
  minHeight: '1100px',
  display: 'flex',
  flexWrap: 'wrap',
});

const Board = () => {
  const [deck, setDeck] = useState<ICard[]>([]);
  const [opened, setOpened] = useState<ICard[]>([]);
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);

  const handleCardOnClick = (card: ICard) => {
    if (isSelectedCard(selectedCards, card)) {
      setSelectedCards(selectedCards.filter((item) => item.key !== card.key));
    } else {
      if (selectedCards.length >= 3) return;
      setSelectedCards([...selectedCards, { ...card }]);
    }
  };

  useEffect(() => {
    setDeck(getDeck());
  }, []);

  useEffect(() => {
    let newList = deck.splice(0, 12);
    let count = 0;
    while (!anySet(newList) && count < 10) {
      setDeck((deck) => [...shuffle(deck)]);
      newList = deck.splice(0, 12);
      count++;
      console.log({ count });
    }
    setOpened(newList);
  }, [deck]);

  useEffect(() => {
    console.log({ opened });
  }, [opened]);

  useEffect(() => {
    if (selectedCards.length === 3) {
      // claim

      if (isSet(selectedCards)) {
        alert('set');
        // setOpened((opened) => difference(opened, selectedCards));
        console.log({
          opened,
          selectedCards,
          result: difference(opened, selectedCards),
        });
        setSelectedCards([]);
      } else {
        alert('not set');
        setSelectedCards([]);
      }
    }
  }, [selectedCards, opened]);

  return (
    <Container className="board-container">
      {opened.map((openedCard: ICard, index: number) => (
        <Card
          key={index}
          data={openedCard}
          onClick={handleCardOnClick}
          selectedCards={selectedCards}
        />
      ))}
    </Container>
  );
};

export default Board;
