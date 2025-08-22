<script lang="ts">
  import { fly, fade } from 'svelte/transition';

  // === HLAVNÍ TRENÉR ===
  const mainTrainer = {
    name: 'Lukáš Wojdyla',
    role: 'Hlavní trenér & zakladatel',
    image: '/images/trainers/alex1.jpg',
    description: 'S více než 15 lety profesionálních bojových zkušeností, včetně úspěšné kariéry v UFC, přináší Alex Chen do klubu CSC MMA nepřekonatelné znalosti a odbornost. Po ukončení závodní kariéry s impozantní bilancí 22–3 se Alex naplno věnuje trénování nové generace bojovníků.',
    philosophy: 'Alexova trenérská filozofie kombinuje technickou preciznost se strategickým bojovým rozumem, díky čemuž pomáhá bojovníkům vybudovat kompletní sadu dovedností. Jeho schopnost rozpoznat a rozvíjet talent přinesla zápasníkům CSC řadu titulů a vítězství.',
    achievements: [
      { text: 'Veterán UFC<br/>2010–2017', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>` },
      { text: 'Černý pás BJJ<br/>pod Ricksonem Graciem', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>` },
      { text: 'Sportovní věda, Stanford', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V6h2v8zm4 4h-2v-2h2v2zm0-4h-2V6h2v8z"/></svg>` },
      { text: 'Trenér roku<br/>2018, 2021', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>` }
    ]
  };

  // === ELITNÍ TRENÉŘI ===
  interface Social {
    href: string;
    icon: string;
    label: string;
  }
  interface Trainer {
    name: string;
    title: string;
    img: string;
    desc: string;
    social: { twitter: string; instagram: string; facebook: string; };
  }

  const socialIcons = {
    twitter: `<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/><circle cx="17.75" cy="6.25" r="1"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.07v-2.88h2.43V9.75c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.18 2.15.18v2.37h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.88H13.5v6.99A10 10 0 0022 12z"/></svg>`
  };

  const otherTrainers: Trainer[] = [
    {
      name: 'Lukáš Braborec',
      title: 'MMA začátečníci',
      img: '/images/trainers/sarah.jpg',
      desc: 'Bývalá světová šampiónka v Muay Thai s více než 10 lety zkušeností.',
      social: { twitter: 'https://twitter.com/sarah', instagram: 'https://instagram.com/sarah', facebook: 'https://facebook.com/sarah' }
    },
    {
      name: 'Lukáš Górecki',
      title: 'Box pokročilý',
      img: '/images/trainers/carlos-mendez.jpg',
      desc: 'Držitel 3. stupně černého pásu v Brazílsko‑jiu‑jitsu.',
      social: { twitter: 'https://twitter.com/carlos', instagram: 'https://instagram.com/carlos', facebook: 'https://facebook.com/carlos' }
    },
    {
      name: 'Ondřej Pawliczek',
      title: 'Box začátečníci',
      img: '/images/trainers/james-wilson.jpg',
      desc: 'Bývalý olympijský boxer s bohatými zkušenostmi z mezinárodních soutěží.',
      social: { twitter: 'https://twitter.com/james', instagram: 'https://instagram.com/james', facebook: 'https://facebook.com/james' }
    },
    {
      name: 'Lukáš Mayer',
      title: 'Dětské tréninky & Junior MMA',
      img: '/images/trainers/mike-johnson.jpg',
      desc: 'Šampion NCAA Division I se zkušenostmi z profesionálních lig.',
      social: { twitter: 'https://twitter.com/mike', instagram: 'https://instagram.com/mike', facebook: 'https://facebook.com/mike' }
    },
    {
      name: 'Daniel Hudeček',
      title: 'Fitbox a kruhové tréninky & K1',
      img: '/images/trainers/david-parker.jpg',
      desc: 'Certifikovaný trenér síly a kondice pro bojové sporty.',
      social: { twitter: 'https://twitter.com/david', instagram: 'https://instagram.com/david', facebook: 'https://facebook.com/david' }
    },
    {
      name: 'Michal Sumelidis',
      title: 'Grappling',
      img: '/images/trainers/lisa-martinez.jpg',
      desc: 'Odbornice na sportovní výživu a regeneraci.',
      social: { twitter: 'https://twitter.com/lisa', instagram: 'https://instagram.com/lisa', facebook: 'https://facebook.com/lisa' }
    }
  ];
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
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-400">
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
            <h4 class="text-2xl font-heading text-white">{coach.name}</h4>
            <p class="text-red-600 text-lg mt-1 mb-4">{coach.title}</p>
            <p class="text-gray-400 mb-6">{coach.desc}</p>
            <div class="flex space-x-4 text-gray-500">
              <a href={coach.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="hover:text-[#1DA1F2] transition-colors duration-300">
                {@html socialIcons.twitter}
              </a>
              <a href={coach.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="hover:text-[#E1306C] transition-colors duration-300">
                {@html socialIcons.instagram}
              </a>
              <a href={coach.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-[#4267B2] transition-colors duration-300">
                {@html socialIcons.facebook}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>