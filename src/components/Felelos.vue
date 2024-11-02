<script setup>
const props = defineProps(['poszt', 'nev', 'email', 'pek', 'kep', 'szoveg'])

const imgUrls = import.meta.glob('../assets/*.png', {
  import: 'default',
  eager: true
})
</script>

<template>
    <!-- Emberke -->
    <div class="flex w-full flex-col items-center md:items-start md:flex-row mt-10 md:mt-7">
          <!-- Bal -->
          <div class="flex flex-none h-[11rem]">
            <img class="flex flex-none h-[11rem]" :src="imgUrls[`../assets/${kep}`]" alt="">
          </div>
          <!-- Jobb -->
          <div class="flex flex-row w-auto px-3">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex text-lg font-semibold text-cyan-500 mt-2">{{ poszt }}</div>
              <div class="flex text-lg font-normal text-white">{{ nev }}</div>
              <div class="flex text-lg font-normal text-white"><a :href="'mailto://'+email">{{ email }}</a></div>
              <div class="flex text-lg font-normal text-white"><a :href="pek">PéK Profil</a></div>
            </div>
          </div>
          <!-- Podcast -->
          <div class="flex w-auto px-3 md:px-0 md:pl-16 md:pt-8 text-lg font-normal text-white">
            {{ szoveg }}
          </div>
    </div>
</template>