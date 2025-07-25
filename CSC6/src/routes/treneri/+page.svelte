<script lang="ts">
  type Trainer = {
    name: string;
    img: string;
    desc: string;
    achievements: string[];
  };

  const trainers: Trainer[] = [
    // ... stejné pole trenérů ...
    {
      name: "Jan Novák",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Hlavní trenér MMA. Bývalý mistr ČR. Naučí tě komplexní boj.",
      achievements: [
        "Mistr ČR v MMA 2018, 2019",
        "10 let trenérské praxe",
        "Specializace: taktika, grappling"
      ]
    },
    {
      name: "Petr Svoboda",
      img: "https://randomuser.me/api/portraits/men/35.jpg",
      desc: "Expert na brazilské jiu-jitsu. Má černý pásek a mnoho vítězství.",
      achievements: [
        "Černý pásek BJJ",
        "2x vítěz Prague Open",
        "Vítěz ADCC Trials"
      ]
    },
    // ... ostatní trenéři ...
  ];

  let current: number = 0;
  let showPopup: boolean = false;
  let popupTrainer: Trainer | null = null;

  function next(): void {
    current = (current + 1) % trainers.length;
  }
  function prev(): void {
    current = (current - 1 + trainers.length) % trainers.length;
  }
  function openPopup(trainer: Trainer): void {
    popupTrainer = trainer;
    showPopup = true;
    document.body.style.overflow = "hidden";
  }
  function closePopup(): void {
    showPopup = false;
    popupTrainer = null;
    document.body.style.overflow = "";
  }
</script>

<section class="relative h-[350px] md:h-[450px] w-full flex items-center justify-center">
  <img
    src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1600&q=80"
    alt="Trenéři"
    class="absolute inset-0 w-full h-full object-cover brightness-50"
  />
  <h1 class="relative z-10 text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg uppercase tracking-wide">
    Trenéři
  </h1>
</section>

<section class="container mx-auto px-6 py-16">
  <h2 class="text-2xl font-bold text-red-600 mb-8 text-center">Seznam našich trenérů</h2>
  <div class="flex flex-col items-center">
    <div class="relative w-full max-w-md flex flex-col items-center">
      <button type="button" on:click={prev} class="absolute left-0 top-1/2 -translate-y-1/2 text-red-600 hover:text-white text-4xl p-2 rounded-full z-10 bg-black bg-opacity-50" aria-label="Předchozí trenér">&#8592;</button>
      <button type="button"
        class="bg-gray-900 rounded-xl shadow-lg p-8 w-full flex flex-col items-center cursor-pointer transition hover:scale-105"
        on:click={() => openPopup(trainers[current])}
        aria-label="O trenérovi"
      >
        <img src={trainers[current].img} alt={trainers[current].name} class="w-32 h-32 rounded-full border-4 border-red-600 shadow mb-4 object-cover" />
        <h3 class="text-white text-xl font-semibold mb-2">{trainers[current].name}</h3>
        <p class="text-gray-300 text-center">{trainers[current].desc}</p>
      </button>
      <button type="button" on:click={next} class="absolute right-0 top-1/2 -translate-y-1/2 text-red-600 hover:text-white text-4xl p-2 rounded-full z-10 bg-black bg-opacity-50" aria-label="Další trenér">&#8594;</button>
    </div>
    <div class="mt-6 flex space-x-2">
      {#each trainers as _, i}
        <span class="w-3 h-3 rounded-full {current === i ? 'bg-red-600' : 'bg-gray-600'}"></span>
      {/each}
    </div>
  </div>
</section>

<!-- POPUP OKNO BEZ WARNINGŮ: -->
{#if showPopup && popupTrainer}
  <div
    class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center focus:outline-none"
    role="dialog"
    aria-modal="true"
    aria-label="Trenér detail"
    tabindex="0"
    on:click={closePopup}
    on:keydown={(e) => { if (e.key === 'Escape') closePopup(); }}
    style="padding:0;margin:0;border:none;"
  >
    <div
      class="bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-xl relative"
      role="document"
      aria-label="Detail trenéra"
    >
      <button type="button" class="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl" on:click={closePopup} aria-label="Zavřít">&times;</button>
      <img src={popupTrainer.img} alt={popupTrainer.name} class="w-32 h-32 mx-auto rounded-full border-4 border-red-600 shadow mb-4 object-cover" />
      <h3 class="text-white text-2xl font-bold mb-2 text-center">{popupTrainer.name}</h3>
      <p class="text-gray-300 text-center mb-4">{popupTrainer.desc}</p>
      <ul class="list-disc ml-8 text-gray-200 mb-2">
        {#each popupTrainer.achievements as ach}
          <li>{ach}</li>
        {/each}
      </ul>
      <button type="button" class="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition" on:click={closePopup} aria-label="Zavřít detail trenéra">
        Zavřít
      </button>
    </div>
  </div>
{/if}
