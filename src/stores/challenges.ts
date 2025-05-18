import { defineStore } from 'pinia'
import { computed, onMounted, ref, watch } from 'vue'
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export const useChallengesStore = defineStore('challenges', () => {
  const level = ref(1)
  const currentExperience = ref(0)
  const challengesCompleted = ref(0)

  const activeChallenge = ref<Challenge | null>(null)
  const isLevelUpModalOpen = ref(false)

  const experienceNeededToNextLevel = computed(() => Math.pow((level.value + 1) * 4, 2))

  onMounted(() => {
    Notification.requestPermission()
  })

  watch(
    [level, currentExperience, challengesCompleted],
    ([level, currentExperience, challengesCompleted]) => {
      localStorage.setItem('level', String(level))
      localStorage.setItem('currentExperience', String(currentExperience))
      localStorage.setItem('challengesCompleted', String(challengesCompleted))
    },
    { immediate: true },
  )

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const pickedChallenge = challenges[randomChallengeIndex] as Challenge

    activeChallenge.value = pickedChallenge

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${activeChallenge.value.amount} de xp!`,
      })
    }
  }

  const levelUp = () => {
    level.value++
    isLevelUpModalOpen.value = true
  }

  const closeLevelUpModal = () => {
    isLevelUpModalOpen.value = false
  }

  const completeChallenge = () => {
    if (!activeChallenge.value) {
      return
    }

    const { amount } = activeChallenge.value

    currentExperience.value += amount
    challengesCompleted.value++

    if (currentExperience.value >= experienceNeededToNextLevel.value) {
      levelUp()
    }

    activeChallenge.value = null
  }

  const resetChallenge = () => {
    activeChallenge.value = null
  }

  return {
    level,
    challengesCompleted,
    currentExperience,
    experienceNeededToNextLevel,
    activeChallenge,
    completeChallenge,
    startNewChallenge,
    resetChallenge,
    closeLevelUpModal,
    isLevelUpModalOpen,
  }
})
