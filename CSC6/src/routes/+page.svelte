<!-- src/routes/+page.svelte -->
<script lang="ts">
  // Stav odeslání / chyby
  let success = false;
  let errorMsg = '';

  // Čas vytvoření formuláře pro time‑trap
  const startTs = Date.now();

  // AJAX‑ový submit na Formspree s honeypot & time‑trap
  async function handleSubmit(event: Event) {
    event.preventDefault();
    errorMsg = '';
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    // Honeypot: pokud pole 'website' není prázdné → spam
    if (data.get('website')) {
      errorMsg = 'Spam detekován.';
      return;
    }
    // Time‑trap: odeslání dřív než za 3 s → pravděpodobně bot
    const ts = Number(data.get('ts'));
    if (Date.now() - ts < 3000) {
      errorMsg = 'Spam detekován.';
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/manbbnjp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (res.ok) {
        success = true;
        form.reset();
      } else {
        errorMsg = json.error || 'Nastala chyba, zkuste to prosím znovu.';
      }
    } catch {
      errorMsg = 'Síťová chyba, zkuste to znovu.';
    }
  }

  // === FEATURES ===
  interface Feature { title: string; description: string; icon: string; }
  const features: Feature[] = [
    {
      title: 'Profesionální trénink',
      description:
        'Naši certifikovaní trenéři poskytují světovou úroveň MMA výuky s moderními technikami a špičkovým vybavením.',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <rect x="2" y="10" width="4" height="4"/>
          <rect x="18" y="10" width="4" height="4"/>
          <rect x="8" y="11" width="8" height="2"/>
        </svg>`
    },
    {
      title: 'Podpora komunity',
      description:
        'Staňte se součástí podpůrné komunity bojovníků, kteří se vzájemně motivují k dosažení plného potenciálu.',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                   C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>`
    },
    {
      title: 'Připravenost na soutěž',
      description:
        'Ať už trénujete pro kondici nebo pro soutěž, připravíme vás na úspěch v oktagonu.',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M20 12a2 2 0 0 0-2-2h-3V8a2 2 0 0 0-2-2h-4
                   a2 2 0 0 0-2 2v2H6a2 2 0 0 0-2 2v4h4v2a2 2 0 0 0 2 2
                   h4a2 2 0 0 0 2-2v-2h3a2 2 0 0 0 2-2v-4z"/>
        </svg>`
    }
  ];

  // === ABOUT ===
  const aboutList = [
    'Odborní trenéři',
    'Všechny úrovně',
    'Moderní vybavení',
    'Příprava na soutěže'
  ];

  // === SCHEDULE ===
  const days = ['Čas', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'];
  const schedule: string[][] = [
    ['06:00 – 07:30', 'Box', 'Kondice', 'Box', 'Kondice', 'Box', 'Open Mat'],
    ['09:00 – 10:30', 'BJJ začátečníci', 'Muay Thai', 'BJJ začátečníci', 'Muay Thai', 'BJJ začátečníci', 'Dětské MMA'],
    ['17:00 – 18:30', 'Wrestling', 'BJJ pokročilí', 'Wrestling', 'BJJ pokročilí', 'Wrestling', '–'],
    ['19:00 – 21:00', 'MMA sparring', 'Muay Thai', 'MMA sparring', 'Muay Thai', 'Příprava na zápas', '–']
  ];

  // === TRAINERS ===
  interface Social { href: string; icon: string; label: string }
  interface Trainer {
    name: string;
    role: string;
    image: string;
    description: string;
    socials: Social[];
  }
  const trainers: Trainer[] = [
    {
      name: 'Mike Thompson',
      role: 'Hlavní trenér / černý pás BJJ',
      image: '/images/trainers/mike.jpg',
      description:
        'Bývalý bojovník UFC s více než 15 lety zkušeností v Brazílsko‑jiu‑jitsu a MMA.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',  label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    },
    {
      name: 'Sarah Johnson',
      role: 'Boxerská trenérka',
      image: '/images/trainers/sarah.jpg',
      description:
        'Profesionální boxerka s několika národními tituly a 8 lety trenérské praxe.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',  label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    },
    {
      name: 'Alex Rodriguez',
      role: 'Specialista Muay Thai',
      image: '/images/trainers/alex.jpg',
      description:
        'Trénoval v Thajsku 5 let a absolvoval přes 30 profesionálních zápasů v Muay Thai.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',  label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    }
  ];
</script>

<main class="bg-black text-white space-y-32">

  <!-- HERO -->
  <section class="relative bg-cover bg-center h-[600px]" style="background-image:url('/images/mma-hero.jpg')">
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        TRÉNUJ TVRDĚ. <span class="text-red-600">BOJUJ JEŠTĚ TVRDĚJI.</span>
      </h1>
      <p class="mt-4 text-lg">
        Přidej se do CSC MMA klubu a trénuj s nejlepšími bojovníky a trenéry. Nabízíme komplexní programy pro všechny úrovně.
      </p>
      <div class="mt-6 flex flex-wrap gap-4">
        <a href="/rozpis" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">ZOBRAZIT ROZPIS</a>
        <a href="/kontakt" class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold">PŘIPOJ SE</a>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
    {#each features as f}
      <div class="bg-black p-6 rounded-lg border border-gray-700 hover:scale-105 transform transition">
        <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
          {@html f.icon}
        </div>
        <h3 class="text-xl font-semibold">{f.title}</h3>
        <p class="mt-2 text-gray-300">{f.description}</p>
      </div>
    {/each}
  </section>

  <!-- ABOUT -->
  <section id="about" class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
    <img src="/images/mma-gym-2.jpg" alt="Interiér tělocvičny" class="rounded-lg shadow-lg" />
    <div>
      <h2 class="text-3xl font-bold mb-4">O <span class="text-red-600">CSC MMA KLUBU</span></h2>
      <p class="text-gray-300 mb-6">
        CSC MMA klub byl založen v roce 2012 a rychle se stal jedním z předních center bojových umění v regionu.
        Naše špičkově vybavená tělocvična nabízí komplexní výcvik v BJJ, Muay Thai, wrestlingu a boxu.
      </p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {#each aboutList as item}
          <li class="flex items-center text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        {/each}
      </ul>
      <a href="/o-nas" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">ZJISTIT VÍCE</a>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section id="schedule" class="container mx-auto px-6 max-w-6xl space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold">ROZPIS <span class="text-red-600">TRÉNINKŮ</span></h2>
      <p class="text-gray-300">Prohlédněte si náš týdenní rozpis a vyberte si tréninky podle svých potřeb a dostupností.</p>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-left border-collapse">
        <thead>
          <tr>
            {#each days as d, i}
              <th class="px-4 py-2" class:bg-red-600={i>0} class:text-white={i>0}>{d}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each schedule as row, ri}
            <tr class:bg-gray-800={ri%2===0}>
              {#each row as cell}
                <td class="px-4 py-2 border-t border-gray-700">{cell}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <a href="#join" class="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded font-semibold">OBJEDNEJTE SI ZKUŠEBNÍ TRÉNINK</a>
    </div>
  </section>

  <!-- OUR TRAINERS -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">NAŠI <span class="text-red-600 underline decoration-red-600 decoration-4">TRENÉŘI</span></h2>
      <p class="text-gray-300">Seznamte se s naším týmem profesionálních trenérů s bohatými zkušenostmi ve všech disciplínách.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each trainers as t}
        <div class="bg-black p-6 rounded-lg border border-gray-700 hover:scale-105 transform transition">
          <img src={t.image} alt={t.name} class="w-full h-64 object-cover rounded-md mb-4" />
          <h3 class="text-xl font-semibold text-white">{t.name}</h3>
          <p class="text-red-600 mb-4">{t.role}</p>
          <p class="text-gray-300">{t.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- CONTACT / JOIN -->
  <section id="join" class="container mx-auto px-6 py-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
    <!-- Levá strana: text + info -->
    <div class="space-y-8">
      <h2 class="text-3xl font-bold">KONTAKTUJTE <span class="text-red-600">NÁS</span></h2>
      <p class="text-gray-300">Máte dotazy nebo chcete naplánovat návštěvu? Napište nám níže a my se ozveme co nejdříve.</p>
      <div class="space-y-4 text-gray-200 text-sm">
        <div><strong>Naše adresa</strong><br />Ulice Bojovníků 123, Combat City, ČR</div>
        <div><strong>Telefon</strong><br />+420 123 456 789</div>
        <div><strong>E‑mail</strong><br />info@cscmmaclub.cz</div>
      </div>
      <div class="flex space-x-4 mt-4 text-gray-400">
        <a href="https://facebook.com" aria-label="Facebook"><!-- fb SVG --></a>
        <a href="https://instagram.com" aria-label="Instagram"><!-- ig SVG --></a>
        <a href="https://twitter.com" aria-label="Twitter"><!-- tw SVG --></a>
        <a href="https://youtube.com" aria-label="YouTube"><!-- yt SVG --></a>
      </div>
    </div>

    <!-- Pravá strana: formulář -->
    <div class="group flex-1 bg-black p-8 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
      <h3 class="text-2xl font-bold mb-4 uppercase tracking-tight">Napište <span class="text-red-600">nám</span></h3>
      {#if success}
        <p class="text-green-400 mb-4">Zpráva odeslána!</p>
      {/if}
      {#if errorMsg}
        <p class="text-red-500 mb-4">{errorMsg}</p>
      {/if}
      <form on:submit={handleSubmit} class="flex flex-col gap-4">
        <input name="website" type="text" tabindex="-1" autocomplete="off" class="absolute left-[-9999px]" />
        <input name="ts" type="hidden" value={startTs} />
        <div class="flex gap-4">
          <input name="jmeno" type="text" placeholder="Jméno *" required class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600" />
          <input name="prijmeni" type="text" placeholder="Příjmení *" required class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600" />
        </div>
        <div class="flex gap-4">
          <input name="email" type="email" placeholder="Email *" required class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600" />
          <input name="telefon" type="tel" placeholder="Telefon" class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600" />
        </div>
        <input name="predmet" type="text" placeholder="Předmět" class="bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600" />
        <textarea name="message" rows="5" placeholder="Zpráva..." required class="bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:ring-2 focus:ring-red-600"></textarea>
        <div class="flex items-center gap-2">
          <input id="souhlas" name="souhlas" type="checkbox" required class="accent-red-600" />
          <label for="souhlas" class="text-sm text-gray-400">Souhlasím se zpracováním osobních údajů *</label>
        </div>
        <button type="submit" class="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 py-2 font-semibold uppercase transition mt-2">
          Odeslat zprávu
        </button>
      </form>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
