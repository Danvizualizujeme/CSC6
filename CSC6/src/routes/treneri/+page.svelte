<!-- src/routes/treneri/+page.svelte -->
<script lang="ts">
  // žádná logika prozatím není potřeba
</script>

<main class="bg-black text-white space-y-16">

  <!-- HERO / TRENÉŘI -->
  <section
    class="relative -mt-24 bg-cover bg-center h-[600px]"
    style="background-image:url('/images/about-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
       NAŠI <span class="text-red-600">TRENÉŘI</span>
      </h1>
      <p class="mt-4 text-lg">
        Naši mistři sdílejí své know‑how – připravte se na nový level tréninku.
      </p>
      <!-- tlačítka odstraněna -->
    </div>
  </section>

  <!-- HLAVNÍ TRENÉR -->
  <section
    id="profil"
    class="container mx-auto px-6 py-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  >
    <div>
      <img
        src="/images/trainers/alex-chen.jpg"
        alt="Alex Chen"
        class="w-full rounded-lg shadow-lg object-cover"
      />
    </div>
    <div>
      <h2 class="text-4xl font-bold text-red-600 mb-2">ALEX CHEN</h2>
      <p class="text-gray-400 uppercase tracking-wide font-semibold mb-4">
        Hlavní trenér & zakladatel
      </p>
      <div class="w-16 h-1 bg-red-600 mb-6"></div>
      <p class="text-gray-300 mb-4">
        S více než 15 lety profesionálních bojových zkušeností, včetně úspěšné kariéry v UFC,
        přináší Alex Chen do klubu CSC MMA nepřekonatelné znalosti a odbornost. Po ukončení závodní
        kariéry s impozantní bilancí 22–3 se Alex naplno věnuje trénování nové generace bojovníků.
      </p>
      <p class="text-gray-300 mb-6">
        Alexova trenérská filozofie kombinuje technickou preciznost se strategickým bojovým rozumem,
        díky čemuž pomáhá bojovníkům vybudovat kompletní sadu dovedností. Jeho schopnost rozpoznat a
        rozvíjet talent přinesla zápasníkům CSC řadu titulů a vítězství.
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
        <div class="flex items-center gap-2">
          <!-- ikona -->
          <span>Veterán UFC<br/>2010–2017</span>
        </div>
        <div class="flex items-center gap-2">
          <!-- ikona -->
          <span>Černý pás BJJ<br/>pod Ricksonem Graciem</span>
        </div>
        <div class="flex items-center gap-2">
          <!-- ikona -->
          <span>Sportovní věda, Stanford</span>
        </div>
        <div class="flex items-center gap-2">
          <!-- ikona -->
          <span>Trenér roku<br/>2018, 2021</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ELITNÍ TRENÉŘI -->
  <section id="tym" class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-8">
      ELITNÍ <span class="text-red-600">TRENÉŘI</span>
    </h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each [
        {
          name: 'Sarah Thompson',
          title: 'Trenérka Muay Thai',
          img: '/images/trainers/sarah-thompson.jpg',
          desc: 'Bývalá světová šampiónka v Muay Thai s více než 10 lety zkušeností.',
          social: { twitter: 'https://twitter.com/sarah', instagram: 'https://instagram.com/sarah', facebook: 'https://facebook.com/sarah' }
        },
        {
          name: 'Carlos Mendez',
          title: 'Trenér BJJ',
          img: '/images/trainers/carlos-mendez.jpg',
          desc: 'Držitel 3. stupně černého pásu v Brazílsko‑jiu‑jitsu.',
          social: { twitter: 'https://twitter.com/carlos', instagram: 'https://instagram.com/carlos', facebook: 'https://facebook.com/carlos' }
        },
        {
          name: 'James Wilson',
          title: 'Boxerský trenér',
          img: '/images/trainers/james-wilson.jpg',
          desc: 'Bývalý olympijský boxer s bohatými zkušenostmi z mezinárodních soutěží.',
          social: { twitter: 'https://twitter.com/james', instagram: 'https://instagram.com/james', facebook: 'https://facebook.com/james' }
        },
        {
          name: 'Mike Johnson',
          title: 'Trenér wrestlingu',
          img: '/images/trainers/mike-johnson.jpg',
          desc: 'Šampion NCAA Division I se zkušenostmi z profesionálních lig.',
          social: { twitter: 'https://twitter.com/mike', instagram: 'https://instagram.com/mike', facebook: 'https://facebook.com/mike' }
        },
        {
          name: 'David Parker',
          title: 'Síla & kondice',
          img: '/images/trainers/david-parker.jpg',
          desc: 'Certifikovaný trenér síly a kondice pro bojové sporty.',
          social: { twitter: 'https://twitter.com/david', instagram: 'https://instagram.com/david', facebook: 'https://facebook.com/david' }
        },
        {
          name: 'Lisa Martinez',
          title: 'Nutriční & regenerační specialistka',
          img: '/images/trainers/lisa-martinez.jpg',
          desc: 'Odbornice na sportovní výživu a regeneraci.',
          social: { twitter: 'https://twitter.com/lisa', instagram: 'https://instagram.com/lisa', facebook: 'https://facebook.com/lisa' }
        }
      ] as coach}
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <img src={coach.img} alt={coach.name} class="w-full h-64 object-cover rounded-lg mb-4" />
          <h4 class="text-xl font-semibold mb-1">{coach.name}</h4>
          <p class="text-red-600 font-medium mb-3">{coach.title}</p>
          <p class="text-gray-300 text-sm mb-4">{coach.desc}</p>
          <div class="flex gap-4 text-gray-400">
            <a href={coach.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href={coach.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
            <a href={coach.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
          </div>
        </div>
      {/each}
    </div>
  </section>

</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
