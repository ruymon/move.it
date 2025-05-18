<script setup lang="ts">
import LeaderboardItem from '@/components/LeaderboardItem.vue'

const MOCKED_LEADERBOARD = [
  {
    name: 'Ruy Monteiro',
    avatarUrl: 'https://github.com/ruymon.png',
    level: 1000,
    xp: 154000,
    completedTasksCount: 127,
  },
  {
    name: 'DoginUwU',
    avatarUrl: 'https://github.com/DoginUwU.png',
    level: 23,
    xp: 23830,
    completedTasksCount: 23,
  },
  {
    name: 'Kent C. Dodds',
    avatarUrl: 'https://github.com/kentcdodds.png',
    level: 782,
    xp: 119450,
    completedTasksCount: 98,
  },
  {
    name: 'Cassidy Williams',
    avatarUrl: 'https://github.com/cassidoo.png',
    level: 651,
    xp: 98000,
    completedTasksCount: 84,
  },
  {
    name: 'Sarah Drasner',
    avatarUrl: 'https://github.com/sdras.png',
    level: 587,
    xp: 87600,
    completedTasksCount: 79,
  },
  {
    name: 'Guillermo Rauch',
    avatarUrl: 'https://github.com/rauchg.png',
    level: 564,
    xp: 84200,
    completedTasksCount: 73,
  },
  {
    name: 'Ania Kubów',
    avatarUrl: 'https://github.com/kubowania.png',
    level: 481,
    xp: 71300,
    completedTasksCount: 65,
  },
  {
    name: 'Wes Bos',
    avatarUrl: 'https://github.com/wesbos.png',
    level: 453,
    xp: 67200,
    completedTasksCount: 61,
  },
  {
    name: 'Lee Robinson',
    avatarUrl: 'https://github.com/leerob.png',
    level: 392,
    xp: 58450,
    completedTasksCount: 54,
  },
  {
    name: 'Emma Bostian',
    avatarUrl: 'https://github.com/emmabostian.png',
    level: 367,
    xp: 54300,
    completedTasksCount: 49,
  },
  {
    name: 'Josh Comeau',
    avatarUrl: 'https://github.com/joshwcomeau.png',
    level: 349,
    xp: 51750,
    completedTasksCount: 47,
  },
  {
    name: 'Addy Osmani',
    avatarUrl: 'https://github.com/addyosmani.png',
    level: 315,
    xp: 46800,
    completedTasksCount: 43,
  },
  {
    name: 'Dan Abramov',
    avatarUrl: 'https://github.com/gaearon.png',
    level: 294,
    xp: 43500,
    completedTasksCount: 40,
  },
  {
    name: 'Sara Soueidan',
    avatarUrl: 'https://github.com/SaraSoueidan.png',
    level: 270,
    xp: 40100,
    completedTasksCount: 38,
  },
  {
    name: 'Evan You',
    avatarUrl: 'https://github.com/yyx990803.png',
    level: 256,
    xp: 37900,
    completedTasksCount: 36,
  },
  {
    name: 'Kelsey Hightower',
    avatarUrl: 'https://github.com/kelseyhightower.png',
    level: 217,
    xp: 32100,
    completedTasksCount: 31,
  },
  {
    name: 'Tania Rascia',
    avatarUrl: 'https://github.com/taniarascia.png',
    level: 198,
    xp: 29300,
    completedTasksCount: 28,
  },
  {
    name: 'Ali Spittel',
    avatarUrl: 'https://github.com/aspittel.png',
    level: 172,
    xp: 25450,
    completedTasksCount: 25,
  },
  {
    name: 'Swyx',
    avatarUrl: 'https://github.com/sw-yx.png',
    level: 154,
    xp: 22800,
    completedTasksCount: 22,
  },
  {
    name: 'Monica Powell',
    avatarUrl: 'https://github.com/M0nica.png',
    level: 129,
    xp: 19100,
    completedTasksCount: 19,
  },
  {
    name: 'Christian Nwamba',
    avatarUrl: 'https://github.com/codebeast.png',
    level: 107,
    xp: 15850,
    completedTasksCount: 16,
  },
  {
    name: 'Kyle Simpson',
    avatarUrl: 'https://github.com/getify.png',
    level: 86,
    xp: 12750,
    completedTasksCount: 13,
  },
  {
    name: 'Laurie Barth',
    avatarUrl: 'https://github.com/laurieontech.png',
    level: 74,
    xp: 10980,
    completedTasksCount: 11,
  },
  {
    name: 'Samantha Ming',
    avatarUrl: 'https://github.com/samanthaming.png',
    level: 62,
    xp: 9200,
    completedTasksCount: 9,
  },
  {
    name: 'Shawn Wang',
    avatarUrl: 'https://github.com/shawnwang.png',
    level: 53,
    xp: 7850,
    completedTasksCount: 8,
  },
  {
    name: 'Scott Hanselman',
    avatarUrl: 'https://github.com/shanselman.png',
    level: 45,
    xp: 6700,
    completedTasksCount: 7,
  },
  {
    name: 'Chris Heilmann',
    avatarUrl: 'https://github.com/codepo8.png',
    level: 38,
    xp: 5650,
    completedTasksCount: 6,
  },
  {
    name: 'Shaundai Person',
    avatarUrl: 'https://github.com/shaundai.png',
    level: 31,
    xp: 4600,
    completedTasksCount: 5,
  },
  {
    name: 'Sara Vieira',
    avatarUrl: 'https://github.com/SaraVieira.png',
    level: 26,
    xp: 3850,
    completedTasksCount: 4,
  },
  {
    name: 'Jason Lengstorf',
    avatarUrl: 'https://github.com/jlengstorf.png',
    level: 18,
    xp: 2680,
    completedTasksCount: 3,
  },
  {
    name: 'Yehuda Katz',
    avatarUrl: 'https://github.com/wycats.png',
    level: 12,
    xp: 1780,
    completedTasksCount: 2,
  },
  {
    name: 'Sarah Edo',
    avatarUrl: 'https://github.com/sarah-edo.png',
    level: 7,
    xp: 1050,
    completedTasksCount: 1,
  },
]
</script>

<template>
  <main class="flex flex-col flex-1">
    <h1 class="text-zinc-700 font-bold text-4xl">Leaderboard</h1>
    <div class="min-h-10 bg-gradient-to-b from-zinc-100 via-zinc-100/75 to-transparent z-10" />

    <div class="flex flex-col gap-3 overflow-y-scroll -mt-10 py-10">
      <div v-for="(item, index) in MOCKED_LEADERBOARD" :key="index">
        <LeaderboardItem
          :position="index + 1"
          :name="item.name"
          :avatarUrl="item.avatarUrl"
          :level="item.level"
          :xp="item.xp"
          :completedTasksCount="item.completedTasksCount"
        />
      </div>
    </div>
  </main>
</template>
