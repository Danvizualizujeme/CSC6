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
    { time: '8:15 - 9:15',  class: 'MMA, BOX, K1',            instructor: 'Wojdyla',          level: 'Všichni' },
    { time: '15:30 - 16:30', class: 'Přípravka MMA',           instructor: 'Mayer, Wojdyla',  level: '4–10 let' },
    { time: '16:30 - 17:30', class: 'BOX začátečníci',         instructor: 'Pawliczek',       level: 'Začátečníci' },
    { time: '17:30 - 18:45', class: 'Grappling + Wrestling',   instructor: '—',               level: 'Všichni' },
    { time: '18:30 - 19:30', class: 'Bezkontaktní MMA',        instructor: 'Pawliczek',       level: '' }
  ],

  ÚT: [
    { time: '15:30 - 16:30', class: 'Junioři MMA',             instructor: 'Mayer, Kuta',     level: '11–13 let' },
    { time: '16:00 - 17:00', class: 'BOX pokročilí',           instructor: 'Górecki',         level: 'Pokročilí' },
    { time: '16:30 - 17:30', class: 'Fitbox',                  instructor: 'Hudeček',         level: '' },
    { time: '17:30 - 18:30', class: 'K1',                      instructor: 'Hudeček',         level: 'Začátečníci' },
    { time: '17:00 - 18:15', class: 'MMA začátečníci',         instructor: 'Bráborec',        level: 'Začátečníci' },
    { time: '18:15 - 19:30', class: 'MMA pokročilí',           instructor: 'Wojdyla',         level: 'Pokročilí' }
  ],

  ST: [
    { time: '8:15 - 9:15',   class: 'MMA, BOX, K1',            instructor: 'Wojdyla',         level: 'Všichni' },
    { time: '15:30 - 16:30', class: 'Přípravka MMA',           instructor: 'Mayer, Wojdyla',  level: '4–10 let' },
    { time: '16:30 - 17:30', class: 'BOX začátečníci',         instructor: 'Pawliczek',       level: 'Začátečníci' },
    { time: '17:30 - 18:45', class: 'Wrestling',               instructor: 'Barva',           level: 'Všichni' },
    { time: '18:30 - 19:30', class: 'Bezkontaktní MMA',        instructor: 'Pawliczek',       level: '' },
    { time: '18:45 - 19:45', class: 'Grappling',               instructor: 'Wojdyla',         level: 'Všichni' }
  ],

  ČT: [
    { time: '15:30 - 16:30', class: 'Junioři MMA',             instructor: 'Mayer, Kuta',     level: '11–13 let' },
    { time: '16:00 - 17:00', class: 'BOX pokročilí',           instructor: 'Górecki',         level: 'Pokročilí' },
    { time: '16:30 - 17:30', class: 'Fitbox',                  instructor: 'Hudeček',         level: '' },
    { time: '17:00 - 18:15', class: 'MMA začátečníci',         instructor: 'Bráborec',        level: 'Začátečníci' },
    { time: '18:15 - 19:30', class: 'MMA pokročilí',           instructor: 'Wojdyla',         level: 'Pokročilí' }
  ],

  PÁ: [
    { time: '8:15 - 9:15',   class: 'MMA, BOX, K1',            instructor: 'Wojdyla',         level: 'Všichni' },
    { time: '15:00 - 16:00', class: 'Přípravka MMA + Junioři MMA', instructor: '—',          level: '4–10 & 11–13 let' },
    { time: '15:30 - 17:00', class: 'Grappling',               instructor: 'Sumelidis',       level: 'Všichni' },
    { time: '17:00 - 18:15', class: 'Thaibox',                 instructor: 'Breit',           level: '' },
    { time: '18:15 - 19:15', class: 'Sparing K1 + BOX',        instructor: '—',               level: '' }
  ],

  SO: [
    { time: '—',             class: 'Žádné pravidelné lekce (volno)', instructor: '—',       level: '' }
  ],

  NE: [
    { time: '16:00 - 17:00', class: 'K1',                      instructor: 'Hudeček',         level: 'Začátečníci' },
    { time: '17:00 - 18:00', class: 'Sparing MMA + grappling', instructor: '—',               level: 'Všichni' },
    { time: '18:00 - 19:00', class: 'Bezkontaktní MMA',        instructor: 'Pawliczek',       level: '' }
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
    <!-- K1 -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 300 }}
    >
      <h4 class="text-3xl font-heading mb-2">K1</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Naučíte se spojovat údery rukou, kopy a kolena do efektivních kombinací.
        Tréninky rozvíjí rychlost, dynamiku i odolnost – ideální pro soutěže i kondici.
      </p>
    </div>

    <!-- Grappling -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 600 }}
    >
      <h4 class="text-3xl font-heading mb-2">Grappling</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Zaměříte se na boj na zemi – páky, znehybnění a škrcení.
        Skvělý základ sebeobrany i příprava pro MMA.
      </p>
    </div>

    <!-- Thaibox -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 900 }}
    >
      <h4 class="text-3xl font-heading mb-2">Thaibox (Muay Thai)</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Tradiční thajské umění, kde využijete údery, kopy, lokty i kolena.
        Rozvíjí tvrdost, přesnost a kondici.
      </p>
    </div>

    <!-- Wrestling -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 300 }}
    >
      <h4 class="text-3xl font-heading mb-2">Wrestling</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Naučíte se takedowny, strhy a kontrolu soupeře na zemi.
        Perfektní doplněk k MMA i samostatná disciplína s důrazem na sílu a výbušnost.
      </p>
    </div>

    <!-- Fitbox -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 600 }}
    >
      <h4 class="text-3xl font-heading mb-2">Fitbox</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Kondiční trénink s boxerskými a kickboxerskými prvky.
        Spálíte kalorie, posílíte celé tělo a odreagujete se od stresu.
      </p>
    </div>

    <!-- Bezkontaktní MMA -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 900 }}
    >
      <h4 class="text-3xl font-heading mb-2">Bezkontaktní MMA</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Technika a pohyb bez tvrdých úderů – ideální pro ty, kdo chtějí zlepšit koordinaci,
        kondici a naučit se principy MMA bez fyzického kontaktu.
      </p>
    </div>

    <!-- Přípravka MMA -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 900 }}
    >
      <h4 class="text-3xl font-heading mb-2">Přípravka MMA(4-10 let)</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Hravou formou se děti učí základní pohybovou průpravu, disciplínu a první techniky bojových sportů. Důraz je na zábavu, bezpečí a rozvoj všestrannosti..
      </p>
    </div>
    <!-- Junioři MMA -->
    <div
      class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
      in:fly={{ y: 20, duration: 1200, delay: 900 }}
    >
      <h4 class="text-3xl font-heading mb-2">Junioři MMA(11-13 let)</h4>
      <p class="text-gray-400 leading-relaxed mb-6">
        Mladí sportovci už trénují konkrétní techniky MMA, rozvíjí kondici i týmového ducha. Tréninky jsou přizpůsobeny věku a podporují zdravý růst i sebedůvěru.
      </p>
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
            <h4 class="text-3xl font-heading mb-4">Děti</h4>
            <p class="text-white text-5xl font-heading mb-4">500 Kč<span class="text-xl">/měsíc</span></p>
            <ul class="text-gray-400 mb-8 space-y-3 font-body">
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Pravidelný dětský trénink
                </li>
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Rozvoj motoriky a disciplíny
                </li>
            </ul>
        </div>

        <div class="group bg-red-600 p-10 rounded-3xl border border-red-600 text-center transform transition-transform duration-700 hover:scale-[1.02] hover:border-white shadow-2xl" in:fly={{ y: 20, duration: 1200, delay: 600 }}>
            <h4 class="text-3xl font-heading mb-4 text-white">Junioři</h4>
            <p class="text-white text-5xl font-heading mb-4">650 Kč<span class="text-xl">/měsíc</span></p>
            <ul class="text-white mb-8 space-y-3 font-body">
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Přístup ke všem lekcím
                </li>
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Vstup do posilovny
                </li>
            </ul>
        </div>

        <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 text-center transform transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 900 }}>
            <h4 class="text-3xl font-heading mb-4">Dospělí</h4>
            <p class="text-white text-5xl font-heading mb-4">850 Kč<span class="text-xl">/měsíc</span></p>
            <ul class="text-gray-400 mb-8 space-y-3 font-body">
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Přístup ke všem lekcím
                </li>
                <li class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    Neomezený vstup do posilovny
                </li>
            </ul>
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
