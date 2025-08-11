<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  let days = ['PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO', 'NE'];
  let active = 0;

  const scheduleByDay: Record<
    string,
    {
      time: string;
      class: string;
      instructor: string;
      level: string;
    }[]
  > = {
    PO: [
      { time: '06:00 - 07:30', class: 'Síla & Kondice', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '09:00 - 10:00', class: 'Box pro začátečníky', instructor: 'Sarah Martinez', level: 'Začátečník' },
      { time: '12:00 - 13:00', class: 'Jóga pro boj', instructor: 'Anna Lee', level: 'Všechny úrovně' },
      { time: '15:00 - 16:30', class: 'MMA sparring', instructor: 'James Wilson', level: 'Pokročilý' },
      { time: '18:00 - 19:30', class: 'Základy MMA', instructor: 'Alex Rodriguez', level: 'Začátečník' }
    ],
    ÚT: [
      { time: '07:00 - 08:30', class: 'Kardio kickboxing', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '10:00 - 11:00', class: 'Brazilsko Jiu-Jitsu', instructor: 'Carlos Silva', level: 'Středně pokročilý' },
      { time: '13:00 - 14:00', class: 'CrossFit', instructor: 'Emily Clark', level: 'Všechny úrovně' },
      { time: '17:00 - 18:30', class: 'Pokročilý box', instructor: 'John Doe', level: 'Pokročilý' },
      { time: '19:00 - 20:30', class: 'Open Mat', instructor: 'Vlastní režie', level: 'Všechny úrovně' }
    ],
    ST: [
      { time: '08:00 - 09:30', class: 'MMA Fundamentals', instructor: 'Alex Rodriguez', level: 'Začátečník' },
      { time: '11:00 - 12:00', class: 'Stretch & Recovery', instructor: 'Anna Lee', level: 'Všechny úrovně' },
      { time: '14:00 - 15:30', class: 'Dětské MMA (8–12 let)', instructor: 'Lisa Johnson', level: 'Mládež' },
      { time: '17:00 - 18:30', class: 'Muay Thai', instructor: 'Sarah Martinez', level: 'Středně pokročilý' },
      { time: '20:00 - 21:30', class: 'Advanced MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ],
    ČT: [
      { time: '06:30 - 07:30', class: 'Powerlifting', instructor: 'Rick Thompson', level: 'Všechny úrovně' },
      { time: '09:00 - 10:30', class: 'Kettlebell Training', instructor: 'Emily Clark', level: 'Všechny úrovně' },
      { time: '12:00 - 13:00', class: 'Yoga Flow', instructor: 'Anna Lee', level: 'Všechny úrovně' },
      { time: '16:00 - 17:30', class: 'MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' },
      { time: '18:00 - 19:30', class: 'Jiu-Jitsu Drills', instructor: 'Carlos Silva', level: 'Středně pokročilý' }
    ],
    PÁ: [
      { time: '07:00 - 08:00', class: 'Cardio Kickboxing', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '10:00 - 11:30', class: 'Open Mat Grappling', instructor: 'Carlos Silva', level: 'Všechny úrovně' },
      { time: '13:00 - 14:30', class: 'Strength & Conditioning', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '17:00 - 18:30', class: 'Boxing Fundamentals', instructor: 'Sarah Martinez', level: 'Začátečník' },
      { time: '19:00 - 20:30', class: 'Advanced MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ],
    SO: [
      { time: '09:00 - 10:30', class: 'Dětské MMA (8–12 let)', instructor: 'Lisa Johnson', level: 'Mládež' },
      { time: '11:00 - 12:30', class: 'Muay Thai', instructor: 'Sarah Martinez', level: 'Středně pokročilý' },
      { time: '14:00 - 15:30', class: 'Open Mat', instructor: 'Vlastní režie', level: 'Všechny úrovně' },
      { time: '16:00 - 17:00', class: 'Pilates for Fighters', instructor: 'Anna Lee', level: 'Všechny úrovně' },
      { time: '18:00 - 19:30', class: 'MMA Technique', instructor: 'Alex Rodriguez', level: 'Středně pokročilý' }
    ],
    NE: [
      { time: '10:00 - 11:30', class: 'Volné cvičení', instructor: 'Vlastní režie', level: 'Všechny úrovně' },
      { time: '12:00 - 13:30', class: 'Stretch & Mobility', instructor: 'Anna Lee', level: 'Všechny úrovně' },
      { time: '15:00 - 16:30', class: 'Open Mat Grappling', instructor: 'Carlos Silva', level: 'Všechny úrovně' },
      { time: '17:00 - 18:30', class: 'MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ]
  };

  function selectDay(index: number) {
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
          {#each scheduleByDay[days[active]] as item}
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
          Komplexní trénink MMA pro všechny úrovně, kombinuje údery, zápasení a obranu na zemi.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 600 }}>
        <h4 class="text-3xl font-heading mb-2">BOX</h4>
        <p class="text-gray-400 leading-relaxed mb-6">
          Naučte se základní a pokročilé boxerské techniky v profesionálním ringu.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
      <div class="group bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10" in:fly={{ y: 20, duration: 1200, delay: 900 }}>
        <h4 class="text-3xl font-heading mb-2">BJJ</h4>
        <p class="text-gray-400 leading-relaxed mb-6">
          Brazilsko Jiu-Jitsu: důraz na páky, škrcení a poziční kontrolu.
        </p>
        <a href="#join" class="text-red-600 font-bold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-white">Všechny úrovně</a>
      </div>
    </div>
  </section>

  <section id="plans" class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-16">
      <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Ceny a služby</p>
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

  <section class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-16">
      <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Časté otázky</p>
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