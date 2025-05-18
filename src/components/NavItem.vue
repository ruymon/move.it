<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

interface NavItemProps {
  to: string
}

const props = defineProps<NavItemProps>()

const route = useRoute()
const isActive = computed(() => {
  return route.path === props.to
})
</script>

<template>
  <RouterLink
    :to="to"
    :data-active="isActive"
    class="flex h-14 relative w-full text-zinc-400 hover:text-zinc-500 data-[active='true']:text-indigo-500 items-center justify-center before:content-[''] before:absolute before:w-1 before:h-full data-[active='true']:before:bg-indigo-500 hover:before:bg-zinc-500 before:bg-white before:transition-colors before:duration-400 before:rounded-r-full before:left-0 transition-colors duration-400"
  >
    <slot />
  </RouterLink>
</template>
