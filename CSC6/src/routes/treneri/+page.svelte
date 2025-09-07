<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { base } from '$app/paths';

  // Jednotná fotka pro všechny podtrenéry (JPG)
  const placeholderImage = `${base}/images/trainers/treneri.jpg`;

  // PŮVODNÍ fotka hlavního trenéra – necháváme stejnou cestu jako dřív
  const mainImage = '/images/trainers/alex1.jpg';

  // === HLAVNÍ TRENÉR ===
  interface MainTrainer {
    name: string;
    role: string;
    image: string;
    intro: string;
    shinesIn: string[]; // vyniká v
  }

  const mainTrainer: MainTrainer = {
    name: 'Lukáš Wojdyla',
    role: 'Hlavní trenér & zakladatel klubu',
    image: mainImage,
    intro:
      'Hlavní trenér a srdce celého klubu. Každého člena bere jako součást rodiny a vždy se snaží z každého dostat maximum. Je trpělivý, motivující a nikdy nezkazí žádnou srandu.',
    shinesIn: ['trpělivosti', 'motivaci svěřenců', 'vedení týmu', 'zakladatel CSC']
  };

  // === ELITNÍ TRENÉŘI — role/úryvek se v UI nezobrazuje, rozbalují se jen detaily ===
  interface Trainer {
    name: string;
    img: string;
    role: string;         // necháváme v datech, ale nezobrazujeme
    bioFull: string;      // celý text po rozbalení
    highlights?: string[]; // „Vyniká v:“
  }

  const otherTrainers: Trainer[] = [
    {
      name: 'Lukáš Bráborec',
      img: placeholderImage,
      role: 'MMA začátečníci & příprava kondice',
      bioFull:
        'Specialista na práci s nováčky, kterým dokáže srozumitelně a dopodrobna vysvětlit každý detail. Trpělivě vede začátečníky k pevným základům MMA a zároveň jim vštěpuje respekt a disciplínu. Díky němu mají noví členové pevný start.',
      highlights: ['trpělivost', 'technické vysvětlení', 'výchova začátečníků']
    },
    {
      name: 'Lukáš Górecki',
      img: placeholderImage,
      role: 'BOX pokročilí',
      bioFull:
        'Tvrdý, ale férový trenér, který dokáže najít slabinu soupeře a připravit bojovníky jak na zápas, tak do života. Je známý svým smyslem pro humor a výborným přístupem, který kombinuje dril s nadhledem. Na svou výšku má ránu, kterou nikdo nechce schytat.',
      highlights: ['strategie', 'tvrdost', 'humor']
    },
    {
      name: 'Ondřej Pawliczek',
      img: placeholderImage,
      role: 'BOX začátečníci & bezkontaktní MMA',
      bioFull:
        'Mladý a energický trenér, který přináší do tréninků moderní přístup a nové metody. Odchovanec Lukáše Wojdyly, který se zaměřuje na techniku a detail. Neustále se snaží posouvat svěřence dopředu a motivovat je k růstu.',
      highlights: ['inovace', 'technika', 'motivace mladých']
    },
    {
      name: 'Lukáš Mayer',
      img: placeholderImage,
      role: 'Přípravka (4–10 let) & základy MMA',
      bioFull:
        'Empatický trenér s výjimečným přístupem k dětem i dospělým. Snaží se předat nejen techniku bojových sportů, ale také rozumové hodnoty a respekt. Je ohleduplný, lidský a dokáže vytvořit pozitivní atmosféru v každém tréninku.',
      highlights: ['práce s dětmi', 'lidský přístup', 'výchova hodnot']
    },
    {
      name: 'Daniel Hudeček',
      img: placeholderImage,
      role: 'K1 začátečníci & kondiční příprava',
      bioFull:
        'Přísný, ale zároveň přátelský trenér, který své svěřence dokáže dovést k jasně stanoveným cílům. Je motivační, férový a vždy dokáže vyvážit disciplínu se zábavou. Každý trénink pod jeho vedením má smysl a řád.',
      highlights: ['disciplína', 'vedení k cílům', 'přátelský přístup']
    },
    {
      name: 'Michal Sumelidis',
      img: placeholderImage,
      role: 'Grappling & mládež (přípravka + junioři)',
      bioFull:
        'Jeden z nejlepších grapplerů v České republice, který dokáže učit s lehkostí a humorem. Jeho tréninky jsou zábavné a efektivní i pro ty, kdo nemají přirozený talent. Michal je vtipný, uvolněný a známý svou láskou ke kebabu.',
      highlights: ['grappling', 'trpělivé učení', 'humor']
    },
    {
      name: 'Erik Breit',
      img: placeholderImage,
      role: 'Thaibox (Muay Thai)',
      bioFull:
        'Elitní thaiboxer, který pravidelně piluje své dovednosti přímo v Thajsku. Patří k nejlepším v České republice a své znalosti dokáže předat jasně a detailně. Je precizní, náročný na techniku a inspirující pro všechny své svěřence.',
      highlights: ['thaibox', 'technická preciznost', 'mezinárodní zkušenosti']
    },
    {
      name: 'Marek Barva',
      img: placeholderImage,
      role: 'Wrestling',
      bioFull:
        'Specialista na wrestling a hody, které učí s maximální pečlivostí a smyslem pro detail. Je skvělý trenér i člověk, jeho tréninky mají jasnou koncepci a směřují k výsledkům. Pokud chcete umět perfektní strhy, je to ten pravý.',
      highlights: ['wrestling', 'systematičnost', 'praktické vedení']
    },
    {
      name: 'Maxim Kuta',
      img: placeholderImage,
      role: 'Asistent trenéra & mládež',
      bioFull:
        'Nejmladší člen trenérského týmu, který už nyní dokáže pomoci a inspirovat mladé sportovce. Je otevřený, přátelský a rychle získává zkušenosti, které předává dál. Přináší do klubu svěží energii a pozitivní přístup.',
      highlights: ['práce s mládeží', 'přátelský přístup', 'energie']
    }
  ];

  // ==== STAV rozkliknutí karet trenérů ====
  let expanded = new Set<number>();
  function toggle(i: number) {
    if (expanded.has(i)) expanded.delete(i);
    else expanded.add(i);
    // reaktivita pro Set
    expanded = new Set(expanded);
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700&display=swap');

  .font-heading { font-family: 'Bebas Neue', sans-serif; }
  .font-body { font-family: 'Poppins', sans-serif; }
  .bg-dark { background-color: #0c0c0c; }
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

      <!-- PRAVÝ SLOUPEC – krátké intro + červené odrážky -->
      <div in:fade={{ duration: 1500, delay: 200 }}>
        <p class="text-red-600 font-bold uppercase tracking-widest mb-4">Hlavní trenér</p>
        <h2 class="text-5xl font-heading leading-tight mb-6">{mainTrainer.name}</h2>

        <!-- Krátké představení -->
        <p class="text-gray-300 text-lg leading-relaxed mb-6">
          {mainTrainer.intro}
        </p>

        <!-- Vyniká v: červené odrážky -->
        <div class="bg-[#131313] border border-gray-800 rounded-2xl p-6">
          <h3 class="text-white font-semibold mb-3">Vyniká v:</h3>
          <ul class="space-y-2.5 text-gray-200 text-base leading-relaxed">
            {#each mainTrainer.shinesIn as item}
              <li class="flex gap-3 items-start">
                <span class="mt-2 inline-flex h-2.5 w-2.5 bg-red-600 rounded-full"></span>
                <span>{item}</span>
              </li>
            {/each}
          </ul>
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
      {#each otherTrainers as coach, i}
        <div class="group bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-[1.02]">
          <!-- Obrázek – klikem rozbalí -->
          <button
            type="button"
            on:click={() => toggle(i)}
            class="relative h-96 w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-expanded={expanded.has(i)}
            aria-controls={`coach-panel-${i}`}
          >
            <img
              src={coach.img}
              alt={coach.name}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <span class="sr-only">Více o trenérovi {coach.name}</span>
          </button>

          <!-- Textová část -->
          <div class="p-8">
            <h4 class="text-2xl font-heading text-white text-center">{coach.name}</h4>

            <!-- Rozbalený obsah po kliku -->
            {#if expanded.has(i)}
              <div
                id={`coach-panel-${i}`}
                class="text-gray-300 leading-relaxed mt-4 space-y-3"
                in:fade={{ duration: 200 }}
                out:fade={{ duration: 150 }}
              >
                <p>{coach.bioFull}</p>
                {#if coach.highlights?.length}
                  <div>
                    <p class="font-semibold text-white mb-1">Vyniká v:</p>
                    <ul class="list-disc list-inside text-gray-300 space-y-1">
                      {#each coach.highlights as h}
                        <li>{h}</li>
                      {/each}
                    </ul>
                  </div>
                {/if}
              </div>
            {/if}

            <!-- Tlačítko rozbalit/sbalit -->
            <div class="mt-6 flex justify-center">
              <button
                type="button"
                on:click={() => toggle(i)}
                class="px-5 py-2 rounded-full border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 text-sm font-semibold"
                aria-expanded={expanded.has(i)}
                aria-controls={`coach-panel-${i}`}
              >
                {expanded.has(i) ? 'Méně' : 'Více'} o trenérovi
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
