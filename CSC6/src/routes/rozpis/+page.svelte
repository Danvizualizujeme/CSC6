<script>
  // @ts-check
  import { fly, fade } from 'svelte/transition';

  /** @typedef {'PO'|'ÚT'|'ST'|'ČT'|'PÁ'|'SO'|'NE'} Day */
  /** @typedef {{ time: string; class: string; instructor: string; level: string }} ScheduleItem */

  /** @type {Day[]} */
  let days = ['PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO', 'NE'];

  let active = 0;

  /** @type {Day} */
  let currentDay = /** @type {Day} */ (days[active]);
  $: currentDay = /** @type {Day} */ (days[active]);

  /** @type {Record<Day, ScheduleItem[]>} */
  const scheduleByDay = {
    PO: [
      { time: '8:15 - 9:15',  class: 'MMA, BOX, K1',        instructor: 'Wojdyla',            level: 'Všichni' },
      { time: '15:30 - 16:30', class: 'Přípravka MMA',       instructor: 'Mayer, Wojdyla',     level: '—' },
      { time: '16:30 - 17:30', class: 'BOX začátečníci',     instructor: 'Pawliczek',          level: 'Začátečníci' },
      { time: '17:30 - 18:30', class: 'Grappling',           instructor: 'Hudeček',            level: '—' },
      { time: '18:30 - 19:30', class: 'Bezkontaktní MMA',    instructor: 'Pawliczek',          level: '—' }
    ],
    ÚT: [
      { time: '15:30 - 16:30', class: 'Junioři MMA',         instructor: 'Gorecki',            level: '—' },
      { time: '16:00 - 17:00', class: 'BOX pokročilí',       instructor: 'Hudeček',            level: 'Pokročilí' },
      { time: '17:00 - 18:15', class: 'MMA začátečníci',     instructor: 'Hudeček',            level: 'Začátečníci' },
      { time: '18:15 - 19:45', class: 'Grappling',           instructor: 'Wojdyla',            level: '—' },
      { time: '18:30 - 20:00', class: 'MMA pokročilí',       instructor: 'Wojdyla',            level: 'Pokročilí' }
    ],
    ST: [
      { time: '8:15 - 9:15',   class: 'MMA, BOX, K1',        instructor: 'Wojdyla',            level: 'Všichni' },
      { time: '15:30 - 16:30', class: 'Přípravka MMA',       instructor: 'Mayer, Wojdyla',     level: '—' },
      { time: '16:30 - 17:30', class: 'BOX začátečníci',     instructor: 'Pawliczek',          level: 'Začátečníci' },
      { time: '17:30 - 18:45', class: 'MMA – zem',           instructor: '—',                  level: '—' },
      { time: '18:45 - 20:00', class: 'Wrestling',           instructor: 'Marek Barva',        level: '—' }
    ],
    ČT: [
      { time: '15:30 - 16:30', class: 'Junioři MMA',         instructor: 'Gorecki',            level: '—' },
      { time: '16:00 - 17:00', class: 'BOX pokročilí',       instructor: 'Hudeček',            level: 'Pokročilí' },
      { time: '17:00 - 18:15', class: 'MMA začátečníci',     instructor: 'Hudeček',            level: 'Začátečníci' },
      { time: '18:15 - 19:45', class: 'Grappling',           instructor: 'Wojdyla',            level: '—' },
      { time: '18:30 - 20:00', class: 'MMA pokročilí',       instructor: 'Wojdyla',            level: 'Pokročilí' }
    ],
    PÁ: [
      { time: '8:15 - 9:15',   class: 'MMA, BOX, K1',        instructor: 'Wojdyla',            level: 'Všichni' },
      { time: '16:00 - 17:00', class: 'Junioři MMA',         instructor: 'Pawliczek',          level: '—' },
      { time: '17:00 - 18:15', class: 'Thaibox',             instructor: 'Thabior',            level: '—' },
      { time: '18:15 - 19:15', class: 'Sparing (K1 + BOX)',  instructor: '—',                  level: '—' },
      { time: '18:30 - 19:30', class: 'Bezkontaktní MMA',    instructor: 'Pawliczek',          level: '—' }
    ],
    SO: [
      { time: '—',             class: 'Žádné pravidelné lekce (volno)', instructor: '—',       level: '—' }
    ],
    NE: [
      { time: '16:00 - 17:00', class: 'Open mat / BJJ',      instructor: 'Hudeček',            level: '—' },
      { time: '17:00 - 18:00', class: 'Sparing',             instructor: '—',                  level: '—' },
      { time: '18:00 - 19:00', class: 'Bezkontaktní MMA',    instructor: 'Pawliczek',          level: '—' }
    ]
  };

  /** @param {number} index */
  function selectDay(index) {
    active = index;
  }
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
  <div class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-16">
      <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Rozvrh tréninků</p>
      <h2 class="text-5xl font-heading leading-tight">
        DENNÍ <span class="text-red-600">ROZPIS</span>
      </h2>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-10 border-b-2 border-gray-800">
      {#each days as day, i}
        <button
          on:click={() => selectDay(i)}
          class="px-6 py-4 uppercase text-sm tracking-wide font-bold transition-all duration-300 transform hover:scale-110"
          class:text-red-600={i === active}
          class:border-red-600={i === active}
          class:text-gray-400={i !== active}
        >
          {day}
        </button>
      {/each}
    </div>

    <div
      class="overflow-x-auto bg-[#1a1a1a] rounded-3xl border border-gray-800 shadow-2xl"
      in:fade={{ duration: 1000 }}
    >
      <table class="min-w-full text-left">
        <thead class="bg-[#1e1e1e]">
          <tr class="text-gray-400 uppercase text-sm font-bold tracking-wider">
            <th class="px-8 py-5 border-b border-gray-700">Čas</th>
            <th class="px-8 py-5 border-b border-gray-700">Lekce</th>
            <th class="px-8 py-5 border-b border-gray-700">Trenér</th>
            <th class="px-8 py-5 border-b border-gray-700">Úroveň</th>
          </tr>
        </thead>
        <tbody>
          {#each scheduleByDay[currentDay] as item}
            <tr class="border-t border-gray-800 transition-colors duration-300 hover:bg-[#252525]">
              <td class="px-8 py-4 text-red-600 font-bold">{item.time}</td>
              <td class="px-8 py-4 text-white font-semibold">{item.class}</td>
              <td class="px-8 py-4 text-gray-300">{item.instructor}</td>
              <td class="px-8 py-4 text-gray-400">{item.level}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- PROZKOUMEJ – KURZY -->
  <section class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-16">
      <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Prozkoumej</p>
      <h3 class="text-5xl font-heading">
        NAŠE <span class="text-red-600">KURZY</span>
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 300 }}>
        <h4 class="text-3xl font-heading mb-2">MMA</h4>
        <p class="text-gray-400 leading-relaxed mb-6">
          Nabízíme tréninky MMA vhodné pro všechny úrovně – od začátečníků až po pokročilé. Kombinujeme úderové techniky, zápasení i boj na zemi, abyste získali všestranný základ.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 600 }}>
        <h4 class="text-3xl font-heading mb-2">BOX</h4>
        <p class="text-gray-400 leading-relaxed mb-6">
          Naučíte se základní i pokročilejší boxerské techniky – od správného postoje a práce nohou až po kombinace úderů, které využijete v tréninku i sparingu.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 900 }}>
        <h4 class="text-3xl font-heading mb-2">BJJ</h4>
        <p class="text-gray-400 leading-relaxed mb-6">
          Brazilské jiu-jitsu se zaměřuje na boj na zemi – učení pák, škrcení atd. Tréninky jsou vhodné jak pro začátečníky, tak pro pokročilejší, kteří chtějí rozvíjet techniku i strategii.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
    </div>
  </section>

  <!-- CENY A SLUŽBY -->
  <section id="plans" class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-16">
      <h3 class="text-5xl font-heading">
        ČLENSKÉ <span class="text-red-600">PLÁNY</span>
      </h3>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 text-center transform transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 300 }}>
        <h4 class="text-3xl font-heading mb-4">Základní</h4>
        <p class="text-white text-5xl font-heading mb-4">99€<span class="text-xl">/měsíc</span></p>
        <ul class="text-gray-400 mb-8 space-y-3 font-body">
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Přístup ke všem základním lekcím
          </li>
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Vstup do posilovny ve všední dny
          </li>
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            1 speciální lekce týdně
          </li>
        </ul>
        <a href="#join" class="bg-red-600 hover:bg-red-700 transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full shadow-lg">
          Vybrat
        </a>
      </div>
      <div class="group bg-red-600 p-10 rounded-3xl border border-red-600 text-center transform transition-transform duration-700 hover:scale-[1.02] hover:border-white shadow-2xl" in:fly={{ y: 20, duration: 1200, delay: 600 }}>
        <h4 class="text-3xl font-heading mb-4 text-white">Premium</h4>
        <p class="text-white text-5xl font-heading mb-4">149€<span class="text-xl">/měsíc</span></p>
        <ul class="text-white mb-8 space-y-3 font-body">
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Neomezený vstup do posilovny
          </li>
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            Všechny speciální lekce
          </li>
        </ul>
        <a href="#join" class="bg-white text-red-600 hover:bg-black/20 hover:text-white transition-colors duration-500 px-10 py-4 uppercase font-bold text-sm tracking-wide rounded-full shadow-lg">
          Vybrat
        </a>
      </div>
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 text-center transform transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 900 }}>
        <h4 class="text-3xl font-heading mb-4">Elite</h4>
        <p class="text-white text-5xl font-heading mb-4">249€<span class="text-xl">/měsíc</span></p>
        <ul class="text-gray-400 mb-8 space-y-3 font-body">
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            24/7 vstup do posilovny
          </li>
          <li class="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            4 osobní tréninky měsíčně
          </li>
        </ul>
        <a href="#join" class="bg-red-600 hover:bg-red-700 transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full shadow-lg">
          Vybrat
        </a>
      </div>
    </div>
  </section>

  <!-- ČASTÉ OTÁZKY -->
  <section class="container mx-auto px-6 py-24 max-w-7zxl">
    <div class="text-center mb-16">
      <h3 class="text-5xl font-heading">
        ČASTO KLADENÉ <span class="text-red-600">DOTAZY</span>
      </h3>
    </div>
    <div class="space-y-6">
      <div class="group bg-[#1a1a1a] rounded-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.01] hover:border-red-600 hover:shadow-xl">
        <button class="w-full flex justify-between items-center text-white font-semibold text-lg px-8 py-6">
          Potřebuji předchozí zkušenosti?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
      <div class="group bg-[#1a1a1a] rounded-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.01] hover:border-red-600 hover:shadow-xl">
        <button class="w-full flex justify-between items-center text-white font-semibold text-lg px-8 py-6">
          Co si mám přinést na první lekci?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</main>
