<script setup>
import Header from '../components/Header.vue'

document.title = "AC - Tanfolyam"
</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0"/>
      <div class="flex flex-col w-full h-auto px-8 py-4">

        <div class="felx text-xl font-bold text-sky-200">Tanfolyam</div>
        <div class="flex text-md text-white mt-2">
          A tanfolyam alkalmával betekintést szerezhetsz a rendezvényipar minden részlegével. 
          Ezentúl felkerülsz az ac-tanfolyam@ levlistára, ahol számos hasznos információval értesülhetsz. 
          <br>
          Az előadásokon és gyakorlati alkalmakon hallani fogsz a következő témákról: hangtechnika, elektroakusztika, 
          equalizerek, dinamikaszabályzók, effektek, keverőpultok, rendszertechnika, fénytechnika és vizuális effektek. 
        </div>
        
        
        <!-- Emberke 
        <div class="felx text-xl font-bold text-sky-200 mt-7">Tanfolyamfelelős</div>
        <div class="flex flex-col md:flex-row  w-full mt-1">
          <div class="flex flex-none w-1/3 md:w-1/6">
            <img class="flex flex-none" src="@/assets/pic1.png" alt="">
          </div>
          <div class="flex flex-row w-auto md:px-3">
            <div class="flex flex-col">
              <div class="flex text-lg font-semibold text-white mt-2">Kovács Pista</div>
              <div class="flex text-lg font-normal text-white">+36 69 420 6969</div>
              <div class="flex text-lg font-normal text-white">kovacs.pista@simnyi@bme.hu</div>
              <div class="flex text-lg font-normal text-white">SCH 1369</div>
            </div>
          </div>
        </div>
        -->
      
        <div class="felx text-xl font-bold text-sky-200 mt-7">Jelentkezés</div>
        <div class="flex text-md text-white mt-2">
          Tanfolyamot mind a két félévben indítunk. További információkért keresd bátran a mindenkori tanfolyamfelelőst.
        </div>
      
      </div>
  </div>
</template>
