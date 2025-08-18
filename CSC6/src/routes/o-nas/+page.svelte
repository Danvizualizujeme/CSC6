<script lang="ts">
  import { fly, fade } from 'svelte/transition';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700&display=swap');

  .font-heading {
    font-family: 'Bebas Neue', sans-serif;
  }
  .font-body {
    font-family: 'Poppins', sans-serif;
  }
  .bg-dark {
    background-color: #0c0c0c;
  }
</style>

<main class="bg-dark text-white font-body overflow-hidden">
  <section class="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-7xl">
    <div in:fly={{ y: 20, duration: 1200, delay: 200 }}>
      <p class="text-red-600 font-bold uppercase tracking-widest mb-4">PŘÍBĚH KLUBU</p>
      <h2 class="text-5xl font-heading mb-6 leading-tight">
        NAŠE <span class="text-red-600">HISTORIE</span>
      </h2>
      <p class="text-gray-300 text-lg leading-relaxed mb-6">
        CSC MMA klub vznikl v roce 2012 jako prostor, kde mohou lidé různých úrovní trénovat bojové sporty a rozvíjet se v přátelském prostředí. Z malého projektu se postupně stal klub, který spojuje začátečníky, zkušenější sportovce i ty, kdo chtějí jen zlepšit kondici.
      </p>
      <p class="text-gray-400 text-base leading-relaxed mb-6">
        Naší misí je od začátku nabídnout světovou úroveň tréninku a zároveň budovat podpůrnou komunitu. Věříme, že bojové umění není jen o zápasech, ale především o disciplíně, respektu a neustálém osobním růstu.
      </p>
      <p class="text-gray-400 text-base leading-relaxed">
        Dnes je CSC MMA domovem profesionálních zápasníků, amatérských bojovníků i nadšenců fitness. Společným cílem všech členů je překonávat své limity a dosahovat dokonalosti, v ringu i mimo něj.
      </p>
    </div>
    <div class="relative" in:fly={{ y: 20, duration: 1200, delay: 500 }}>
      <img
        src="/images/about-gym.jpg"
        alt="Interiér tělocvičny"
        class="w-full rounded-3xl shadow-2xl relative transform rotate-3 transition-transform duration-700 hover:rotate-0"
      />
    </div>
  </section>

  <section class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-20">
      <h3 class="text-5xl font-heading">
        NAŠE <span class="text-red-600">FILOZOFIE</span>
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div
        class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
        in:fly={{ y: 20, duration: 1200, delay: 300 }}
      >
        <div class="text-red-600 mb-6 transition-colors duration-500 group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V6h2v8zm4 4h-2v-2h2v2zm0-4h-2V6h2v8z"/></svg>
        </div>
        <h4 class="text-3xl font-heading mb-2">DISCIPLÍNA</h4>
        <p class="text-gray-400 leading-relaxed">Společně se učíme, že disciplína není jen o sportu, ale i o přístupu k sobě a k ostatním.</p>
      </div>
      <div
        class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
        in:fly={{ y: 20, duration: 1200, delay: 600 }}
      >
        <div class="text-red-600 mb-6 transition-colors duration-500 group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </div>
        <h4 class="text-3xl font-heading mb-2">RESPEKT</h4>
        <p class="text-gray-400 leading-relaxed">V klubu budujeme prostředí založené na vzájemném respektu a podpoře. Úcta k sobě i k ostatním je pro nás samozřejmostí.</p>
      </div>
      <div
        class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
        in:fly={{ y: 20, duration: 1200, delay: 900 }}
      >
        <div class="text-red-600 mb-6 transition-colors duration-500 group-hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
        </div>
        <h4 class="text-3xl font-heading mb-2">EXCELENCE</h4>
        <p class="text-gray-400 leading-relaxed">Společně se učíme dávat do tréninku maximum a hledat cestu, jak být každý den o něco lepší.</p>
      </div>
    </div>
  </section>

  <section class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-20">
      <h3 class="text-5xl font-heading">
        NAŠE <span class="text-red-600">PROSTORY</span>
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="relative overflow-hidden rounded-3xl group shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]" in:fly={{ y: 20, duration: 1200, delay: 200 }}>
        <img
          src="/images/octagon.jpg"
          alt="Profesionální oktagon"
          class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-black/70 flex flex-col justify-end p-8 text-white transition-opacity duration-500 group-hover:opacity-100 opacity-0">
          <h4 class="text-3xl font-heading mb-1">TRÉNINKOVÝ PROSTOR</h4>
          <p class="text-gray-300 text-sm">Naše tělocvična nabízí vše potřebné pro kvalitní trénink – od nácviku technik až po kondiční přípravu.</p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-3xl group shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]" in:fly={{ y: 20, duration: 1200, delay: 400 }}>
        <img
          src="/images/strength.jpg"
          alt="Síla a kondice"
          class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-black/70 flex flex-col justify-end p-8 text-white transition-opacity duration-500 group-hover:opacity-100 opacity-0">
          <h4 class="text-3xl font-heading mb-1">SÍLA & KONDICE</h4>
          <p class="text-gray-300 text-sm">K dispozici máme posilovnu se základním vybavením pro rozvoj síly a také stroje pro zlepšení kondice a vytrvalosti. Díky tomu si u nás každý najde cestu, jak se postupně zlepšovat v bojových sportech i celkové fyzičce.</p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-3xl group shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]" in:fly={{ y: 20, duration: 1200, delay: 600 }}>
        <img
          src="/images/boxing-ring.jpg"
          alt="Boxovací ring"
          class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-black/70 flex flex-col justify-end p-8 text-white transition-opacity duration-500 group-hover:opacity-100 opacity-0">
          <h4 class="text-3xl font-heading mb-1">VÍCE PROSTORU PRO TRÉNINK</h4>
          <p class="text-gray-300 text-sm">Nabízíme i druhou místnost, která umožňuje trénovat naplno a zpestřit přípravu.</p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-3xl group shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]" in:fly={{ y: 20, duration: 1200, delay: 800 }}>
        <img
          src="/images/grappling-area.jpg"
          alt="Prostor pro zápasení"
          class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-black/70 flex flex-col justify-end p-8 text-white transition-opacity duration-500 group-hover:opacity-100 opacity-0">
          <h4 class="text-3xl font-heading mb-1">ZÁPASENÍ & GRAPPLING</h4>
          <p class="text-gray-300 text-sm">Prostorné žíněnky pro Brazílsko-jiu-jitsu, wrestling i grappling.</p>
        </div>
      </div>
    </div>
  </section>
</main>
