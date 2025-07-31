<script lang="ts">
  let days = ['PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO', 'NE'];
  let active = 0;

  const scheduleByDay: Record<string, {
    time: string;
    class: string;
    instructor: string;
    level: string;
    
  }[]> = {
    PO: [
      { time: '06:00 - 07:30', class: 'Síla & Kondice', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '09:00 - 10:00', class: 'Box pro začátečníky', instructor: 'Sarah Martinez', level: 'Začátečník' },
      { time: '12:00 - 13:00', class: 'Jóga pro boj', instructor: 'Anna Lee', level: 'All Levels' },
      { time: '15:00 - 16:30', class: 'MMA sparring', instructor: 'James Wilson', level: 'Pokročilý' },
      { time: '18:00 - 19:30', class: 'Základy MMA', instructor: 'Alex Rodriguez', level: 'Začátečník' }
    ],
    ÚT: [
      { time: '07:00 - 08:30', class: 'Kardio kickboxing', instructor: 'Mike Thomas', level: 'Všechny úrovně' },
      { time: '10:00 - 11:00', class: 'Brazilsko Jiu-Jitsu', instructor: 'Carlos Silva', level: 'Středně pokročilý' },
      { time: '13:00 - 14:00', class: 'CrossFit', instructor: 'Emily Clark', level: 'All Levels' },
      { time: '17:00 - 18:30', class: 'Pokročilý box', instructor: 'John Doe', level: 'Pokročilý' },
      { time: '19:00 - 20:30', class: 'Open Mat', instructor: 'Self-Directed', level: 'Všechny úrovně' }
    ],
    ST: [
      { time: '08:00 - 09:30', class: 'MMA Fundamentals', instructor: 'Alex Rodriguez', level: 'Začátečník' },
      { time: '11:00 - 12:00', class: 'Stretch & Recovery', instructor: 'Anna Lee', level: 'All Levels' },
      { time: '14:00 - 15:30', class: 'Dětské MMA (8–12 let)', instructor: 'Lisa Johnson', level: 'Mládež' },
      { time: '17:00 - 18:30', class: 'Muay Thai', instructor: 'Sarah Martinez', level: 'Středně pokročilý' },
      { time: '20:00 - 21:30', class: 'Advanced MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ],
    ČT: [
      { time: '06:30 - 07:30', class: 'Powerlifting', instructor: 'Rick Thompson', level: 'All Levels' },
      { time: '09:00 - 10:30', class: 'Kettlebell Training', instructor: 'Emily Clark', level: 'All Levels' },
      { time: '12:00 - 13:00', class: 'Yoga Flow', instructor: 'Anna Lee', level: 'All Levels' },
      { time: '16:00 - 17:30', class: 'MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' },
      { time: '18:00 - 19:30', class: 'Jiu-Jitsu Drills', instructor: 'Carlos Silva', level: 'Intermediate' }
    ],
    PÁ: [
      { time: '07:00 - 08:00', class: 'Cardio Kickboxing', instructor: 'Mike Thomas', level: 'All Levels' },
      { time: '10:00 - 11:30', class: 'Open Mat Grappling', instructor: 'Carlos Silva', level: 'All Levels' },
      { time: '13:00 - 14:30', class: 'Strength & Conditioning', instructor: 'Mike Thomas', level: 'All Levels' },
      { time: '17:00 - 18:30', class: 'Boxing Fundamentals', instructor: 'Sarah Martinez', level: 'Začátečník' },
      { time: '19:00 - 20:30', class: 'Advanced MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ],
    SO: [
      { time: '09:00 - 10:30', class: 'Dětské MMA (8–12 let)', instructor: 'Lisa Johnson', level: 'Mládež' },
      { time: '11:00 - 12:30', class: 'Muay Thai', instructor: 'Sarah Martinez', level: 'Středně pokročilý' },
      { time: '14:00 - 15:30', class: 'Open Mat', instructor: 'Self-Directed', level: 'All Levels' },
      { time: '16:00 - 17:00', class: 'Pilates for Fighters', instructor: 'Anna Lee', level: 'All Levels' },
      { time: '18:00 - 19:30', class: 'MMA Technique', instructor: 'Alex Rodriguez', level: 'Intermediate' }
    ],
    NE: [
      { time: '10:00 - 11:30', class: 'Volné cvičení', instructor: 'Vlastní režie', level: 'All Levels' },
      { time: '12:00 - 13:30', class: 'Stretch & Mobility', instructor: 'Anna Lee', level: 'All Levels' },
      { time: '15:00 - 16:30', class: 'Open Mat Grappling', instructor: 'Carlos Silva', level: 'All Levels' },
      { time: '17:00 - 18:30', class: 'MMA Sparring', instructor: 'James Wilson', level: 'Pokročilý' }
    ]
  };

  function selectDay(index: number) {
    active = index;
  }
</script>

<main class="bg-black text-white space-y-16">

  <!-- KARTY DNŮ -->
  <section class="container mx-auto px-6 pt-8 max-w-6xl">
    <div class="flex space-x-2 justify-center mb-6">
      {#each days as day, i}
        <button
          on:click={() => selectDay(i)}
          class="px-4 py-2 uppercase text-sm tracking-wide border-b-2 transition"
          class:border-red-600={i === active}
          class:text-red-600={i === active}
          class:text-gray-400={i !== active}

        >{day}</button>
      {/each}
    </div>

    <!-- TABULKA ROZPISU -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="text-gray-400 uppercase text-sm">
            <th class="px-4 py-2">Čas</th>
            <th class="px-4 py-2">Lekce</th>
            <th class="px-4 py-2">Trenér</th>
            <th class="px-4 py-2">Úroveň</th>
            
          </tr>
        </thead>
        <tbody>
          {#each scheduleByDay[days[active]] as item}
            <tr class="border-t border-gray-700 hover:bg-gray-800">
              <td class="px-4 py-3 text-red-600 font-medium">{item.time}</td>
              <td class="px-4 py-3">{item.class}</td>
              <td class="px-4 py-3">{item.instructor}</td>
              <td class="px-4 py-3">{item.level}</td>
              
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <!-- NAŠE KURZY -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">
      NAŠE <span class="text-red-600">KURZY</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">MMA</h4>
        <p class="text-gray-300 text-sm mb-4">
          Komplexní trénink MMA pro všechny úrovně, kombinuje údery, zápasení a obranu na zemi.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">Všechny úrovně</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">BOX</h4>
        <p class="text-gray-300 text-sm mb-4">
          Naučte se základní a pokročilé boxerské techniky v profesionálním ringu.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">Všechny úrovně</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">BJJ</h4>
        <p class="text-gray-300 text-sm mb-4">
          Brazilsko Jiu-Jitsu: důraz na páky, škrcení a poziční kontrolu.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">Všechny úrovně</button>
      </div>
    </div>
  </section>

  <!-- NADCHÁZEJÍCÍ UDÁLOSTI -->
  <section class="bg-black py-16">
    <h3 class="text-3xl font-bold text-center mb-12">
      NADCHÁZEJÍCÍ <span class="text-red-600">UDÁLOSTI</span>
    </h3>
    <div class="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="group relative rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
        <img src="/images/events/event1.jpg" alt="Seminář BJJ" class="w-full h-48 object-cover" />
        <div class="absolute bottom-0 left-0 bg-black/70 p-4 w-full">
          <p class="text-red-600 text-sm uppercase">28. čvc • 10:00 – 14:00</p>
          <h4 class="text-white font-semibold">Seminář BJJ s mistrem světa</h4>
        </div>
      </div>
      <div class="group relative rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-lg">
        <img src="/images/events/event2.jpg" alt="Klubová soutěž" class="w-full h-48 object-cover" />
        <div class="absolute bottom-0 left-0 bg-black/70 p-4 w-full">
          <p class="text-red-600 text-sm uppercase">15. srp • 18:00 – 22:00</p>
          <h4 class="text-white font-semibold">Klubová soutěž CSC MMA</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- ČLENSKÉ PLÁNY -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">
      ČLENSKÉ <span class="text-red-600">PLÁNY</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Základní</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">99€<span class="text-sm">/měsíc</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>Přístup ke všem základním lekcím</li>
          <li>Vstup do posilovny ve všední dny</li>
          <li>1 speciální lekce týdně</li>
        </ul>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Vybrat</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Premium</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">149€<span class="text-sm">/měsíc</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>Neomezený vstup do posilovny</li>
          <li>Všechny speciální lekce</li>
</ul>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Vybrat</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Elite</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">249€<span class="text-sm">/měsíc</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>24/7 vstup do posilovny</li>
          <li>4 osobní tréninky měsíčně</li>
        </ul>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Vybrat</button>
      </div>
    </div>
  </section>

  <!-- ČASTO KLADENÉ DOTAZY -->
  <section class="bg-black py-16">
    <h3 class="text-3xl font-bold text-center mb-12">ČASTO KLADENÉ <span class="text-red-600">DOTAZY</span></h3>
    <div class="container mx-auto px-6 max-w-6xl space-y-4">
      <div class="group border border-gray-700 rounded-lg p-4 transform transition hover:scale-105 hover:shadow-lg">
        <button class="w-full flex justify-between items-center text-white font-semibold">
          Potřebuji předchozí zkušenosti?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
      <div class="group border border-gray-700 rounded-lg p-4 transform transition hover:scale-105 hover:shadow-lg">
        <button class="w-full flex justify-between items-center text-white font-semibold">
          Co si mám přinést na první lekci?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>

</main>

<style>
  :global(html) { scroll-padding-top: 6rem; }
</style>
