<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  let mobileOpen = false;

  const links = [
    { href: '/',         label: 'DOMŮ'               },
    { href: '/o-nas',    label: 'O NÁS'             },
    { href: '/rozpis',   label: 'ROZPIS TRÉNINKŮ'   },
    { href: '/treneri',  label: 'TRENÉŘI'           },
    { href: '/galerie',  label: 'GALERIE'           },
    { href: '/kontakt',  label: 'KONTAKT'           }
  ];
</script>

<header class="fixed inset-x-0 top-0 bg-black z-50 border-b-[0.5px] border-gray-400/30">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-2">
      <img src="/images/logoCSC2.1.svg" alt="Moje logo" class="w-14 h-14 object-contain" />
      <h1 class="text-white font-bold text-2xl">
        COMBAT SPORTS <span class="text-red-600">CLUB</span>
      </h1>
    </a>

    <!-- Desktop Nav -->
    <nav class="hidden lg:flex items-center space-x-6">
      {#each links as { href, label }}
        <a
          href={href}
          class="uppercase font-medium transition-colors { $page.url.pathname === href
            ? 'text-red-600'
            : 'text-white hover:text-red-600' }"
        >
          {label}
        </a>
      {/each}
      <a
        href="#join"
        class="ml-4 bg-red-600 hover:bg-red-700 text-white uppercase font-semibold px-4 py-2 rounded transition"
      >
        JOIN NOW
      </a>
    </nav>

    <!-- Mobile Toggle -->
    <button
      class="lg:hidden text-white focus:outline-none"
      aria-label="Toggle menu"
      on:click={() => (mobileOpen = !mobileOpen)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={mobileOpen
            ? 'M6 18L18 6M6 6l12 12'
            : 'M4 6h16M4 12h16M4 18h16'}
        />
      </svg>
    </button>
  </div>

  {#if mobileOpen}
    <nav class="lg:hidden bg-black border-t border-gray-400/30">
      <div class="container mx-auto px-6 py-4 space-y-3">
        {#each links as { href, label }}
          <a
            href={href}
            class="block uppercase font-medium text-white hover:text-red-600"
            on:click={() => (mobileOpen = false)}
          >
            {label}
          </a>
        {/each}
        <a
          href="#join"
          class="block uppercase font-semibold bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-2 text-center"
          on:click={() => (mobileOpen = false)}
        >
          JOIN NOW
        </a>
      </div>
    </nav>
  {/if}
</header>

<main class="pt-24 bg-black text-white">
  <slot />
</main>

<footer class="bg-black text-gray-400 border-t border-gray-400/30 pt-16 pb-8">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

    <!-- Brand & Description -->
    <div>
      <div class="flex items-center space-x-2">
        <img src="/images/logoCSC2.1.svg" alt="Moje logo" class="w-14 h-14 object-contain" />
        <span class="text-white font-bold text-lg">CSC KARVINÁ</span>
      </div>
      <p class="mt-4 text-gray-300 text-sm">
        Naším posláním je poskytovat špičkové tréninky v bojových uměních pro všechny úrovně.
      </p>
      <div class="mt-4 flex space-x-4">
        <a href="https://facebook.com" aria-label="Facebook" class="hover:text-white">
          <!-- Facebook SVG -->
        </a>
        <a href="https://instagram.com" aria-label="Instagram" class="hover:text-white">
          <!-- Instagram SVG -->
        </a>
        <a href="https://twitter.com" aria-label="Twitter" class="hover:text-white">
          <!-- Twitter SVG -->
        </a>
        <a href="https://youtube.com" aria-label="YouTube" class="hover:text-white">
          <!-- YouTube SVG -->
        </a>
      </div>
    </div>

    <!-- Address -->
    <div class="text-sm space-y-4">
      <h3 class="text-white font-semibold mb-2">ADRESA</h3>
      <div>
        Rudé armády 651/19A<br />
        733 01 Karviná 1<br />
        Česká republika
      </div>
    </div>

    <!-- Phone & Email -->
    <div class="text-sm space-y-4">
      <h3 class="text-white font-semibold mb-2">KONTAKT</h3>
      <div>
        <strong>Telefon:</strong><br />
        +420 123 456 789
      </div>
      <div>
        <strong>E‑mail:</strong><br />
        csc.karvina@seznam.cz
      </div>
    </div>

    <!-- Small Map -->
<div>
  <h3 class="text-white font-semibold mb-2">KDE NÁS NAJDETE</h3>
  <iframe
    class="w-full h-32 rounded-lg border border-gray-700"
    src="https://www.google.com/maps?q=Rud%C3%A9+arm%C3%A1dy+651%2F19A%2C+733+01+Karvin%C3%A1+1&output=embed"
    title="Mapa umístění CSC MMA Club"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    allowfullscreen
  ></iframe>
</div>

  </div>

  <div class="border-t border-gray-700 mt-8 pt-4">
    <p class="text-center text-xs">&copy; {new Date().getFullYear()} CSC MMA Club. Všechna práva vyhrazena.</p>
  </div>
</footer>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
