<script setup lang="ts">
import { PhPlay, PhX } from '@phosphor-icons/vue'
import { useCountdownStore } from '@/stores/countdown'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const countdownStoreData = useCountdownStore()
const { minutes, seconds, isActive } = storeToRefs(countdownStoreData)
const { startCountdown, resetCountdown } = countdownStoreData

const formattedMinutes = computed(() => String(minutes.value).padStart(2, '0').split(''))
const formattedSeconds = computed(() => String(seconds.value).padStart(2, '0').split(''))
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex h-36 w-full justify-between text-zinc-700 font-semibold text-9xl leading-0">
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
  </div>
</template>
