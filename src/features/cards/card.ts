export enum Suit {
  Spades = 0,
  Hearts,
  Clubs,
  Diamonds,
  __LENGTH,
}

export enum CardValue {
  Ace = 0,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  __LENGTH,
}

export type Card = {
  suit: Suit;
  value: CardValue;
};
