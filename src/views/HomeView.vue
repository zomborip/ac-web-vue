<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue'

document.title = "AC Studio & Live"

</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0" />
    
    <div class="flex flex-col md:flex-row w-full">
      <!-- Bal -->
      <div class="felx w-full md:w-4/5 p-1">
        <div class="flex flex-col w-full h-auto px-7 py-3">

          <div class="felx text-xl font-bold text-sky-200">Kik vagyunk?</div>
          <div class="flex text-md text-white mt-2">
            Az AC Studio & Live a Simonyi Károly Szakkollégium 
            rendezvényhangosítással, fénytechinkával, technikai lebonyolítással és 
            stúdiós hangfelvétellel foglalkozó köre. Otthonunk a Schönherz Kollégium.
          </div>

          <div class="felx text-xl font-bold text-sky-200 mt-7">Mivel foglalkozunk?</div>
          <div class="flex text-md text-white mt-2">
            Fő szakterületünk az élő rendezvények hangosítása és stúdiófelvételek készítése. 
            Emellett gyakran van szerencsénk hangtechnikai méréseket végezni, 
            erősárami igényeket kielégíteni, eszközparkot karbantartani és fénytechnikát kezelni is. 
            Tagjaink megismerkedhetnek a koncertek és rendezvények technikai lebonyolításával a színpad felépítésétől kezdve 
            egészen a koncert lekeveréséig. Megtanulhatják, hogyan készülnek felvételek akár élő, akár stúdió körülmények között. 
            Dolgozhatnak digitális pulttal, számítógép alapú rögzítéssel és 
            professzionális lehallgató hangfalakkal körünk saját stúdiójában. 
            Nem utolsósorban pedig részt vehetnek a számtalan, 
            körtagok által rendezett eseményeken, 
            ahol a jó hangulat és a sör állandó vendégek.
          </div>
        </div>
      </div>

      <!-- Jobb -->
      <div class="flex w-auto md:w-1/5 p-2">
        <div class="flex flex-col w-full md:w-full h-auto px-5 md:px-0">
          <div class="felx text-xl font-bold text-sky-200 pb-3">Gyors Elérés:</div>
          
          <a href="https://drive.google.com/file/d/18hA571eyv0sKjieV01y7hBGNPcUMyFVQ/view?usp=sharing" target="_blank">
            <div class="felx text-lg font-extrabold italic text-rose-500 mt-2 cursor-pointer">- FELKÉRÉS</div>
          </a>
          <a href="https://docs.google.com/document/d/1WK4HlPOEuVR00n1UEtsYvSjNdBAD8YwBFSiVpsYYvdw/edit?usp=sharing" target="_blank">
            <div class="felx text-lg font-semibold italic text-sky-100 mt-2 cursor-pointer">- Aktuális LOG</div>
          </a>
          <a href="https://simonyi.bme.hu/hu/berles" target="_blank">
            <div class="felx text-lg font-semibold italic text-sky-100 mt-2 cursor-pointer">- Simonyi Bérlés</div>
          </a>
          <a href="https://bejelentes.sch.bme.hu" target="_blank">
            <div class="felx text-lg font-semibold italic text-sky-100 mt-2 cursor-pointer">- Bejelentés.sch</div>
          </a>
          <a href="https://pek.sch.bme.hu/groups/57" target="_blank">
            <div class="felx text-lg font-semibold italic text-sky-100 mt-2 cursor-pointer">- Kör PéK Profilja</div>
          </a>
        </div>
      </div>

    </div>



  </div>
</template>
