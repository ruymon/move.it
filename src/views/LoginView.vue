<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <div class="bg-indigo-500 h-svh flex items-center">
    <img
      class="max-w-1/2 -translate-x-32"
      alt="Move.it icon gradient"
      src="@/assets/symbol-gradient.svg"
    />

    <main class="flex-col flex gap-16 px-40 flex-1">
      <img alt="Move.it logo" src="@/assets/logo.svg" class="w-72" />

      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <h1 class="text-white font-bold text-4xl">Bem-vindo</h1>
          <span class="text-lg text-indigo-100">Faça login com seu Github para começar</span>
        </div>

        <div
          class="h-16 bg-gradient-to-r from-indigo-600 to-indigo-500 flex overflow-clip rounded-lg"
        >
          <input
            class="px-8 grow placeholder:text-indigo-300 text-white"
            type="text"
            placeholder="Digite seu username"
          />
          <button
            :disabled="true"
            class="h-full aspect-square disabled:bg-indigo-600 disabled:text-indigo-200 disabled:cursor-not-allowed bg-green-500 text-white flex items-center justify-center"
          >
            <PhArrowRight :size="24" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
