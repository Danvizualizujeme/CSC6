<script>
  // POLE TRENERŮ:
  const trainers = [
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
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      desc: "Trenér boxu a kondiční přípravy. Důraz na techniku a disciplínu.",
      achievements: [
        "Vicemistr ČR v boxu 2017",
        "8 let trenérské praxe",
        "Specializace: box, fyzická příprava"
      ]
    },
    {
      name: "Lucie Dvořáková",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      desc: "Trenérka brazilského jiu-jitsu. Zaměřuje se na začátečníky i pokročilé.",
      achievements: [
        "Mistryně ČR v BJJ 2020",
        "6 let trenérské praxe",
        "Specializace: BJJ, technika na zemi"
      ]
    },
    {
      name: "Martin Černý",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
      desc: "Trenér muay thai a zápasu. Připraví tě na zápasy i kondici.",
      achievements: [
        "Mistr ČR v muay thai 2016",
        "9 let trenérské praxe",
        "Specializace: muay thai, zápas, příprava na zápasy"
      ]
    },
    {
      name: "Eva Novotná",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Trenérka dětí a mládeže. Vede tréninky s důrazem na zábavu a rozvoj.",
      achievements: [
        "5 let trenérské praxe",
        "Specializace: děti, mládež, pohybové hry"
      ]
    },
    {
      name: "Tomáš Král",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      desc: "Asistent trenéra MMA. Pomáhá s individuální přípravou.",
      achievements: [
        "3 roky trenérské praxe",
        "Specializace: individuální tréninky, rozvoj techniky"
      ]
    }
  ];

  let page = 0;
  const perPage = 4;

  let showPopup = false;
  /** @type {{ name: string; img: string; desc: string; achievements: string[] } | null} */
  let popupTrainer = null;

  function next() {
    page = (page + 1) % Math.ceil(trainers.length / perPage);
  }
  function prev() {
    page = (page - 1 + Math.ceil(trainers.length / perPage)) % Math.ceil(trainers.length / perPage);
  }
  /**
   * @param {{ name: string; img: string; desc: string; achievements: string[] }} trainer
   */
  function openPopup(trainer) {
    popupTrainer = trainer;
    showPopup = true;
    document.body.style.overflow = "hidden";
  }
  function closePopup() {
    showPopup = false;
    popupTrainer = null;
    document.body.style.overflow = "";
  }
  function handleKey(e) {
    if (e.key === "Escape") closePopup();
  }
</script>

<!-- HERO Sekce -->
<section class="relative h-[350px] md:h-[440px] w-full flex items-center justify-center bg-black overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1600&q=80"
    alt="Trenéři"
    class="absolute inset-0 w-full h-full object-cover brightness-60 scale-105"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
  <h1 class="relative z-10 text-5xl md:text-7xl font-bold text-white text-center drop-shadow-lg uppercase tracking-widest animate-fadein-up">
    Trenéři
  </h1>
</section>

<!-- Výběrová sekce -->
<section class="bg-black py-16">
  <div class="max-w-3xl mx-auto mb-12">
    <h2 class="text-3xl font-bold text-red-700 text-center mb-6 font-oswald animate-fadein-up">Najdi svého trenéra</h2>
    <p class="text-gray-300 text-center text-lg">Každý trenér má svou specializaci. Klikni na trenéra a zjisti více!</p>
  </div>
  <div class="max-w-7xl mx-auto px-3 md:px-10">
    <div class="flex items-center justify-between">
      <button
        type="button"
        on:click={prev}
        class="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-900/80 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition shadow-xl -ml-4 z-10 text-3xl"
        aria-label="Předchozí"
      >
        &#8592;
      </button>
      <div class="flex-1 flex items-stretch">
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
          {#each trainers.slice(page * perPage, page * perPage + perPage) as trainer}
            <button
              type="button"
              class="relative bg-gray-900 rounded-2xl shadow-2xl hover:shadow-red-700/40 transition-shadow duration-300 group flex flex-col items-center px-7 pt-8 pb-6 cursor-pointer border border-red-700/20 hover:border-red-700 focus:outline-red-700"
              on:click={() => openPopup(trainer)}
              aria-label={"Detail trenéra: " + trainer.name}
            >
              <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-red-700 mb-4 shadow-lg">
                <img src={trainer.img} alt={trainer.name} class="object-cover w-full h-full group-hover:scale-105 transition duration-300" />
              </div>
              <h3 class="font-oswald text-2xl font-bold text-white text-center mb-2 group-hover:text-red-700 transition">{trainer.name}</h3>
              <p class="text-gray-300 text-center mb-3">{trainer.desc}</p>
              <ul class="text-white/80 text-sm list-disc ml-4 space-y-1 text-left">
                {#each trainer.achievements as ach}
                  <li>{ach}</li>
                {/each}
              </ul>
              <span class="absolute top-3 right-5 text-red-700 group-hover:text-white text-lg opacity-60 group-hover:opacity-100 transition pointer-events-none">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </button>
          {/each}
        </div>
      </div>
      <button
        type="button"
        on:click={next}
        class="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gray-900/80 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition shadow-xl -mr-4 z-10 text-3xl"
        aria-label="Další"
      >
        &#8594;
      </button>
    </div>

    <div class="mt-10 flex justify-center gap-2">
      {#each Array(Math.ceil(trainers.length / perPage)) as _, i}
        <button
          type="button"
          class="w-3 h-3 rounded-full transition {page === i ? 'bg-red-700' : 'bg-gray-900 border border-red-700/30'}"
          aria-label={"Stránka " + (i + 1)}
          on:click={() => (page = i)}
        ></button>
      {/each}
    </div>
  </div>
</section>

<!-- POPUP MODÁL (s a11y fixy) -->
{#if showPopup && popupTrainer}
  <div
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    role="dialog"
    aria-modal="true"
    aria-label="Detail trenéra"
    tabindex="0"
    on:keydown={handleKey}
    on:click={closePopup}
  >
    <div
      class="bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative border-2 border-red-700 animate-fadein-up"
      role="document"
      aria-label="Detail trenéra"
      on:click|stopPropagation
    >
      <button type="button" class="absolute top-2 right-2 text-gray-400 hover:text-red-700 text-2xl" on:click={closePopup} aria-label="Zavřít">&times;</button>
      <img src={popupTrainer.img} alt={popupTrainer.name} class="w-32 h-32 mx-auto rounded-full border-4 border-red-700 shadow mb-4 object-cover" />
      <h3 class="font-oswald text-2xl font-bold mb-2 text-center text-white">{popupTrainer.name}</h3>
      <p class="text-gray-300 text-center mb-4">{popupTrainer.desc}</p>
      <ul class="list-disc ml-8 text-gray-200 mb-2 text-left">
        {#each popupTrainer.achievements as ach}
          <li>{ach}</li>
        {/each}
      </ul>
      <button type="button" class="mt-6 w-full bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-2 rounded-lg transition" on:click={closePopup} aria-label="Zavřít detail trenéra">
        Zavřít
      </button>
    </div>
  </div>
{/if}

<style>
  @keyframes fadein-up {
    0% { opacity:0; transform: translateY(40px);}
    100% { opacity:1; transform: translateY(0);}
  }
  .animate-fadein-up { animation: fadein-up 1s cubic-bezier(.19,1,.22,1) both;}
</style>
