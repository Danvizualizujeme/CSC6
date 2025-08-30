<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { base } from '$app/paths';

  // Jednotná fotka pro všechny podtrenéry (JPG)
  const placeholderImage = `${base}/images/trainers/treneri.jpg`;

  // PŮVODNÍ fotka hlavního trenéra – necháváme přes STEJNOU cestu jako dřív
  const mainImage = '/images/trainers/alex1.jpg';

  // === HLAVNÍ TRENÉR ===
  interface Achievement { text: string; icon: string }
  interface MainTrainer {
    name: string;
    role: string;
    image: string;
    description: string;
    philosophy: string;
    achievements: Achievement[];
  }

  const mainTrainer: MainTrainer = {
    name: 'Lukáš Wojdyla',
    role: 'Hlavní trenér & zakladatel klubu',
    image: mainImage, // ponecháváme původní fotku
    description:
  'Lukáš byl — jako spousta kluků se zápalem pro bojové sporty — od začátku nadšenec. Protože v okolí chyběl pořádný klub pro nováčky, založil vlastní. Má pochopení pro úplné začátečníky, vše vysvětluje srozumitelně a vede tréninky v přátelské, respektující atmosféře.',

philosophy:
  'U nás se jde krok za krokem: důraz na základy, bezpečí, správnou techniku a respekt. Každý si trénink odmaká podle své úrovně — od prvního dne až po závodní přípravu.',

    achievements: [
      { text: 'Zakladatel CSC MMA Karviná', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z"/></svg>` },
      { text: 'Praxe v MMA/BOX/K1 (amatérské & regionální zápasy)', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2z"/></svg>` },
      { text: 'Trpělivý přístup k nováčkům', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0112 7a5.5 5.5 0 0110 1.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>` },
      { text: 'Komunitní projekty a nábory mládeže', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2z"/></svg>` }
    ]
  };

  // === ELITNÍ TRENÉŘI — stejné fotky (treneri.jpg), jen jméno ===
  interface Trainer { name: string; img: string; }
  const otherTrainers: Trainer[] = [
    { name: 'Lukáš Braborec', img: placeholderImage },
    { name: 'Lukáš Górecki', img: placeholderImage },
    { name: 'Ondřej Pawliczek', img: placeholderImage },
    { name: 'Lukáš Mayer', img: placeholderImage },
    { name: 'Daniel Hudeček', img: placeholderImage },
    { name: 'Michal Sumelidis', img: placeholderImage }
  ];
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700&display=swap');

  .font-heading {
    font-family: 'Bebas Neue', sans-serif;
  }
  .font-body {
    font-family: 'Poppins', sans-serif; /* ← tečka → středník */
  }
  .bg-dark {
    background-color: #0c0c0c;
  }
</style>


<main class="bg-dark text-white font-body overflow-hidden">
  <!-- HLAVNÍ TRENÉR -->
  <section id="profil" class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div class="relative" in:fade={{ duration: 1500 }}>
        <img
          src={mainTrainer.image}
          alt={mainTrainer.name}
          class="w-full rounded-3xl shadow-2xl object-cover relative transform transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div in:fade={{ duration: 1500, delay: 200 }}>
        <p class="text-red-600 font-bold uppercase tracking-widest mb-4">Hlavní trenér</p>
        <h2 class="text-5xl font-heading leading-tight mb-2">
          {mainTrainer.name}
        </h2>
        <p class="text-gray-300 font-bold text-lg mb-6">{mainTrainer.role}</p>
        <p class="text-gray-400 text-lg leading-relaxed mb-6">{mainTrainer.description}</p>
        <p class="text-gray-400 text-lg leading-relaxed mb-8">{mainTrainer.philosophy}</p>

        <!-- Odznáčky: čitelnější (větší ikona + vyšší kontrast) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-300">
          {#each mainTrainer.achievements as achievement}
            <div class="flex flex-col items-center text-center">
              {@html achievement.icon}
              <p class="mt-2 text-sm leading-snug">{@html achievement.text}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- TÝM -->
  <section id="tym" class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="text-center mb-20">
      <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Seznamte se s týmem</p>
      <h3 class="text-5xl font-heading">
        ELITNÍ <span class="text-red-600">TRENÉŘI</span>
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {#each otherTrainers as coach}
        <div class="group bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]">
          <div class="relative h-96 w-full overflow-hidden">
            <img
              src={coach.img}
              alt={coach.name}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </div>
          <div class="p-8">
            <h4 class="text-2xl font-heading text-white text-center">{coach.name}</h4>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
