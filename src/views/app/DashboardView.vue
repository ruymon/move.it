<script setup lang="ts">
import { PhArrowFatLinesUp, PhPlay, PhX } from '@phosphor-icons/vue'
import { useCountdownStore } from '@/stores/countdown-store'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const countdownStoreData = useCountdownStore()
const { minutes, seconds, isActive } = storeToRefs(countdownStoreData)
const { startCountdown, resetCountdown } = countdownStoreData

const formattedMinutes = computed(() => String(minutes.value).padStart(2, '0').split(''))
const formattedSeconds = computed(() => String(seconds.value).padStart(2, '0').split(''))
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
          class="flex text-lg text-zinc-500 items-center justify-between border-b border-zinc-200 pb-4"
        >
          <span>Desafios completados</span>
          <span class="font-medium">00</span>
        </div>

        <div
          class="flex h-36 w-full justify-between text-zinc-700 font-semibold text-9xl leading-0"
        >
          <div class="overflow-clip rounded-2xl flex gap-1 h-full">
            <span class="bg-white w-28 inline-flex justify-center items-center">
              {{ formattedMinutes[0] }}
            </span>
            <span class="bg-white w-28 inline-flex justify-center items-center">
              {{ formattedMinutes[1] }}
            </span>
          </div>
          <div class="flex flex-col justify-center gap-4 px-4">
            <div class="min-h-3 aspect-square bg-zinc-700 rounded-full" />
            <div class="min-h-3 aspect-square bg-zinc-700 rounded-full" />
          </div>
          <div class="overflow-clip rounded-2xl flex gap-1 h-full">
            <span class="bg-white w-28 inline-flex justify-center items-center">
              {{ formattedSeconds[0] }}
            </span>
            <span class="bg-white w-28 inline-flex justify-center items-center">
              {{ formattedSeconds[1] }}
            </span>
          </div>
        </div>

        <button
          @click="startCountdown"
          v-if="!isActive"
          class="bg-indigo-500 hover:cursor-pointer hover:bg-indigo-600 transition-all h-20 justify-center text-white flex items-center gap-2 py-4 px-6 rounded-xl"
        >
          <span class="font-semibold text-lg">Iniciar um ciclo</span>
          <PhPlay :size="16" weight="fill" />
        </button>

        <button
          @click="resetCountdown"
          v-if="isActive"
          class="bg-white hover:cursor-pointer hover:bg-red-500 transition-all h-20 justify-center text-zinc-400 hover:text-white flex items-center gap-2 py-4 px-6 rounded-xl"
        >
          <span class="font-semibold text-lg">Abandonar ciclo</span>
          <PhX :size="16" />
        </button>
      </aside>

      <aside
        class="w-full max-w-1/2 flex gap-16 p-16 flex-col items-center justify-center bg-white rounded-xl"
      >
        <h2 class="font-medium text-zinc-500 text-2xl text-center max-w-4/6">
          Inicie um ciclo para receber desafios
        </h2>

        <div class="flex flex-col gap-4 items-center max-w-4/6 text-center">
          <PhArrowFatLinesUp :size="80" weight="fill" class="text-green-500" />
          <span class="text-zinc-400">Avance de level completando os desafios.</span>
        </div>
      </aside>
    </main>
  </main>
</template>
