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
  interface Social {
    href: string;
    icon: string;
    label: string;
  }
  interface Trainer {
    name: string;
    role: string;
    image: string;
    description: string;
    socials: Social[];
  }
  const trainers: Trainer[] = [
    {
      name: 'Lukáš Wojdyla',
      role: 'Hlavní trenér',
      image: '/images/trainers/treneri.jpg',
      description: 'Bývalý bojovník UFC s více než 15 lety zkušeností v Brazílsko‑jiu‑jitsu a MMA.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.658 9.164 8.438 9.878v-6.99H7.898V12h2.54v-1.745c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.465h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.99C18.342 21.164 22 17.007 22 12z"/></svg>` },
        { href: 'https://instagram.com', label: 'Instagram', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/><circle cx="17.75" cy="6.25" r="1"/></svg>` },
        { href: 'https://twitter.com', label: 'Twitter', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/></svg>` },
      ]
    },
    {
      name: 'Lukáš Mayer',
      role: 'Dětské tréninky & Junior MMA',
      image: '/images/trainers/treneri.jpg',
      description: 'Profesionální boxerka s několika národními tituly.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.658 9.164 8.438 9.878v-6.99H7.898V12h2.54v-1.745c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.465h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.99C18.342 21.164 22 17.007 22 12z"/></svg>` },
        { href: 'https://instagram.com', label: 'Instagram', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/><circle cx="17.75" cy="6.25" r="1"/></svg>` },
        { href: 'https://twitter.com', label: 'Twitter', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/></svg>` },
      ]
    },
    {
      name: 'Lukáš Braborec',
      role: 'Box pokročilý',
      image: '/images/trainers/treneri.jpg',
      description: 'Trénoval v Thajsku 5 let a absolvoval přes 30 profesionálních zápasů.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.007 3.658 9.164 8.438 9.878v-6.99H7.898V12h2.54v-1.745c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.194 2.238.194v2.465h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.99C18.342 21.164 22 17.007 22 12z"/></svg>` },
        { href: 'https://instagram.com', label: 'Instagram', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/><circle cx="17.75" cy="6.25" r="1"/></svg>` },
        { href: 'https://twitter.com', label: 'Twitter', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/></svg>` },
      ]
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
  {#if mounted}
    <section class="relative bg-cover bg-center h-screen flex items-center" style="background-image:url('/images/mma-hero.jpg')">
      <div class="absolute inset-0 bg-black/80"></div>
      <div class="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col items-start" in:fade={{ duration: 2000 }}>
        <p class="text-xl text-red-600 font-bold mb-4 uppercase tracking-widest" in:fly={{ y: 20, duration: 1000, delay: 500 }}>
          CSC MMA KLUB
        </p>
        <h1 class="text-6xl md:text-8xl font-heading leading-none" in:fly={{ y: 20, duration: 1000, delay: 800 }}>
          TRÉNUJ TVRDĚ.<br />BOJUJ <span class="text-red-600">JEŠTĚ TVRDĚJI.</span>
        </h1>
        <p class="mt-8 text-lg text-gray-300 max-w-lg" in:fly={{ y: 20, duration: 1000, delay: 1100 }}>
          Připoj se k nám a staň se součástí elitní komunity. Nabízíme profesionální trénink pro všechny úrovně.
        </p>
        <div class="mt-12 flex flex-wrap gap-6" in:fly={{ y: 20, duration: 1000, delay: 1400 }}>
          <a href="#join" class="bg-red-600 hover:bg-red-700 transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full shadow-lg">
            Připoj se
          </a>
          <a href="#about" class="border-2 border-white hover:bg-white hover:text-black transition-colors duration-500 px-10 py-4 text-white uppercase font-bold text-sm tracking-wide rounded-full">
            Zjistit více
          </a>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-32 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        {#each features as f, i}
          <div
            class="bg-[#1a1a1a] p-10 rounded-3xl border border-gray-800 transition-transform duration-700 hover:scale-[1.02] hover:border-red-600 hover:shadow-2xl hover:shadow-red-600/10"
            in:fade={{ duration: 1500, delay: 300 + i * 400 }}
          >
            <div class="text-red-600 mb-6 transition-colors duration-500 group-hover:text-white">
              {@html f.icon}
            </div>
            <h3 class="text-3xl font-heading mb-2">{f.title}</h3>
            <p class="text-gray-400 leading-relaxed">{f.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section id="about" class="container mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center max-w-7xl">
      <div class="relative">
        <div class="absolute inset-0 bg-red-600 rounded-3xl -rotate-6 transform -z-10 transition-transform duration-700 hover:rotate-3"></div>
        <img src="/images/mma-gym-2.jpg" alt="Interiér tělocvičny" class="rounded-3xl shadow-2xl relative transform rotate-3 transition-transform duration-700 hover:rotate-0" />
      </div>
      <div>
        <p class="text-red-600 font-bold uppercase tracking-widest mb-4">O nás</p>
        <h2 class="text-5xl font-heading mb-6 leading-tight">
          PŘEKONÁVEJ SVOJE <span class="text-red-600">LIMITY.</span>
        </h2>
        <p class="text-gray-300 text-lg leading-relaxed mb-8">
         CSC MMA klub vznikl v roce 2012 jako místo, kde se lidé mohou společně věnovat bojovým sportům a postupně se zlepšovat. Nabízíme tréninky MMA, BJJ, Muay Thai, wrestligu i boxu v přátelském prostředí. Naši trenéři nejsou z velkých světových scén, ale mají zkušenosti, které rádi předávají dál.
        </p>
        <ul class="space-y-4 mb-10">
          {#each aboutList as item}
            <li class="flex items-center text-lg text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              {item}
            </li>
          {/each}
        </ul>
        <a href="#join" class="border-2 border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 transition-colors duration-500 px-8 py-3 uppercase font-bold text-sm tracking-wide rounded-full">
          Začít trénovat
        </a>
      </div>
    </section>

    

    <section id="join" class="container mx-auto px-6 py-32 max-w-7xl">
      <div class="bg-[#1a1a1a] p-12 lg:p-20 rounded-3xl shadow-2xl border border-gray-800 grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-10">
          <p class="text-red-600 font-bold uppercase tracking-widest mb-2">Připoj se</p>
          <h2 class="text-5xl font-heading leading-tight">
            ZAČNI SVOU CESTU <span class="text-red-600">DNES.</span>
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed">
            Máš otázky nebo chceš naplánovat návštěvu? Napiš nám a my se ti ozveme, abychom ti pomohli udělat první krok.
          </p>
          <div class="space-y-6 text-gray-200">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
              <div>
                <strong class="font-semibold text-lg">Adresa</strong>
                <p class="text-gray-400">Rudé armády 651/19A, Karviná 733 01</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.068 15.068 0 006.59 6.59l2.21-2.21c.27-.27.67-.36.98-.24a10.012 10.012 0 014.28 1.15c.32.1.4.52.1.84l-1.89 1.89c-.52.52-1.28.61-1.87.21-3.69-2.43-6.9-5.64-9.33-9.33-.4-.59-.3-1.35.21-1.87l1.89-1.89c.32-.32.74-.24.84.1a10.012 10.012 0 011.15 4.28c.12.31.03.71-.24.98l-2.21 2.21z"/></svg>
              <div>
                <strong class="font-semibold text-lg">Telefon</strong>
                <p class="text-gray-400">+420 123 456 789</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <div>
                <strong class="font-semibold text-lg">E-mail</strong>
                <p class="text-gray-400">csc.karvina@seznam.cz</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form on:submit={handleSubmit} class="flex flex-col gap-6">
            <input name="website" type="text" tabindex="-1" autocomplete="off" class="absolute left-[-9999px]" />
            <input name="ts" type="hidden" value={startTs} />
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="jmeno"
                type="text"
                placeholder="Jméno *"
                required
                class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
              />
              <input
                name="prijmeni"
                type="text"
                placeholder="Příjmení *"
                required
                class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
              />
            </div>
            
            <input
              name="email"
              type="email"
              placeholder="Email *"
              required
              class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Zpráva..."
              required
              class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
            ></textarea>
            
            {#if success}
              <p class="text-green-400 mb-4">✅ Zpráva odeslána! Ozveme se vám co nejdříve.</p>
            {/if}
            {#if errorMsg}
              <p class="text-red-500 mb-4">❌ {errorMsg}</p>
            {/if}

            <div class="flex items-center gap-4">
              <input id="souhlas" name="souhlas" type="checkbox" required class="accent-red-600 h-5 w-5" />
              <label for="souhlas" class="text-sm text-gray-400">Souhlasím se zpracováním osobních údajů <span class="text-red-600">*</span></label>
            </div>
            
            <button type="submit" class="bg-red-600 hover:bg-red-700 text-white rounded-full px-12 py-5 font-bold uppercase transition duration-300 shadow-lg hover:shadow-xl mt-4 text-lg tracking-wide">
              Odeslat zprávu
            </button>
          </form>
        </div>
      </div>
    </section>
  {/if}
</main>