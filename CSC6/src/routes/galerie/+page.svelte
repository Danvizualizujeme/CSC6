<script lang="ts">
  import { crossfade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import { fade, scale } from 'svelte/transition';
  import { onMount } from 'svelte';

  // Načítáme animace až po načtení stránky, aby nedocházelo k chybám
  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  interface Item {
    src: string;
    category: string;
    caption?: string; // ponecháme v datech, ale NIKDE nezobrazujeme
  }

  const categories = ['Vše', 'Sparring', 'Události', 'Trénink'];
  let activeCategory = 'Vše';
  let visibleCount = 9;

  const allItems: Item[] = [
    { src: '/images/sparring-1.jpg', category: 'Sparring', caption: 'Sparring Match 1' },
    { src: '/images/sparring-2.jpg', category: 'Sparring', caption: 'Sparring Match 2' },
    { src: '/images/sparring-3.jpg', category: 'Sparring', caption: 'Sparring Match 3' },
    { src: '/images/sparring-4.jpg', category: 'Sparring', caption: 'Sparring Match 4' },
    { src: '/images/sparring-5.jpg', category: 'Sparring', caption: 'Sparring Match 5' },
    { src: '/images/sparring-6.jpg', category: 'Sparring', caption: 'Sparring Match 6' },
    { src: '/images/event-1.jpg', category: 'Události', caption: 'MMA Událost 1' },
    { src: '/images/event-2.jpg', category: 'Události', caption: 'MMA Událost 2' },
    { src: '/images/event-3.jpg', category: 'Události', caption: 'MMA Událost 3' },
    { src: '/images/event-4.jpg', category: 'Události', caption: 'MMA Událost 4' },
    { src: '/images/event-5.jpg', category: 'Události', caption: 'MMA Událost 5' },
    { src: '/images/event-6.jpg', category: 'Události', caption: 'MMA Událost 6' },
    { src: '/images/training-1.jpg', category: 'Trénink', caption: 'Tréninková Sese 1' },
    { src: '/images/training-2.jpg', category: 'Trénink', caption: 'Tréninková Sese 2' },
    { src: '/images/training-3.jpg', category: 'Trénink', caption: 'Tréninková Sese 3' },
    { src: '/images/training-4.jpg', category: 'Trénink', caption: 'Tréninková Sese 4' },
    { src: '/images/training-5.jpg', category: 'Trénink', caption: 'Tréninková Sese 5' },
    { src: '/images/training-6.jpg', category: 'Trénink', caption: 'Tréninková Sese 6' }
  ];

  $: filteredItems = allItems.filter((item) => activeCategory === 'Vše' || item.category === activeCategory);
  $: visibleItems = filteredItems.slice(0, visibleCount);

  let selectedIndex = -1;
  const openLightbox = (i: number) => (selectedIndex = i);
  const closeLightbox = () => (selectedIndex = -1);
  const prev = () => (selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length);
  const next = () => (selectedIndex = (selectedIndex + 1) % filteredItems.length);
  const loadMore = () => (visibleCount += 9);

  // crossfade setup
  const [send, receive] = crossfade({
    duration: (d) => Math.min(600, d * 0.8),
    fallback(node) {
      return {
        duration: 300,
        easing: cubicOut,
        css: (t) => `opacity: ${t}; transform: scale(${t});`
      };
    }
  });

  // reset items on category change
  function changeCategory(cat: string) {
    activeCategory = cat;
    visibleCount = 9;
    selectedIndex = -1;
  }
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

  .selected {
    color: #ef4444; /* text-red-600 */
    position: relative;
  }

  .selected::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #ef4444; /* text-red-600 */
    position: absolute;
    bottom: -8px;
    left: 0;
    transform: scaleX(1);
    transition: transform 0.3s ease-in-out;
  }
</style>

<main class="bg-dark text-white font-body overflow-hidden">
  <header class="text-center py-24 bg-[#111] border-b border-gray-800">
    <div class="container mx-auto px-6 max-w-7xl">
      <h1 class="text-5xl font-heading leading-tight mb-2">
        NAŠE <span class="text-red-600">GALERIE</span>
      </h1>
      <p class="text-gray-400 text-lg">Prohlédněte si naši komunitu, trénink a události.</p>
    </div>
  </header>

  <nav class="sticky top-0 lg:top-16 bg-dark z-10 border-b border-gray-800">
    <ul class="container mx-auto px-6 py-4 flex flex-wrap justify-center gap-4 lg:gap-8">
      {#each categories as cat}
        <li>
          <button
            type="button"
            class="text-white font-semibold uppercase text-sm tracking-wide transition-colors duration-300 pb-2 border-b-2 border-transparent hover:border-red-600 hover:text-red-600"
            class:selected={activeCategory === cat}
            on:click={() => changeCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <section class="container mx-auto px-6 py-16 max-w-7xl">
    {#if mounted}
      {#key activeCategory}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each visibleItems as item, idx (item.src)}
            <button
              type="button"
              class="relative overflow-hidden rounded-3xl cursor-pointer transform shadow-xl transition-transform duration-500 ease-out group hover:scale-[1.02]"
              on:click={() => openLightbox(idx)}
              aria-label="Otevřít obrázek"
              in:receive={{ key: item.src }}
              out:send={{ key: item.src }}
              animate:flip={{ duration: 500 }}
            >
              <img
                src={item.src}
                alt={item.category}
                class="w-full h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <!-- Ponecháme jen tmavý overlay pro efekt, BEZ TEXTU -->
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true">
              </div>
            </button>
          {/each}
        </div>
      {/key}
    {/if}

    {#if visibleCount < filteredItems.length}
      <div class="flex justify-center mt-16">
        <button
          type="button"
          on:click={loadMore}
          class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-wide text-sm transition-colors duration-300 shadow-lg"
        >
          Načíst další
        </button>
      </div>
    {/if}
  </section>

  {#if selectedIndex > -1}
    <div
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      role="dialog" aria-modal="true"
      transition:fade={{ duration: 300 }}
    >
      <div
        class="relative max-w-5xl w-full"
        transition:scale={{ duration: 300, start: 0.9 }}
      >
        <button
          type="button"
          on:click={prev}
          class="absolute left-2 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-red-600 transition-colors duration-300 z-20"
          aria-label="Předchozí obrázek"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          on:click={next}
          class="absolute right-2 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 rounded-full hover:bg-red-600 transition-colors duration-300 z-20"
          aria-label="Další obrázek"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <img
          src={filteredItems[selectedIndex].src}
          alt={filteredItems[selectedIndex].category}
          class="max-h-[85vh] w-auto mx-auto rounded-xl shadow-2xl"
        />
        <!-- Odebrán textový popisek pod rozjetou fotkou -->

        <button
          type="button"
          class="absolute -top-10 right-0 p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300"
          aria-label="Zavřít galerii"
          on:click={closeLightbox}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</main>
