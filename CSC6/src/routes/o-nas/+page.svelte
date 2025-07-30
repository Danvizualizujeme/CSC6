<!-- src/routes/o-nas/+page.svelte -->
<script lang="ts">
  // žádná logika prozatím není potřeba
</script>

<main class="bg-black text-white space-y-16">

  <!-- HERO / ABOUT -->
  <section
    class="relative -mt-24 bg-cover bg-center h-[600px]"
    style="background-image:url('/images/about-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        O <span class="text-red-600">CSC MMA</span>
      </h1>
      <p class="mt-4 text-lg">
        Vybudovali jsme šampiony díky disciplíně, odhodlání a špičkovému tréninku od roku 2005.
      </p>
      <!-- tlačítka odstraněna -->
    </div>
  </section>

  <!-- OUR STORY -->
  <section
    id="story"
    class="container mx-auto px-6 pt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl"
  >
    <div>
      <h2 class="text-3xl font-bold mb-4">
        NAŠE <span class="text-red-600">HISTORIE</span>
      </h2>
      <p class="text-gray-200 mb-4">
        Klub CSC MMA vznikl v roce 2005 z iniciativy bývalého UFC zápasníka Alexe Rodrígueze jako malá
        tréninková aréna na rozvoj místních talentů. Z nadšeného projektu se rychle stal jeden z nejuznávanějších
        MMA tréninkových center v regionu.
      </p>
      <p class="text-gray-200 mb-4">
        Naší misí je od začátku nabídnout světovou úroveň tréninku a zároveň budovat podpůrnou komunitu.
        Věříme, že bojové umění není jen o zápasech, ale především o disciplíně, respektu a neustálém
        osobním růstu.
      </p>
      <p class="text-gray-200">
        Dnes je CSC MMA domovem profesionálních zápasníků, amatérských bojovníků i nadšenců fitness.
        Společným cílem všech členů je překonávat své limity a dosahovat dokonalosti, v ringu i mimo něj.
      </p>
    </div>
    <div>
      <img
        src="/images/about-gym.jpg"
        alt="Interiér tělocvičny"
        class="w-full rounded-lg shadow-lg"
      />
    </div>
  </section>

  <!-- OUR PHILOSOPHY -->
  <section class="bg-black py-16">
    <div class="container mx-auto px-6 max-w-6xl">
      <h3 class="text-3xl font-bold text-center mb-12">
        NAŠE <span class="text-red-600">FILOZOFIE</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Discipline -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">DISCIPLÍNA</h4>
          <p class="text-gray-300 text-sm">
            Pravý růst přichází s pravidelnou praxí a neochvějným odhodláním.
            Naše programy budují mentální houževnatost i fyzickou sílu.
          </p>
        </div>
        <!-- Respect -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">RESPEKT</h4>
          <p class="text-gray-300 text-sm">
            V CSC vytváříme prostředí vzájemného respektu. Ať už jste začátečník nebo profesionál,
            zasloužíte si důstojné podmínky k osobnímu růstu.
          </p>
        </div>
        <!-- Excellence -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 3h14v4a7 7 0 01-7 7 7 7 0 01-7-7V3z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 21h8m-4-2v2" />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">EXCELENCE</h4>
          <p class="text-gray-300 text-sm">
            Usilujeme o dokonalost ve všem, co děláme. Naše špičkové zázemí a odborní lektoři
            vás připraví na úspěch.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR FACILITIES -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">
      NAŠE <span class="text-red-600">PROSTORY</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/octagon.jpg"
          alt="Profesionální oktagon"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">PROFESIONÁLNÍ OKTAGON</h4>
          <p class="text-gray-300 text-sm">
            Trénujte v regulérním oktagonu stejně jako profesionálové.
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/strength.jpg"
          alt="Síla a kondice"
          class="w-full h-64 object-cover"
        />  
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">SÍLA &amp; KONDICE</h4>
          <p class="text-gray-300 text-sm">
            Nejmodernější vybavení pro budování síly potřebné v bojových sportech.
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/boxing-ring.jpg"
          alt="Boxovací ring"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">BOXOVACÍ RING</h4>
          <p class="text-gray-300 text-sm">
            Zdokonalujte své údery v profesionálním ringu pod vedením odborníků.
          </p>
        </div>
      </div>
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/grappling-area.jpg"
          alt="Prostor pro zápasení"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">ZÁPASENÍ &amp; GRAPPLING</h4>
          <p class="text-gray-300 text-sm">
            Prostorné žíněnky pro Brazílsko‑jiu‑jitsu, wrestling i grappling.
          </p>
        </div>
      </div>
    </div>
  </section>

</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
