<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  let mobileOpen = false;

  const links = [
    { href: '/',         label: 'DOMŮ'     },
    { href: '/o-nas',    label: 'O NÁS'    },
    { href: '/treneri',  label: 'TRENÉŘI' },
    { href: '/rozpis',   label: 'ROZPIS TRÉNINKŮ' },
    { href: '/galerie',  label: 'GALERIE' },
    { href: '/kontakt',  label: 'KONTAKT'  }
  ];

  const programLinks = [
    { href: '/mma-training',        label: 'MMA Training' },
    { href: '/brazilian-jiu-jitsu', label: 'Brazilian Jiu‑Jitsu' },
    { href: '/boxing',              label: 'Boxing'       },
    { href: '/muay-thai',           label: 'Muay Thai'    },
    { href: '/wrestling',           label: 'Wrestling'    },
    { href: '/kids-program',        label: 'Kids Program' }
  ];
</script>

<header class="fixed inset-x-0 top-0 bg-black z-50 border-b-[0.5px] border-red-600">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center space-x-2">
      <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
        CSC
      </div>
      <h1 class="text-white font-bold text-2xl">
        CSC <span class="text-red-600">MMA CLUB</span>
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
    <nav class="lg:hidden bg-black border-t border-red-600">
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

<footer class="bg-black text-gray-400 border-t-2 border-red-600 pt-16 pb-8">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Brand & Socials -->
    <div>
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
          CSC
        </div>
        <span class="text-white font-bold text-lg">CSC MMA CLUB</span>
      </div>
      <p class="mt-4 text-gray-300 text-sm">
        The premier mixed martial arts training facility dedicated to developing fighters of all levels.
      </p>
      <div class="mt-4 flex space-x-4">
        <a href="https://facebook.com" aria-label="Facebook" class="hover:text-white">
          <!-- Facebook SVG icon -->
        </a>
        <a href="https://instagram.com" aria-label="Instagram" class="hover:text-white">
          <!-- Instagram SVG icon -->
        </a>
        <a href="https://twitter.com" aria-label="Twitter" class="hover:text-white">
          <!-- Twitter SVG icon -->
        </a>
        <a href="https://youtube.com" aria-label="YouTube" class="hover:text-white">
          <!-- YouTube SVG icon -->
        </a>
      </div>
    </div>

    <!-- Quick Links -->
    <div>
      <h3 class="text-white font-semibold mb-4">QUICK LINKS</h3>
      <ul class="space-y-2 text-sm">
        {#each links as { href, label }}
          <li><a href={href} class="hover:text-white">{label}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Programs -->
    <div>
      <h3 class="text-white font-semibold mb-4">PROGRAMS</h3>
      <ul class="space-y-2 text-sm">
        {#each programLinks as { href, label }}
          <li><a href={href} class="hover:text-white">{label}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Newsletter -->
    <div>
      <h3 class="text-white font-semibold mb-4">NEWSLETTER</h3>
      <p class="text-gray-300 text-sm mb-4">
        Subscribe to our newsletter to receive updates on classes, events, and promotions.
      </p>
      <form class="flex">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 bg-gray-800 text-white px-3 py-2 rounded-l placeholder-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          class="bg-red-600 hover:bg-red-700 px-4 rounded-r flex items-center justify-center"
          aria-label="Subscribe"
        >
          <!-- Paper‑plane SVG icon -->
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-gray-700 mt-8 pt-4">
    <p class="text-center text-xs">&copy; {new Date().getFullYear()} CSC MMA Club. All rights reserved.</p>
  </div>
</footer>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
