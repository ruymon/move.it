import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const DEFAULT_COUNTDOWN_TIME = 25 * 60

export const useCountdownStore = defineStore('countdown', () => {
  const time = ref(DEFAULT_COUNTDOWN_TIME)
  const isActive = ref(false)
  const isFinished = ref(false)
  const intervalId = ref<number | null>(null)

  const startCountdown = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value)
    }

    isActive.value = true
    isFinished.value = false

    intervalId.value = setInterval(() => {
      if (time.value <= 0) {
        clearInterval(intervalId.value!)
        intervalId.value = null

        isActive.value = false
        isFinished.value = true
      } else {
        time.value -= 1
      }
    }, 1000)
  }

  const resetCountdown = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }

    time.value = DEFAULT_COUNTDOWN_TIME

    isActive.value = false
    isFinished.value = false
  }

  const minutes = computed(() => Math.floor(time.value / 60))
  const seconds = computed(() => time.value % 60)

  return {
    isActive,
    resetCountdown,
    isFinished,
    startCountdown,
    minutes,
    seconds,
  }
})
