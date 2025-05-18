<script setup lang="ts">
import { PhArrowFatLinesUp } from '@phosphor-icons/vue'

interface LeaderboardItemProps {
  position: number
  name: string
  avatarUrl: string
  level: number
  xp: number
  completedTasksCount: number
}

defineProps<LeaderboardItemProps>()
</script>

<template>
  <div class="h-24 w-full flex gap-1 overflow-clip rounded-xl">
    <div class="bg-white flex items-center justify-center w-20">
      <span class="text-xl font-medium text-zinc-500">
        {{ position }}
      </span>
    </div>
    <div class="bg-white flex flex-1 items-center pl-6 pr-14 gap-14">
      <div class="flex gap-4 grow">
        <img class="w-14 h-14 rounded-full" alt="User avatar" :src="avatarUrl" />

        <div class="flex flex-col">
          <span class="text-xl font-semibold text-zinc-600">{{ name }}</span>
          <div class="flex items-center gap-1">
            <PhArrowFatLinesUp :size="16" weight="fill" class="text-green-500" />
            <span class="text-zinc-500">level {{ level }}</span>
          </div>
        </div>
      </div>

      <div class="flex gap-1">
        <span class="text-indigo-500 font-semibold">{{ completedTasksCount }}</span>
        <span class="text-zinc-600">completados</span>
      </div>

      <div class="flex gap-1">
        <span class="text-indigo-500 font-semibold">{{ xp }}</span>
        <span class="text-zinc-600">xp</span>
      </div>
    </div>
  </div>
</template>
