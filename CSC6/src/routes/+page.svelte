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
        <a href="/rozpis" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
          ZOBRAZIT ROZPIS
        </a>
        <a href="/kontakt" class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold">
          PŘIPOJ SE
        </a>
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
      
      <a href="/o-nas" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">ZJISTIT VÍCE</a>
    </div>
  </section>

  <!-- OUR CLASSES -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">
      OUR <span class="text-red-600">CLASSES</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">MMA TRAINING</h4>
        <p class="text-gray-300 text-sm mb-4">
          Comprehensive mixed martial arts training combining striking, grappling, and ground techniques.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">BOXING</h4>
        <p class="text-gray-300 text-sm mb-4">
          Master the sweet science with our professional boxing coaches. Focus on footwork and defensive techniques.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-2">BJJ</h4>
        <p class="text-gray-300 text-sm mb-4">
          Learn ground fighting with our BJJ program. Focus on submissions and positional control.
        </p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
    </div>
  </section>

  <!-- OUR TRAINERS -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">
        NAŠI <span class="text-red-600 underline decoration-red-600 decoration-4">TRENÉŘI</span>
      </h2>
      <p class="text-gray-300">
        Seznamte se s naším týmem profesionálních trenérů s bohatými zkušenostmi ve všech disciplínách.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each trainers as t}
        <div class="overflow-hidden rounded-xl transform transition hover:scale-105 border border-gray-500/50">
          <img
            src={t.image}
            alt={t.name}
            class="w-full h-80 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white">{t.name}</h3>
            <p class="text-red-600 mt-1 mb-4">{t.role}</p>
            <p class="text-gray-300 mb-4">{t.description}</p>
            <div class="flex space-x-4 text-gray-400">
              <!-- Twitter -->
              <a href={t.socials[0].href} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/>
                </svg>
              </a>
              <!-- Instagram -->
              <a href={t.socials[1].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/>
                  <path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/>
                  <circle cx="17.75" cy="6.25" r="1"/>
                </svg>
              </a>
              <!-- Facebook -->
              <a href={t.socials[2].href} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.658 9.164 8.438 9.878v-6.99H7.898V12h2.54v-1.745c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.465h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.99C18.342 21.164 22 17.007 22 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CONTACT / JOIN -->
  <section id="join" class="container mx-auto px-6 py-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
    <!-- Levá strana: text + info -->
    <div class="space-y-8">
      <h2 class="text-3xl font-bold">KONTAKTUJTE <span class="text-red-600">NÁS</span></h2>
      <p class="text-gray-300">
        Máte dotazy nebo chcete naplánovat návštěvu? Napište nám níže a my se ozveme co nejdříve.
      </p>
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
