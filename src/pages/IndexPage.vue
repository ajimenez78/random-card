<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="store.pick">Generate</q-btn>
    <q-img :src="currentImage" />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBoardStore } from '../stores/board-store';
import { getImage } from '../features/cards/card-image-mapper';

const store = useBoardStore();
const currentImage = computed(() => getImage(store.selectedCard));
</script>
