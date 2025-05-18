<script setup lang="ts">
import { PhHouse, PhRanking } from '@phosphor-icons/vue'
import NavItem from '@/components/NavItem.vue'
</script>

<template>
  <div class="h-svh flex bg-zinc-100">
    <nav class="h-full bg-white w-24 flex flex-col justify-between items-center pt-8">
      <img class="w-12" alt="Move.it icon" src="@/assets/icon.svg" />

      <div class="flex flex-col gap-4 -translate-y-12 grow justify-center w-full">
        <NavItem to="/app">
          <PhHouse :size="32" />
        </NavItem>

        <NavItem to="/app/leaderboard">
          <PhRanking :size="32" />
        </NavItem>
      </div>
    </nav>

    <div class="flex-1 flex mx-auto max-w-6xl px-8 pt-10 overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>
