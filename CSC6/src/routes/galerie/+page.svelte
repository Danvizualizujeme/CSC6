<script lang="ts">
  import { crossfade } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { flip } from 'svelte/animate';
  import { fade, scale } from 'svelte/transition';

  interface Item { src: string; category: string; caption?: string; }

  const categories = ['All', 'Sparring', 'Events', 'Training'];
  let activeCategory = 'All';
  let visibleCount = 9;

  const allItems: Item[] = [
    { src: '/images/sparring-1.jpg', category: 'Sparring', caption: 'Sparring Match 1' },
    { src: '/images/sparring-2.jpg', category: 'Sparring', caption: 'Sparring Match 2' },
    { src: '/images/sparring-3.jpg', category: 'Sparring', caption: 'Sparring Match 3' },
    { src: '/images/sparring-4.jpg', category: 'Sparring', caption: 'Sparring Match 4' },
    { src: '/images/sparring-5.jpg', category: 'Sparring', caption: 'Sparring Match 5' },
    { src: '/images/sparring-6.jpg', category: 'Sparring', caption: 'Sparring Match 6' },
    { src: '/images/event-1.jpg', category: 'Events', caption: 'MMA Event 1' },
    { src: '/images/event-2.jpg', category: 'Events', caption: 'MMA Event 2' },
    { src: '/images/event-3.jpg', category: 'Events', caption: 'MMA Event 3' },
    { src: '/images/event-4.jpg', category: 'Events', caption: 'MMA Event 4' },
    { src: '/images/event-5.jpg', category: 'Events', caption: 'MMA Event 5' },
    { src: '/images/event-6.jpg', category: 'Events', caption: 'MMA Event 6' },
    { src: '/images/training-1.jpg', category: 'Training', caption: 'Training Session 1' },
    { src: '/images/training-2.jpg', category: 'Training', caption: 'Training Session 2' },
    { src: '/images/training-3.jpg', category: 'Training', caption: 'Training Session 3' },
    { src: '/images/training-4.jpg', category: 'Training', caption: 'Training Session 4' },
    { src: '/images/training-5.jpg', category: 'Training', caption: 'Training Session 5' },
    { src: '/images/training-6.jpg', category: 'Training', caption: 'Training Session 6' }
  ];

  $: filteredItems = allItems.filter(item => activeCategory === 'All' || item.category === activeCategory);
  $: visibleItems = filteredItems.slice(0, visibleCount);

  let selectedIndex = -1;
  const openLightbox = (i: number) => selectedIndex = i;
  const closeLightbox = () => selectedIndex = -1;
  const prev = () => selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
  const next = () => selectedIndex = (selectedIndex + 1) % filteredItems.length;
  const loadMore = () => visibleCount += 6;

  // crossfade setup
  const [send, receive] = crossfade({
    duration: d => Math.min(600, d * 0.8),
    fallback(node) {
      return {
        duration: 300,
        easing: cubicOut,
        css: t => `opacity: ${t}; transform: scale(${t});`
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

<main class="bg-black text-white space-y-16 pt-8">
  <!-- FILTER BAR -->
  <nav id="gallery" class="sticky top-16 bg-black z-10">
    <ul class="flex justify-center space-x-6 py-4">
      {#each categories as cat}
        <li>
          <button
            type="button"
            class="text-white font-medium hover:text-red-500 transition-colors pb-1"
            class:selected={activeCategory === cat}
            on:click={() => changeCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
          {#if activeCategory === cat}
            <div class="h-0.5 bg-red-600 mt-1"></div>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>

  <!-- GALLERY GRID WITH CROSSFADE + FLIP -->
  <section class="px-4 md:px-12 py-8">
    {#key activeCategory}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each visibleItems as item, idx (item.src)}
          <button
            type="button"
            class="overflow-hidden rounded-lg cursor-pointer transform shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
            on:click={() => openLightbox(idx)}
            aria-label={`Open image: ${item.caption}`}
            in:receive={{ key: item.src }}
            out:send={{ key: item.src }}
            animate:flip
          >
            <img src={item.src} alt={item.caption} class="w-full h-48 object-cover" />
          </button>
        {/each}
      </div>
    {/key}

    {#if visibleCount < filteredItems.length}
      <div class="flex justify-center mt-8">
        <button
          type="button"
          on:click={loadMore}
          class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Načíst další
        </button>
      </div>
    {/if}
  </section>

  <!-- LIGHTBOX MODAL -->
  {#if selectedIndex > -1}
    <div
      class="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center"
      role="dialog" aria-modal="true"
      transition:fade={{ duration: 200 }}
    >
      <div
        class="relative bg-black p-4 rounded-lg shadow-xl"
        transition:scale={{ duration: 200 }}
      >
        <button
          type="button"
          class="absolute -top-3 -right-3 bg-black rounded-full p-1 hover:bg-red-600"
          aria-label="Close gallery"
          on:click={closeLightbox}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={filteredItems[selectedIndex].src}
          alt={filteredItems[selectedIndex].caption}
          class="max-h-[80vh] mx-auto rounded"
        />
        <p class="text-white text-center mt-4">{filteredItems[selectedIndex].caption}</p>

        <button
          type="button"
          on:click={prev}
          class="absolute left-2 top-1/2 transform -translate-y-1/2 p-2"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          on:click={next}
          class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</main>

<style>
  :global(html) { scroll-padding-top: 6rem; }
</style>
