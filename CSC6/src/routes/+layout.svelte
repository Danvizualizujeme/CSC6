<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';

  let mobileOpen = false;

  const links = [
    { href: '/', label: 'DOMŮ' },
    { href: '/o-nas', label: 'O NÁS' },
    { href: '/rozpis', label: 'ROZPIS TRÉNINKŮ' },
    { href: '/treneri', label: 'TRENÉŘI' },
    { href: '/galerie', label: 'GALERIE' },
    { href: '/kontakt', label: 'KONTAKT' }
  ];

  const socialIcons = {
    facebook: `<svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.87v-6.99H8.07v-2.88h2.43V9.75c0-2.4 1.43-3.72 3.62-3.72 1.05 0 2.15.18 2.15.18v2.37h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.88H13.5v6.99A10 10 0 0022 12z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/><circle cx="17.75" cy="6.25" r="1"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M23.953 4.569a10 10 0 01-2.825.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.06a4.923 4.923 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.994-14.646a10.025 10.025 0 002.411-2.535z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M21.73 4.49a2.58 2.58 0 00-1.82-1.82C18.23 2 12 2 12 2S5.77 2 4.09 2.67A2.58 2.58 0 002.27 4.49C2 6.17 2 12 2 12s0 5.83.27 7.51a2.58 2.58 0 001.82 1.82C5.77 22 12 22 12 22s6.23 0 7.91-.67a2.58 2.58 0 001.82-1.82C22 17.83 22 12 22 12s0-5.83-.27-7.51zM10 16V8l6 4-6 4z"/></svg>`
  };
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

<header class="fixed inset-x-0 top-0 bg-dark z-50">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="flex items-center space-x-2">
      <img src="/images/logoCSC2-1.svg" alt="Moje logo" class="w-14 h-14 object-contain" />
      <h1 class="text-white font-heading text-2xl tracking-wide">
        COMBAT SPORTS <span class="text-red-600">CLUB</span>
      </h1>
    </a>

    <nav class="hidden lg:flex items-center space-x-8">
      {#each links as { href, label }}
        <a
          href={href}
          class={`uppercase font-body text-sm font-semibold transition-colors duration-300 ${$page.url.pathname === href ? 'text-red-600' : 'text-gray-300 hover:text-red-600'}`}
        >
          {label}
        </a>
      {/each}
      <a
        href="/#join"
        class="bg-red-600 hover:bg-red-700 text-white uppercase font-bold text-sm tracking-wide px-8 py-3 rounded-full transition duration-300"
      >
        Připoj se
      </a>
    </nav>

    <button
      class="lg:hidden text-white focus:outline-none"
      aria-label="Toggle menu"
      on:click={() => (mobileOpen = !mobileOpen)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        />
      </svg>
    </button>
  </div>

  {#if mobileOpen}
    <div
      class="absolute lg:hidden top-full w-full bg-dark"
    >
      <nav class="container mx-auto px-6 py-6 border-t border-gray-800">
        <ul class="space-y-4">
          {#each links as { href, label }}
            <li>
              <a
                href={href}
                class="block uppercase font-bold text-lg text-white hover:text-red-600 transition-colors duration-300"
                on:click={() => (mobileOpen = false)}
              >
                {label}
              </a>
            </li>
          {/each}
        </ul>
        <a
          href="/#join"
          class="block uppercase font-bold bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full mt-8 text-center transition duration-300"
          on:click={() => (mobileOpen = false)}
        >
          Připoj se
        </a>
      </nav>
    </div>
  {/if}
</header>

<main class="pt-24 bg-dark text-white font-body">
  <slot />
</main>

<footer class="bg-dark text-gray-400 border-t border-gray-800 pt-16 pb-8">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
    <div class="space-y-6">
      <div class="flex items-center space-x-2">
        <img src="/images/logoCSC2-1.svg" alt="Moje logo" class="w-16 h-16 object-contain" />
        <span class="text-white font-heading text-xl">CSC MMA CLUB</span>
      </div>
      <p class="text-gray-400 leading-relaxed">
        Naším posláním je poskytovat špičkové tréninky v bojových uměních pro všechny úrovně, v prostředí plném respektu a disciplíny.
      </p>
      <div class="flex space-x-4 text-gray-500">
        <a href="https://facebook.com" aria-label="Facebook" class="hover:text-[#4267B2] transition-colors duration-300">
          {@html socialIcons.facebook}
        </a>
        <a href="https://instagram.com" aria-label="Instagram" class="hover:text-[#E1306C] transition-colors duration-300">
          {@html socialIcons.instagram}
        </a>
        <a href="https://twitter.com" aria-label="Twitter" class="hover:text-[#1DA1F2] transition-colors duration-300">
          {@html socialIcons.twitter}
        </a>
        <a href="https://youtube.com" aria-label="YouTube" class="hover:text-[#FF0000] transition-colors duration-300">
          {@html socialIcons.youtube}
        </a>
      </div>
    </div>

    <div class="space-y-6">
      <h3 class="text-white font-heading text-lg mb-4">KONTAKT</h3>
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
        <p class="text-gray-400">Rudé armády 651/19A<br />733 01 Karviná 1</p>
      </div>
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        <p class="text-gray-400">csc.karvina@seznam.cz</p>
      </div>
      <div class="flex items-start gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.068 15.068 0 006.59 6.59l2.21-2.21c.27-.27.67-.36.98-.24a10.012 10.012 0 014.28 1.15c.32.1.4.52.1.84l-1.89 1.89c-.52.52-1.28.61-1.87.21-3.69-2.43-6.9-5.64-9.33-9.33-.4-.59-.3-1.35.21-1.87l1.89-1.89c.32-.32.74-.24.84.1a10.012 10.012 0 011.15 4.28c.12.31.03.71-.24.98l-2.21 2.21z"/></svg>
        <p class="text-gray-400">+420 123 456 789</p>
      </div>
    </div>
    
    <div class="space-y-4">
      <h3 class="text-white font-heading text-lg mb-2">NAVIGACE</h3>
      <ul class="space-y-2">
        {#each links as { href, label }}
          <li>
            <a href={href} class="text-gray-400 hover:text-red-600 transition-colors duration-300">{label}</a>
          </li>
        {/each}
      </ul>
    </div>

    <div class="space-y-4">
      <h3 class="text-white font-heading text-lg mb-2">MAPA</h3>
      <iframe
        class="w-full h-40 rounded-2xl border border-gray-700 shadow-lg"
        src="https://www.google.com/maps?q=Rud%C3%A9+arm%C3%A1dy+651%2F19A%2C+733+01+Karvin%C3%A1+1&output=embed"
        title="Mapa umístění CSC MMA Club"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="border-t border-gray-800 mt-16 pt-8">
    <p class="text-center text-sm">© {new Date().getFullYear()} CSC MMA Club. Všechna práva vyhrazena.</p>
  </div>
</footer>