  <script setup>
import Header from '../components/Header.vue'

document.title = "AC - Kapcsolat"

</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0"/>
    <div class="flex flex-col w-full h-auto px-8 py-4">
    
      <div class="felx text-xl font-bold text-sky-200">Kapcsolat</div>
      <div class="flex text-md text-white mt-2">
        1117 Budapest, BME Schönherz Kollégium, Irinyi József utca 42 <br> <br> Elérni minket az ac-info@simonyi.bme.hu-n tudsz.
      </div>
      
      <div class="felx text-xl font-bold text-sky-200 mt-7">Felelősök</div>
      
        <!-- Emberke -->
        <div class="flex flex-col items-center md:items-start md:flex-row w-full mt-3">
          <!-- Bal -->
          <div class="flex flex-none h-min">
            <img class="flex flex-none h-[11rem]" src="@/assets/barni.png" alt="">
          </div>
          <!-- Jobb -->
          <div class="flex flex-row w-auto md:px-3">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex text-lg font-semibold text-cyan-500 mt-2">Körvezető</div>
              <div class="flex text-lg font-normal text-white">Szántó Barnabás András</div>
              <div class="flex text-lg font-normal text-white"><a href="mailto://szanto.barnabas@simonyi.bme.hu">szanto.barnabas@simonyi.bme.hu</a></div>
              <div class="flex text-lg font-normal text-white"><a href="https://pek.sch.bme.hu/profiles/bszanto">PéK Profil</a></div>
            </div>
          </div>
          <!-- Podcast -->
          <div class="flex w-auto px-3 md:px-0 md:pl-16 md:pt-8 text-lg font-normal text-white">
            
          </div>
        </div>

        <!-- Emberke -->
        <div class="flex w-full flex-col items-center md:items-start md:flex-row mt-10 md:mt-7">
          <!-- Bal -->
          <div class="flex flex-none h-min">
            <img class="flex flex-none h-[11rem]" src="@/assets/nopic.png" alt="">
          </div>
          <!-- Jobb -->
          <div class="flex flex-row w-auto px-3">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex text-lg font-semibold text-cyan-500 mt-2">Stúdióvezető</div>
              <div class="flex text-lg font-normal text-white">Kiss Ábel</div>
              <div class="flex text-lg font-normal text-white"><a href="mailto://kiss.abel@simony.bme.hu">kiss.abel@simony.bme.hu</a></div>
              <div class="flex text-lg font-normal text-white"><a href="https://pek.sch.bme.hu/profiles/kissa">PéK Profil</a></div>
            </div>
          </div>
          <!-- Podcast -->
          <div class="flex w-auto px-3 md:px-0 md:pl-16 md:pt-8 text-lg font-normal text-white">
            
          </div>
        </div>
    
        <!-- Emberke -->
        <div class="flex w-full flex-col items-center md:items-start md:flex-row mt-10 md:mt-7">
          <!-- Bal -->
          <div class="flex flex-none h-min">
            <img class="flex flex-none h-[11rem]" src="@/assets/peti.png" alt="">
          </div>
          <!-- Jobb -->
          <div class="flex flex-row w-auto px-3">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex text-lg font-semibold text-cyan-500 mt-2">Gazdasági Felelős</div>
              <div class="flex text-lg font-normal text-white">Zombori Péter</div>
              <div class="flex text-lg font-normal text-white"><a href="mailto://zombori.peter@simonyi.bme.hu">zombori.peter@simonyi.bme.hu</a></div>
              <div class="flex text-lg font-normal text-white"><a href="https://pek.sch.bme.hu/profiles/zomborip">PéK Profil</a></div>
            </div>
          </div>
          <!-- Podcast -->
          <div class="flex w-auto px-3 md:px-0 md:pl-16 md:pt-8 text-lg font-normal text-white">
            
          </div>
        </div>


        <!-- Emberke -->
        <div class="flex w-full flex-col items-center md:items-start md:flex-row mt-10 md:mt-7">
          <!-- Bal -->
          <div class="flex flex-none h-[11rem]">
            <img class="flex flex-none h-[11rem]" src="@/assets/nopic.png" alt="">
          </div>
          <!-- Jobb -->
          <div class="flex flex-row w-auto px-3">
            <div class="flex flex-col items-center md:items-start">
              <div class="flex text-lg font-semibold text-cyan-500 mt-2">Karbantartás Felelős</div>
              <div class="flex text-lg font-normal text-white">Kurucz Márton</div>
              <div class="flex text-lg font-normal text-white"><a href="mailto://kurucz.marton@simonyi.bme.hu">kurucz.marton@simonyi.bme.hu</a></div>
              <div class="flex text-lg font-normal text-white"><a href="https://pek.sch.bme.hu/profiles/kmarci2002">PéK Profil</a></div>
            </div>
          </div>
          <!-- Podcast -->
          <div class="flex w-auto px-3 md:px-0 md:pl-16 md:pt-8 text-lg font-normal text-white">
            
          </div>
        </div>

    </div>
  </div>
</template>
