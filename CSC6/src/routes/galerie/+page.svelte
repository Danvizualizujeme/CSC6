<script lang="ts">
  interface Item { src: string; category: string; caption?: string; }

  // Categories
  const categories = ['All', 'Sparring', 'Events', 'Training'];
  let activeCategory = 'All';

  // Gallery items (6 per category)
  const allItems: Item[] = [
    // Sparring
    { src: '/images/sparring-1.jpg', category: 'Sparring', caption: 'Sparring Match 1' },
    { src: '/images/sparring-2.jpg', category: 'Sparring', caption: 'Sparring Match 2' },
    { src: '/images/sparring-3.jpg', category: 'Sparring', caption: 'Sparring Match 3' },
    { src: '/images/sparring-4.jpg', category: 'Sparring', caption: 'Sparring Match 4' },
    { src: '/images/sparring-5.jpg', category: 'Sparring', caption: 'Sparring Match 5' },
    { src: '/images/sparring-6.jpg', category: 'Sparring', caption: 'Sparring Match 6' },

    // Events
    { src: '/images/event-1.jpg', category: 'Events', caption: 'MMA Event 1' },
    { src: '/images/event-2.jpg', category: 'Events', caption: 'MMA Event 2' },
    { src: '/images/event-3.jpg', category: 'Events', caption: 'MMA Event 3' },
    { src: '/images/event-4.jpg', category: 'Events', caption: 'MMA Event 4' },
    { src: '/images/event-5.jpg', category: 'Events', caption: 'MMA Event 5' },
    { src: '/images/event-6.jpg', category: 'Events', caption: 'MMA Event 6' },

    // Training
    { src: '/images/training-1.jpg', category: 'Training', caption: 'Training Session 1' },
    { src: '/images/training-2.jpg', category: 'Training', caption: 'Training Session 2' },
    { src: '/images/training-3.jpg', category: 'Training', caption: 'Training Session 3' },
    { src: '/images/training-4.jpg', category: 'Training', caption: 'Training Session 4' },
    { src: '/images/training-5.jpg', category: 'Training', caption: 'Training Session 5' },
    { src: '/images/training-6.jpg', category: 'Training', caption: 'Training Session 6' },


  ];

  // Reactive filtering
  let visibleCount = 9;
  $: filteredItems = allItems.filter(item =>
    activeCategory === 'All' || item.category === activeCategory
  );
  $: visibleItems = filteredItems.slice(0, visibleCount);

  // Lightbox state
  let selectedIndex = -1;
  const openLightbox = (i: number) => selectedIndex = i;
  const closeLightbox = () => selectedIndex = -1;
  const prev = () => selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
  const next = () => selectedIndex = (selectedIndex + 1) % filteredItems.length;
  const loadMore = () => visibleCount += 6;
</script>

<main class="bg-black text-white space-y-16">

  <!-- HERO / GALLERY -->
  <section
    class="relative -mt-24 bg-cover bg-center h-[600px]"
    style="background-image:url('/images/gallery-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        Galerie <span class="text-red-600">CSC MMA</span>
      </h1>
      <p class="mt-4 text-lg">
        Prohlédněte si naše nejnovější akce, zápasy a tréninky.
      </p>
    </div>
  </section>

  <!-- FILTER BAR -->
  <nav id="gallery" class="sticky top-16 bg-black z-10">
    <ul class="flex justify-center space-x-6 py-4">
      {#each categories as cat}
        <li>
          <button
            type="button"
            class="text-white font-medium hover:text-red-500 transition-colors pb-1"
            class:selected={activeCategory === cat}
            on:click={() => activeCategory = cat}
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

  <!-- GALLERY GRID -->
  <section class="px-4 md:px-12 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each visibleItems as item, idx}
        <button
          type="button"
          class="overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition shadow-lg p-0 border-none"
          on:click={() => openLightbox(idx)}
          aria-label={`Open image: ${item.caption}`}
        >
          <img src={item.src} alt={item.caption} class="w-full h-48 object-cover" />
        </button>
      {/each}
    </div>
    {#if visibleCount < filteredItems.length}
      <div class="flex justify-center mt-8">
        <button
          type="button"
          on:click={loadMore}
          class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Load More
        </button>
      </div>
    {/if}
  </section>

  <!-- LIGHTBOX MODAL -->
  {#if selectedIndex > -1}
    <div
      class="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        class="absolute inset-0"
        aria-label="Close gallery"
        on:click={closeLightbox}
        on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && closeLightbox()}
      ></button>

      <div class="relative max-w-3xl mx-4">
        <img
          src={filteredItems[selectedIndex].src}
          alt={filteredItems[selectedIndex].caption}
          class="max-h-[80vh] mx-auto rounded"
        />
        <p class="text-white text-center mt-4">{filteredItems[selectedIndex].caption}</p>
        <button
          type="button"
          on:click={prev}
          class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          on:click={next}
          class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  {/if}

</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
