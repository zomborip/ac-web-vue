<script setup>
import Header from '../components/Header.vue'

document.title = "AC - Dokumentumok"
</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0" />
    <div class="flex flex-col w-full h-auto px-8 py-4">
    
      <div class="felx text-xl font-bold text-sky-200">Dokumentumok</div>
      <ul class="list-disc ml-8 mt-4 text-md text-white">
        <li class="mb-4"> <b>AC Studio & Live</b><br>                                               Felkérési Szabályzat                        <br><i>(<a href="https://drive.google.com/file/d/15ezK2_-spmrF3Izcj_Cs0O1TQX08bAOT/view?usp=sharing" class="underline text-blue-300" target="_blank">AC FELKÉRÉSI</a>)</i> </li>
        <li class="mb-4"> <b>AC Studio & Live</b><br>                                               Felelősségvállalási Nyilatkozat             <br><i>(<a href="https://docs.google.com/document/d/1YKUHtNDPJJooie9mBwBQbj96N3abvVuH/edit?usp=sharing&ouid=100446710268179705440&rtpof=true&sd=true" target="_blank" class="underline text-blue-300" >AC FELELŐSSÉGVÁLLALÁSI</a>)</i> </li>
        <li class="mb-4"> <b>Schönherz</b><br>                                                      Szálltólevél Ki                             <br><i>(<a href="https://kb.sch.bme.hu/dokumentumtar/" class="underline text-blue-300" target="_blank" >KIVITELI</a>)</i> </li>
      </ul>
      
    </div>
  </div>
</template>

