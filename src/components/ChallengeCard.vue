<script setup lang="ts">
import { PhArrowFatLinesUp } from '@phosphor-icons/vue'
import { useChallengesStore } from '@/stores/challenges'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import bodyImage from '@/assets/body.svg'
import eyesImage from '@/assets/eye.svg'

const challengeStore = useChallengesStore()
const { activeChallenge } = storeToRefs(challengeStore)

const challengeImage = computed(() => {
  return activeChallenge.value?.type === 'body' ? bodyImage : eyesImage
})
const challengeCardTitle = computed(() => {
  return activeChallenge.value?.type === 'body' ? 'Exercite-se' : 'Mova os olhos'
})
const challengeCardDescription = computed(() => activeChallenge.value?.description)
</script>

<template>
  <div
    v-if="!activeChallenge"
    class="w-full flex gap-16 p-16 flex-col items-center justify-center bg-white rounded-xl"
  >
    <h2 class="font-medium text-zinc-500 text-2xl text-center max-w-4/6">
      Inicie um ciclo para receber desafios
    </h2>

    <div class="flex flex-col gap-4 items-center max-w-4/6 text-center">
      <PhArrowFatLinesUp :size="80" weight="fill" class="text-green-500" />
      <span class="text-zinc-400">Avance de level completando os desafios.</span>
    </div>
  </div>

  <div
    v-if="activeChallenge"
    class="w-full flex gap-8 flex-col items-center justify-between bg-white overflow-clip rounded-xl"
  >
    <span
      class="text-indigo-500 font-medium text-lg w-3/4 mx-auto py-6 inline-flex items-center justify-center gap-2 border-b border-zinc-200"
    >
      Ganhe 400 xp</span
    >

    <div class="flex flex-col gap-8 items-center justify-center px-16">
      <img :src="challengeImage" alt="Challenge Image" class="w-1/2" />

      <div class="flex flex-col gap-2 text-center">
        <h2 class="font-medium text-zinc-700 text-3xl">
          {{ challengeCardTitle }}
        </h2>
        <span class="text-zinc-400"> {{ challengeCardDescription }}</span>
      </div>
    </div>

    <footer class="flex w-full h-16">
      <button
        @click="challengeStore.resetChallenge()"
        class="w-full bg-rose-50 text-rose-500 font-medium text-lg hover:bg-rose-600 hover:text-white transition-colors duration-300"
      >
        Falhei
      </button>
      <button
        @click="challengeStore.completeChallenge()"
        class="w-full bg-green-50 text-green-500 font-medium text-lg hover:bg-green-600 hover:text-white transition-colors duration-300"
      >
        Completei o desafio
      </button>
    </footer>
  </div>
</template>
