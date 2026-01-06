<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  // Stav odeslání / chyby
  let success = false;
  let errorMsg = '';

  // Čas vytvoření formuláře pro time-trap
  const startTs = Date.now();

  async function handleSubmit(event: Event) {
    event.preventDefault();
    errorMsg = '';
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    if (data.get('website')) {
      errorMsg = 'Spam detekován.';
      return;
    }
    const ts = Number(data.get('ts'));
    if (Date.now() - ts < 3000) {
      errorMsg = 'Spam detekován.';
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/mvgbbejz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
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
  interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  const features: Feature[] = [
    {
      title: 'Profesionální trénink',
      description: 'Zkušení trenéři vedou tréninky MMA zaměřené na správnou techniku, kondici a postupný rozvoj každého člena.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16H9v-2h2v2zm0-4H9V6h2v8zm4 4h-2v-2h2v2zm0-4h-2V6h2v8z"/></svg>`
    },
    {
      title: 'Podpora komunity',
      description: 'Přidejte se ke skupině lidí, kteří se navzájem motivují, podporují a společně se posouvají vpřed.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
    },
    {
      title: 'Připravenost na soutěž',
      description: 'Ať už trénujete pro lepší kondici, sebeobranu nebo s cílem soutěžit, pomůžeme vám připravit se co nejlépe.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`
    }
  ];

  // === ABOUT ===
  const aboutList = [
    'Trenéři se zkušenostmi z praxe',
    'Tréninky pro všechny úrovně',
    'Příjemné prostředí',
    'Příprava na soutěže',
    'Skvělý kolektiv'
  ];

  // Strukturovaná data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "CSC MMA KLUB Karviná",
    "description": "Profesionální MMA klub v Karviné nabízející tréninky MMA, boxu, BJJ a kondiční přípravu.",
    "image": "https://www.csc-karvina.cz/images/mma-hero.jpg",
    "@id": "https://www.csc-karvina.cz",
    "url": "https://www.csc-karvina.cz",
    "telephone": "+420 734 538 844",
    "email": "csc.karvina@seznam.cz",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rudé armády 651/19A",
      "addressLocality": "Karviná",
      "postalCode": "733 01",
      "addressCountry": "CZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.854, 
      "longitude": 18.541
    },
    "sameAs": [
      "https://www.facebook.com/csckarvina",
      "https://www.instagram.com/csckarvina"
    ]
  };

  const schemaScript = `<script type="application/ld+json">${JSON.stringify(schemaData)}<\/script>`;
</script>

<svelte:head>
  <title>CSC MMA Karviná | Profesionální MMA, Box a BJJ tréninky</title>
  <meta name="description" content="CSC MMA Karviná nabízí prvotřídní tréninky bojových sportů pro všechny úrovně. MMA, Box, Grappling a Muay Thai v přátelském kolektivu. Začni trénovat dnes!" />
  <meta name="keywords" content="MMA Karviná, Box Karviná, BJJ Karviná, bojové sporty, sebeobrana, kondiční trénink" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.csc-karvina.cz/" />
  <meta property="og:title" content="CSC MMA Karviná | Profesionální bojové sporty" />
  <meta property="og:description" content="Přidej se k nejlepšímu MMA klubu v Karviné. Nabízíme tréninky pro děti i dospělé." />
  <meta property="og:image" content="https://www.csc-karvina.cz/images/mma-hero.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CSC MMA Karviná | Bojové sporty Karviná" />
  <meta name="twitter:image" content="https://www.csc-karvina.cz/images/mma-hero.jpg" />

  <link rel="canonical" href="https://www.csc-karvina.cz/" />
  {@html schemaScript}
</svelte:head>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700&display=swap');

  .font-heading { font-family: 'Bebas Neue', sans-serif; }
  .font-body { font-family: 'Poppins', sans-serif; }
  .bg-dark { background-color: #0c0c0c; }
</style>

<main class="bg-dark text-white font-body overflow-hidden">
  {#if mounted}
    <section class="relative bg-cover bg-center h-screen flex items-center" style="background-image:url('/images/mma-hero.jpg')">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-start" in:fade={{ duration: 2000 }}>
        <p class="text-lg md:text-xl text-red-600 font-bold mb-4 uppercase tracking-widest" in:fly={{ y: 20, duration: 1000, delay: 500 }}>
          CSC MMA KLUB
        </p>
        <h1 class="text-4xl xs:text-5xl md:text-8xl font-heading leading-none" in:fly={{ y: 20, duration: 1000, delay: 800 }}>
          PRVNÍ TRÉNINK?<br /> <span class="text-red-600">BEZ STRESU.</span>
        </h1>
        <p class="mt-8 text-base md:text-lg text-gray-300 max-w-lg" in:fly={{ y: 20, duration: 1000, delay: 1100 }}>
          Připoj se k nám a staň se součástí rodiny. Nabízíme profesionální trénink pro všechny úrovně, skvělé prostředí a přátelský kolektiv.
        </p>
        <div class="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto" in:fly={{ y: 20, duration: 1000, delay: 1400 }}>
          <a href="#join" class="bg-red-600 hover:bg-red-700 transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full shadow-lg text-center">
            Připoj se
          </a>
          <a href="#about" class="border-2 border-white hover:bg-white hover:text-black transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full text-center">
            Zjistit více
          </a>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-20 md:py-32 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {#each features as f, i}
          <div
            class="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600"
            in:fade={{ duration: 1500, delay: 300 + i * 400 }}
          >
            <div class="text-red-600 mb-6">{@html f.icon}</div>
            <h3 class="text-3xl font-heading mb-2">{f.title}</h3>
            <p class="text-gray-400 leading-relaxed">{f.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section id="about" class="container mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl">
      <div class="relative order-2 md:order-1">
        <div class="absolute inset-0 bg-red-600 rounded-3xl -rotate-6 transform -z-10"></div>
        <img src="/images/mma-gym-2.jpg" alt="Moderně vybavená tělocvična CSC MMA Karviná" class="rounded-3xl shadow-2xl relative transform rotate-3" />
      </div>
      <div class="order-1 md:order-2">
        <p class="text-red-600 font-bold uppercase tracking-widest mb-4">O nás</p>
        <h2 class="text-4xl md:text-5xl font-heading mb-6 leading-tight">
          PŘEKONÁVEJ SVOJE <span class="text-red-600">LIMITY.</span>
        </h2>
        <p class="text-gray-300 text-lg leading-relaxed mb-8">
          CSC MMA klub vznikl v roce 2012 jako místo, kde se lidé mohou společně věnovat bojovým sportům. Nabízíme MMA, box, grappling, thaibox a wrestling.
        </p>
        <ul class="space-y-4 mb-10">
          {#each aboutList as item}
            <li class="flex items-center text-lg text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              {item}
            </li>
          {/each}
        </ul>
        <a href="#join" class="inline-block border-2 border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 transition-colors duration-500 px-8 py-3 uppercase font-bold text-sm tracking-wide rounded-full w-full sm:w-auto text-center">
          Začít trénovat
        </a>
      </div>
    </section>

    <section id="join" class="container mx-auto px-4 md:px-6 py-20 md:py-32 max-w-7xl">
      <div class="bg-[#1a1a1a] px-5 py-12 md:p-12 lg:p-20 rounded-3xl shadow-2xl border border-gray-800 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div class="space-y-8 md:space-y-10">
          <div class="text-center lg:text-left">
            <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Připoj se</p>
            <h2 class="text-3xl md:text-5xl font-heading leading-tight">
              ZAČNI SVOU CESTU <span class="text-red-600">DNES.</span>
            </h2>
          </div>
          <p class="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
            Máš otázky nebo chceš naplánovat návštěvu? Napiš nám a my se ti ozveme.
          </p>
          <div class="space-y-6 text-gray-200 max-w-md mx-auto lg:mx-0">
            <div class="flex items-center lg:items-start gap-4">
              <div class="bg-red-600/10 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              </div>
              <div>
                <strong class="font-semibold text-lg block">Adresa</strong>
                <p class="text-gray-400">Rudé armády 651/19A, Karviná 733 01</p>
              </div>
            </div>
            <div class="flex items-center lg:items-start gap-4">
              <div class="bg-red-600/10 p-3 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.068 15.068 0 006.59 6.59l2.21-2.21c.27-.27.67-.36.98-.24a10.012 10.012 0 014.28 1.15c.32.1.4.52.1.84l-1.89 1.89c-.52.52-1.28.61-1.87.21-3.69-2.43-6.9-5.64-9.33-9.33-.4-.59-.3-1.35.21-1.87l1.89-1.89c.32-.32.74-.24.84.1a10.012 10.012 0 011.15 4.28c.12.31.03.71-.24.98l-2.21 2.21z"/></svg>
              </div>
              <div>
                <strong class="font-semibold text-lg block">Telefon</strong>
                <p class="text-gray-400">+420 734 538 844</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <form on:submit={handleSubmit} class="flex flex-col gap-6 bg-white/5 p-6 md:p-8 rounded-3xl backdrop-blur-sm border border-white/10 sm:bg-transparent sm:p-0">
            <input name="website" type="text" tabindex="-1" autocomplete="off" class="absolute left-[-9999px]" />
            <input name="ts" type="hidden" value={startTs} />
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="jmeno" type="text" placeholder="Jméno *" required class="bg-dark border-2 border-gray-700 px-5 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500 w-full text-base" />
              <input name="prijmeni" type="text" placeholder="Příjmení *" required class="bg-dark border-2 border-gray-700 px-5 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500 w-full text-base" />
            </div>
            <input name="email" type="email" placeholder="Email *" required class="bg-dark border-2 border-gray-700 px-5 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500 w-full text-base" />
            <textarea name="message" rows="4" placeholder="Zpráva..." required class="bg-dark border-2 border-gray-700 px-5 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500 w-full resize-none text-base"></textarea>
            {#if success}
              <div class="bg-green-500/20 border border-green-500/50 p-4 rounded-xl text-center"><p class="text-green-400 text-sm font-semibold">✅ Zpráva odeslána!</p></div>
            {/if}
            {#if errorMsg}
              <div class="bg-red-500/20 border border-red-500/50 p-4 rounded-xl text-center"><p class="text-red-500 text-sm font-semibold">❌ {errorMsg}</p></div>
            {/if}
            <div class="flex items-start gap-3">
              <input id="souhlas" name="souhlas" type="checkbox" required class="accent-red-600 h-5 w-5 mt-0.5" />
              <label for="souhlas" class="text-xs sm:text-sm text-gray-400 leading-snug">Souhlasím se zpracováním osobních údajů <span class="text-red-600">*</span></label>
            </div>
            <button type="submit" class="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-5 font-bold uppercase transition duration-300 shadow-lg text-base tracking-wide w-full lg:w-max mx-auto lg:mx-0">Odeslat zprávu</button>
          </form>
        </div>
      </div>
    </section>
  {/if}
</main>