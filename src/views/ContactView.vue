  <script setup>
import Header from '../components/Header.vue'
import Felelos from '@/components/Felelos.vue'

document.title = "AC - Kapcsolat"

</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0"/>
    <div class="flex flex-col w-full h-auto px-8 py-4 overflow-x-hidden">
    
      <div class="felx text-xl font-bold text-sky-200">Kapcsolat</div>
      <div class="flex text-md text-white mt-2">
        1117 Budapest, BME Schönherz Kollégium, Irinyi József utca 42. I. emelet 106 Stúdió
      </div>
      
      <div class="felx text-xl font-bold text-sky-200 mt-7">Felelősök</div>

        <Felelos 
          nev="Szántó Barnabás" 
          poszt="Körvezető"
          email="szanto.barnabas@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/bszanto"
          kep="barni_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Kiss Ábel" 
          poszt="Körvezető Helyettes"
          email="kiss.abel@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/kissa"
          kep="abel_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Zombori Péter" 
          poszt="Gazdasági Felelős"
          email="zombori.peter@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/zomborip"
          kep="peti_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Dombora Melinda" 
          poszt="Tanfolyam Felelős"
          email="dombora.melinda@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/melinda.dombora"
          kep="melcsi_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Simai Soma" 
          poszt="Karbantartás Felelős"
          email="simai.soma@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/somasimai"
          kep="soma_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Váradi Szabolcs Károly" 
          poszt="HR Vezető"
          email="varadi.szabolcs.karoly@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/szabchi"
          kep="szabi_xmas.png"
          szoveg=""
        />

        <Felelos 
          nev="Siklósi Árpád Gellért" 
          poszt="Stúdió Vezető"
          email="siklosi.arpad.gellert@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/sikagelo"
          kep="siki.png"
          szoveg=""
        />


        

        

    </div>
  </div>
</template>
