<script>
  // Galerie fotek pro sekci "Klubové momenty"
  const gallery = [
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80"
  ];
</script>

<!-- HERO sekce -->
<section class="relative h-[420px] md:h-[520px] flex items-center px-4 bg-black overflow-hidden">
  <img 
    src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1600&q=80" 
    alt="O nás" 
    class="absolute inset-0 w-full h-full object-cover object-center brightness-75 scale-105 animate-zoom-in" 
    loading="lazy"
  />
  <div class="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-transparent"></div>
  <div class="relative z-10 max-w-2xl">
    <h1 class="font-oswald text-5xl md:text-6xl font-bold text-white mb-3 uppercase tracking-wider drop-shadow-lg animate-fadein-up">
      O <span class="text-csc-red">NÁS</span>
    </h1>
    <p class="text-gray-200 text-lg mb-2 animate-fadein-up delay-200">
      Poznejte příběh CSC MMA Clubu – místa, kde se rodí šampioni a kde každý den překonáváme své limity. Jsme víc než jen gym, jsme rodina bojovníků.
    </p>
  </div>
</section>

<!-- FILOZOFIE -->
<section class="bg-black py-16 md:py-20 animate-fadein-up delay-300">
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-oswald font-bold text-white mb-6 text-center uppercase tracking-wider">
      NAŠE <span class="text-csc-red">FILOZOFIE</span>
    </h2>
    <div class="h-1 w-24 bg-csc-red mx-auto mb-8 rounded"></div>
    <div class="text-gray-300 text-center mb-8">
      <p>
        CSC MMA Club vznikl v roce 2012 z vášně pro bojové sporty a snu vytvořit místo, kde každý najde prostor růst: od začátečníků až po šampiony.
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div class="bg-zinc-900 rounded-xl py-6 px-2 shadow-lg border-t-4 border-csc-red transition-transform hover:-translate-y-1 animate-fadein-up delay-400">
        <i class="fa-solid fa-fire text-2xl text-csc-red mb-2"></i>
        <div class="font-oswald font-bold text-white mb-1">VÁŠEŇ</div>
        <div class="text-xs text-gray-400">Do tréninku dáváme srdce</div>
      </div>
      <div class="bg-zinc-900 rounded-xl py-6 px-2 shadow-lg border-t-4 border-csc-red transition-transform hover:-translate-y-1 animate-fadein-up delay-500">
        <i class="fa-solid fa-handshake text-2xl text-csc-red mb-2"></i>
        <div class="font-oswald font-bold text-white mb-1">RESPEKT</div>
        <div class="text-xs text-gray-400">Respektujeme soupeře i tým</div>
      </div>
      <div class="bg-zinc-900 rounded-xl py-6 px-2 shadow-lg border-t-4 border-csc-red transition-transform hover:-translate-y-1 animate-fadein-up delay-600">
        <i class="fa-solid fa-star text-2xl text-csc-red mb-2"></i>
        <div class="font-oswald font-bold text-white mb-1">EXCELENCE</div>
        <div class="text-xs text-gray-400">Jdeme na maximum</div>
      </div>
      <div class="bg-zinc-900 rounded-xl py-6 px-2 shadow-lg border-t-4 border-csc-red transition-transform hover:-translate-y-1 animate-fadein-up delay-700">
        <i class="fa-solid fa-people-group text-2xl text-csc-red mb-2"></i>
        <div class="font-oswald font-bold text-white mb-1">KOMUNITA</div>
        <div class="text-xs text-gray-400">Podporujeme se navzájem</div>
      </div>
    </div>
  </div>
</section>

<!-- HISTORIE A ÚSPĚCHY -->
<section class="py-16 md:py-20 bg-zinc-900 animate-fadein-up delay-500">
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-3xl md:text-4xl font-oswald font-bold mb-6 text-white text-center uppercase tracking-wider">
      NAŠE <span class="text-csc-red">HISTORIE</span> & ÚSPĚCHY
    </h2>
    <div class="h-1 w-24 bg-csc-red mx-auto mb-8 rounded"></div>
    <div class="text-gray-300 text-center mb-8">
      <p>
        Za více než 10 let existence jsme dosáhli mnoha úspěchů a vychovali desítky šampionů.
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-8 mb-8">
      <div>
        <div class="text-xs text-csc-red font-bold uppercase mb-1">Jak to všechno začalo</div>
        <div class="text-gray-200 text-sm mb-2">
          V roce 2012 se skupina nadšenců rozhodla založit klub, kde by mohla rozvíjet techniku, charakter i komunitu. Dnes jsme jeden z největších klubů v regionu.
        </div>
      </div>
      <div class="flex flex-col gap-2 text-white text-sm">
        <div class="flex gap-2"><span class="font-bold text-csc-red">300+</span> Aktivních členů</div>
        <div class="flex gap-2"><span class="font-bold text-csc-red">50+</span> Medailí a ocenění</div>
        <div class="flex gap-2"><span class="font-bold text-csc-red">15</span> Profiúčastníků</div>
        <div class="flex gap-2"><span class="font-bold text-csc-red">12</span> Let historie</div>
      </div>
    </div>
  </div>
</section>

<!-- HLAVNÍ ÚSPĚCHY (v tmavém boxu, moderní grid, s animací) -->
<section class="bg-black py-8 animate-fadein-up delay-700">
  <div class="max-w-3xl mx-auto px-4">
    <div class="bg-zinc-900 rounded-2xl shadow-xl px-6 md:px-12 py-8 md:py-10 flex flex-col items-center">
      <h3 class="text-csc-red text-lg font-oswald font-bold uppercase mb-6 tracking-widest text-center">
        HLAVNÍ ÚSPĚCHY
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div class="flex items-center gap-3">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-csc-red/10 text-csc-red text-xl animate-pop-in">
            <i class="fa-solid fa-trophy"></i>
          </span>
          <div>
            <div class="font-bold text-white text-base">Klub roku 2022</div>
            <div class="text-xs text-gray-400">Vyhlášení MMA asociací</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-csc-red/10 text-csc-red text-xl animate-pop-in delay-100">
            <i class="fa-solid fa-medal"></i>
          </span>
          <div>
            <div class="font-bold text-white text-base">50+ turnajových medailí</div>
            <div class="text-xs text-gray-400">Získáno mezi 2014–2024</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-csc-red/10 text-csc-red text-xl animate-pop-in delay-200">
            <i class="fa-solid fa-users"></i>
          </span>
          <div>
            <div class="font-bold text-white text-base">300+ členů</div>
            <div class="text-xs text-gray-400">Největší klub v regionu</div>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="flex items-center justify-center w-9 h-9 rounded-full bg-csc-red/10 text-csc-red text-xl animate-pop-in delay-300">
            <i class="fa-solid fa-globe"></i>
          </span>
          <div>
            <div class="font-bold text-white text-base">Mezinárodní úspěchy</div>
            <div class="text-xs text-gray-400">Účast a výhry na turnajích IMMAF</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- KLUBOVÉ MOMENTY -->
<section class="py-16 bg-black animate-fadein-up delay-900">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-oswald font-bold text-center text-white mb-2 uppercase tracking-wide">
      KLUBOVÉ <span class="text-csc-red">MOMENTY</span>
    </h2>
    <div class="text-center text-gray-400 text-sm mb-10">
      Podívejte se na atmosféru našeho klubu a momenty, které tvoří naši komunitu.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each gallery as src}
        <div class="overflow-hidden rounded-xl shadow-lg">
          <img src={src} alt="Klubová fotka" class="object-cover w-full h-64 hover:scale-105 transition-transform duration-300" loading="lazy"/>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA sekce -->
<section class="bg-black py-16 animate-fadein-up delay-1000">
  <div class="max-w-xl mx-auto px-4 text-center">
    <h2 class="text-2xl md:text-3xl font-oswald font-bold mb-3 text-white uppercase">
      Připoj se k <span class="text-csc-red">naší rodině</span>
    </h2>
    <p class="mb-8 text-gray-400">
      Staň se součástí CSC MMA Clubu a začni svou cestu k osobnímu růstu, lepší kondici a sebeobraně. Naši trenéři tě povedou každým krokem.
    </p>
    <a href="/kontakt" class="inline-block bg-csc-red hover:bg-csc-red/90 text-white font-oswald font-bold px-8 py-3 rounded-lg uppercase transition-all duration-300 shadow-lg mr-2 mb-2 animate-fadein-up delay-1100">
      Kontaktujte nás
    </a>
    <a href="/rozvrh" class="inline-block border border-csc-red text-csc-red hover:bg-csc-red hover:text-white font-oswald font-bold px-8 py-3 rounded-lg uppercase transition-all duration-300 shadow-lg mb-2 animate-fadein-up delay-1200">
      Zobrazit rozvrh
    </a>
  </div>
</section>

<style>
  .text-csc-red { color: #FF1C1C; }
  .bg-csc-red { background: #FF1C1C; }
  .border-csc-red { border-color: #FF1C1C; }
  .bg-zinc-900 { background: #18181b; }
  /* Animace */
  @keyframes fadein-up {
    0% { opacity:0; transform: translateY(40px);}
    100% { opacity:1; transform: translateY(0);}
  }
  .animate-fadein-up { animation: fadein-up 0.8s cubic-bezier(.19,1,.22,1) both; }
  .delay-200 { animation-delay: .2s }
  .delay-300 { animation-delay: .3s }
  .delay-400 { animation-delay: .4s }
  .delay-500 { animation-delay: .5s }
  .delay-600 { animation-delay: .6s }
  .delay-700 { animation-delay: .7s }
  .delay-900 { animation-delay: .9s }
  .delay-1000 { animation-delay: 1s }
  .delay-1100 { animation-delay: 1.1s }
  .delay-1200 { animation-delay: 1.2s }
  @keyframes zoom-in {
    0% {transform: scale(1.08);}
    100% {transform: scale(1);}
  }
  .animate-zoom-in { animation: zoom-in 1.5s cubic-bezier(.19,1,.22,1) both;}
  @keyframes pop-in {
    0% {opacity: 0; transform: scale(0.7);}
    100% {opacity: 1; transform: scale(1);}
  }
  .animate-pop-in { animation: pop-in 0.7s cubic-bezier(.19,1,.22,1) both;}
  .delay-100 { animation-delay: 0.1s }
  .delay-200 { animation-delay: 0.2s }
  .delay-300 { animation-delay: 0.3s }
</style>
