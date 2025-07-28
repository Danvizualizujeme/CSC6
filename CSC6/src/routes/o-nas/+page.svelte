<script>
  const bgImg =
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80";
  const aboutImg =
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80";
  const gallery = [
    "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
  ];
</script>

<!-- HERO sekce -->
<section class="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
  <img
    src={bgImg}
    alt="O nás"
    class="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-csc-black via-csc-black/80 to-transparent"></div>
  <div class="relative z-10 text-center">
    <h1 class="font-oswald text-5xl md:text-7xl font-bold text-white mb-4 uppercase tracking-wider drop-shadow-lg">
      O NÁS
    </h1>
    <div class="flex justify-center">
      <span class="block bg-csc-red h-1 w-24 rounded"></span>
    </div>
  </div>
</section>

<!-- SEKCE S NAVAZUJÍCÍ FOTKOU V POZADÍ, HISTORIÍ I GALERIÍ -->
<div class="relative isolate">
  <!-- Globální pozadí přes vše -->
  <div
    class="pointer-events-none absolute inset-0 z-0"
    aria-hidden="true"
    style="background: linear-gradient(to bottom, rgba(20,20,20,0.95) 0%, rgba(20,20,20,0.83) 100%), url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat; filter: brightness(0.85) blur(0.5px);"
  ></div>

  <!-- HLAVNÍ BLOK (text + foto) -->
  <section class="relative z-10 py-20">
    <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
      <!-- Obrázek vlevo -->
      <div class="w-full md:w-1/2">
        <div class="w-full h-[380px] md:h-[420px] rounded-xl overflow-hidden shadow-xl border-2 border-csc-dark/40 bg-csc-dark/50">
          <img src={aboutImg} alt="interior gym" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- Text vpravo -->
      <div class="w-full md:w-1/2">
        <h2 class="font-oswald text-4xl md:text-5xl font-bold mb-2">
          CSC <span class="text-csc-red">MMA CLUB</span>
        </h2>
        <div class="h-1 w-20 bg-csc-red mb-6"></div>
        <p class="text-gray-200 mb-6 text-lg drop-shadow-md">
          CSC MMA Club od roku 2012 vyrostl v jedno z předních MMA center v regionu. V moderně vybaveném gymu nabízíme špičkový trénink brazilského jiu-jitsu, muay thai, zápasu i boxu.
        </p>
        <p class="text-gray-300 mb-8">
          Stavíme na profesionálním přístupu, ale zároveň na přátelské atmosféře. Naši trenéři tě povedou od začátků až k profi úrovni.
        </p>
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="flex items-center">
            <span class="text-csc-red mr-2"><i class="fa-solid fa-check"></i></span>
            <span>Zkušení trenéři</span>
          </div>
          <div class="flex items-center">
            <span class="text-csc-red mr-2"><i class="fa-solid fa-check"></i></span>
            <span>Moderní zázemí</span>
          </div>
          <div class="flex items-center">
            <span class="text-csc-red mr-2"><i class="fa-solid fa-check"></i></span>
            <span>Pro začátečníky i pokročilé</span>
          </div>
          <div class="flex items-center">
            <span class="text-csc-red mr-2"><i class="fa-solid fa-check"></i></span>
            <span>Příprava na zápasy</span>
          </div>
        </div>
        <a href="/kontakt" class="font-oswald inline-block bg-csc-red hover:bg-csc-red/80 text-csc-white px-8 py-3 rounded uppercase font-medium transition duration-300">
          Kontaktujte nás
        </a>
      </div>
    </div>
  </section>

  <!-- HISTORIE & ÚSPĚCHY přímo navazuje, má ale černější průhledný overlay pro čitelnost -->
  <section class="relative z-10 py-20">
    <div class="container mx-auto px-4">
      <div class="bg-csc-black/80 rounded-xl p-8 max-w-3xl mx-auto shadow-xl">
        <h2 class="font-oswald text-3xl md:text-4xl font-bold mb-8 text-center">Naše historie a úspěchy</h2>
        <div class="text-gray-300 text-lg mb-8 text-center">
          <p>
            Klub založený v roce 2010 skupinou nadšenců má dnes přes 200 členů všech věkových kategorií.<br>
            Naše filozofie je rodinná atmosféra, důraz na techniku a bezpečnost.
          </p>
        </div>
        <ul class="list-disc ml-8 text-csc-white text-lg space-y-2 text-left">
          <li>Více než 30 medailí z republikových šampionátů MMA</li>
          <li>4x účast na evropských turnajích</li>
          <li>Pět našich svěřenců přešlo do profesionální ligy</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- GALERIE sekce -->
  <section class="relative z-10 py-20">
    <div class="container mx-auto px-4">
      <h2 class="font-oswald text-3xl font-bold mb-10 text-center text-csc-red">Klubové momenty</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {#each gallery as src}ą
          <img src={src} alt="Klubová fotka" class="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition duration-300" />
        {/each}
      </div>
    </div>
  </section>
</div>
