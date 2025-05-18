<script setup lang="ts">
import CountDownTimer from '@/components/CountDownTimer.vue'
import ChallengeCard from '@/components/ChallengeCard.vue'
import { useChallengesStore } from '@/stores/challenges'

const challengesStore = useChallengesStore()
const { challengesCompleted } = challengesStore
</script>

<template>
  <main class="flex flex-col flex-1 gap-24">
    <div class="w-full flex items-center">
      <span class="w-20 text-sm text-zinc-400">0 xp</span>

      <div class="flex-1 h-1.5 rounded-full bg-zinc-200 overflow-clip">
        <div class="w-[0%] bg-green-500 h-full" />
      </div>

      <span class="w-20 text-sm text-zinc-400 text-right">600 xp</span>
    </div>

    <main class="flex gap-32">
      <aside class="w-full flex flex-col gap-14">
        <header class="flex items-center gap-4">
          <img class="w-14 rounded-full" alt="User avatar" src="https://github.com/ruymon.png" />

          <div class="flex flex-col">
            <span class="text-2xl font-semibold text-zinc-700">Ruy Monteiro</span>
            <span class="text-zinc-500">level 1</span>
          </div>
        </header>

        <div
          class="flex text-lg text-zinc-500 items-center justify-between border-b border-zinc-300 pb-4"
        >
          <span>Desafios completados</span>
          <span class="font-medium">{{ challengesCompleted }}</span>
        </div>

        <CountDownTimer />
      </aside>

      <aside class="w-full max-w-1/2 flex">
        <ChallengeCard />
      </aside>
    </main>
  </main>
</template>
