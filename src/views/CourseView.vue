<script setup>
import Header from '../components/Header.vue'
import Felelos from '@/components/Felelos.vue'

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
        
      
        <div class="felx text-xl font-bold text-sky-200 mt-7">Jelentkezés</div>
        <div class="flex text-md text-white mt-2">
          Tanfolyamot mind a két félévben indítunk. További információkért keresd bátran a mindenkori tanfolyam felelőst.
        </div>

        <!-- Emberke -->
        <Felelos 
          nev="Dombora Melinda" 
          poszt="Tanfolyam Felelős"
          email="dombora.melinda@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/melinda.dombora"
          kep="melcsi_xmas.png"
          szoveg=""
        />
      
      </div>
  </div>
</template>
