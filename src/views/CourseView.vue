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
          Az AC tanfolyam alatt betekintést nyerhetsz a rendezvénytechnika szerteágazó világába. 
          Többek között a következő témákról tanulhatsz: hangtechnika, elektroakusztika, equalizerek, 
          dinamikaszabályzók, effektek, keverőpultok, rendszertechnika, stúdiós felvételkészítés, 
          fénytechnika és vizuális effektek.
          <br>
          <br>
          Az újoncbevonónkra szeretettel várunk minden érdeklődőt a kör iránt. 
          Ezen a rendezvényen van lehetőség az AC különböző rendezvénytechnikai eszközeinek kipróbálására, illetve a körrel és körtagokkal való ismerkedésre. 
          Az őszi újoncbevonó időpontja, helyszíne: <br>
          09.17. 20:00, FNT - Újoncbevonó
          <br>
          <br>
          A 2025-ös, őszi tanfolyamalkalmak időpontjai, helyszínei: <br>
          09.23. 18:00, 102 - Elektroakusztika, fizikai alapok <br>
          09.30. 18:00, 102 - Rendszertechnika <br>
          10.14. 18:00, FNT - Fénytechnika, vizuál <br>
          10.21. 18:00, 102 - Keverőpultok <br>
          10.28. 18:00, 102 - Stúdiótechnika
          <br>
          <br>
          A tanfolyamalkalmak után, illetve minden kedden 20:15-től várunk szeretettel a kör gyűlésén, 
          általában a 1319-ben. Itt lehet jelentkezi az AC-t felkérő rendezvényekre, 
          így kipróbálni, hasznosítani a tanfolyamon tanultakat.
        </div>
        
      
        <div class="felx text-xl font-bold text-sky-200 mt-7">Jelentkezés</div>
        <div class="flex text-md text-white mt-2">
          Tanfolyamot mind a két félévben indítunk.
          A tanfolyamra az alábbi linken lehet jelentkezni:
        </div>
        
        <a class="flex text-md text-sky-200" href="https://tanfolyam.simonyi.bme.hu/form/ac">https://tanfolyam.simonyi.bme.hu/form/ac</a>

        <!-- Emberke -->
        <Felelos 
          nev="Killin Beáta" 
          poszt="Tanfolyam Felelős"
          email="killin.beata@simonyi.bme.hu"
          pek="https://pek.sch.bme.hu/profiles/killinbea"
          kep="pamacs_fb.png"
          szoveg=""
        />
      
      </div>
  </div>
</template>
