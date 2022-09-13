import { defineStore } from 'pinia';
import { Suit, CardValue, Card } from 'src/features/cards/card';

export const useBoardStore = defineStore('board', {
  state: () => ({
    selectedCard: generateRandomCard(),
  }),
  actions: {
    pick() {
      this.selectedCard = generateRandomCard();
    },
  },
});

const generateRandomCard = (): Card => {
  return {
    suit: Math.floor(Math.random() * Suit.__LENGTH),
    value: Math.floor(Math.random() * CardValue.__LENGTH),
  };
};
