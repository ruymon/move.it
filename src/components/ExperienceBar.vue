<script setup lang="ts">
import { useChallengesStore } from '@/stores/challenges'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const challengesStore = useChallengesStore()
const { currentExperience, experienceNeededToNextLevel } = storeToRefs(challengesStore)

const progressPercentage = computed(() => {
  return Math.round((currentExperience.value * 100) / experienceNeededToNextLevel.value)
})
</script>

<template>
  <div class="w-full flex items-center">
    <span class="w-20 text-sm text-zinc-400">0 xp</span>

    <div class="flex-1 h-1.5 rounded-full bg-zinc-200 overflow-clip">
      <div class="bg-green-500 h-full" :style="{ width: `${progressPercentage}%` }" />
    </div>

    <span class="w-20 text-sm text-zinc-400 text-right">
      {{ experienceNeededToNextLevel }} xp
    </span>
  </div>
</template>
