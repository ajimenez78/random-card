import { Suit, CardValue, Card } from './card';

const IMAGES: string[][] = [];

IMAGES[Suit.Spades] = [];
IMAGES[Suit.Spades][CardValue.Ace] = '/img/cards/ace-spades.jpg';
IMAGES[Suit.Spades][CardValue.Two] = '/img/cards/two-spades.jpg';
IMAGES[Suit.Spades][CardValue.Three] = '/img/cards/three-spades.jpg';
IMAGES[Suit.Spades][CardValue.Four] = '/img/cards/four-spades.jpg';
IMAGES[Suit.Spades][CardValue.Five] = '/img/cards/five-spades.jpg';
IMAGES[Suit.Spades][CardValue.Six] = '/img/cards/six-spades.jpg';
IMAGES[Suit.Spades][CardValue.Seven] = '/img/cards/seven-spades.jpg';
IMAGES[Suit.Spades][CardValue.Eight] = '/img/cards/eight-spades.jpg';
IMAGES[Suit.Spades][CardValue.Nine] = '/img/cards/nine-spades.jpg';
IMAGES[Suit.Spades][CardValue.Ten] = '/img/cards/ten-spades.jpg';
IMAGES[Suit.Spades][CardValue.Jack] = '/img/cards/jack-spades.jpg';
IMAGES[Suit.Spades][CardValue.Queen] = '/img/cards/queen-spades.jpg';
IMAGES[Suit.Spades][CardValue.King] = '/img/cards/king-spades.jpg';

IMAGES[Suit.Hearts] = [];
IMAGES[Suit.Hearts][CardValue.Ace] = '/img/cards/ace-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Two] = '/img/cards/two-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Three] = '/img/cards/three-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Four] = '/img/cards/four-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Five] = '/img/cards/five-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Six] = '/img/cards/six-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Seven] = '/img/cards/seven-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Eight] = '/img/cards/eight-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Nine] = '/img/cards/nine-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Ten] = '/img/cards/ten-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Jack] = '/img/cards/jack-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.Queen] = '/img/cards/queen-hearts.jpg';
IMAGES[Suit.Hearts][CardValue.King] = '/img/cards/king-hearts.jpg';

IMAGES[Suit.Clubs] = [];
IMAGES[Suit.Clubs][CardValue.Ace] = '/img/cards/ace-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Two] = '/img/cards/two-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Three] = '/img/cards/three-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Four] = '/img/cards/four-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Five] = '/img/cards/five-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Six] = '/img/cards/six-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Seven] = '/img/cards/seven-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Eight] = '/img/cards/eight-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Nine] = '/img/cards/nine-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Ten] = '/img/cards/ten-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Jack] = '/img/cards/jack-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.Queen] = '/img/cards/queen-clubs.jpg';
IMAGES[Suit.Clubs][CardValue.King] = '/img/cards/king-clubs.jpg';

IMAGES[Suit.Diamonds] = [];
IMAGES[Suit.Diamonds][CardValue.Ace] = '/img/cards/ace-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Two] = '/img/cards/two-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Three] = '/img/cards/three-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Four] = '/img/cards/four-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Five] = '/img/cards/five-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Six] = '/img/cards/six-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Seven] = '/img/cards/seven-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Eight] = '/img/cards/eight-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Nine] = '/img/cards/nine-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Ten] = '/img/cards/ten-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Jack] = '/img/cards/jack-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.Queen] = '/img/cards/queen-diamonds.jpg';
IMAGES[Suit.Diamonds][CardValue.King] = '/img/cards/king-diamonds.jpg';

export const getImage = (card: Card) => {
  return IMAGES[card.suit][card.value];
};
