<!-- src/routes/o-nas/+page.svelte -->
<script lang="ts">
  // žádná logika prozatím není potřeba
</script>

<main class="bg-black text-white pt-24 space-y-16">

  <!-- HERO / ABOUT -->
  <section
    class="relative bg-cover bg-center h-[600px]"
    style="background-image:url('/images/about-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        ABOUT <span class="text-red-600">CSC MMA</span>
      </h1>
      <p class="mt-4 text-lg">
        Building champions through discipline, dedication, and world-class training since 2005.
      </p>
      <div class="mt-6 flex flex-wrap gap-4">
        <a
          href="#story"
          class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold"
          >OUR STORY</a
        >
        <a
          href="#join"
          class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold"
          >JOIN US</a
        >
      </div>
    </div>
  </section>

  <!-- OUR STORY -->
  <section
    id="story"
    class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl"
  >
    <div>
      <h2 class="text-3xl font-bold mb-4">
        OUR <span class="text-red-600">STORY</span>
      </h2>
      <p class="text-gray-200 mb-4">
        Founded in 2005 by former UFC fighter Alex Rodriguez, CSC MMA Club began as a small
        training facility dedicated to developing local talent. What started as a passion project
        quickly evolved into one of the most respected MMA training centers in the region.
      </p>
      <p class="text-gray-200 mb-4">
        Our mission has always been to provide world-class training while fostering a supportive
        community environment. We believe that martial arts is not just about fighting—it's about
        discipline, respect, and continuous self‑improvement.
      </p>
      <p class="text-gray-200">
        Today, CSC MMA Club is home to professional fighters, amateur competitors, and fitness
        enthusiasts alike. Our diverse community shares a common goal: to push beyond limitations
        and achieve greatness, both in and out of the cage.
      </p>
    </div>
    <div>
      <img
        src="/images/about-gym.jpg"
        alt="Gym interior"
        class="w-full rounded-lg shadow-lg"
      />
    </div>
  </section>

  <!-- OUR PHILOSOPHY -->
  <section class="bg-black py-16">
    <div class="container mx-auto px-6 max-w-6xl">
      <h3 class="text-3xl font-bold text-center mb-12">
        OUR <span class="text-red-600">PHILOSOPHY</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Discipline -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 3v12M6 15H4a2 2 0 01-2-2V7a2 2 0 012-2h2m12 0h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M6 21h12"
              />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">DISCIPLINE</h4>
          <p class="text-gray-300 text-sm">
            We believe that true growth comes from consistent practice and unwavering commitment.
            Our training programs are designed to build mental fortitude alongside physical strength.
          </p>
        </div>

        <!-- Respect -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">RESPECT</h4>
          <p class="text-gray-300 text-sm">
            At CSC, we foster a culture of mutual respect. Whether you’re a beginner or a
            professional, everyone is treated with dignity and given the space to grow at their
            own pace.
          </p>
        </div>

        <!-- Excellence -->
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <div class="text-red-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 11v5m0 0l-2-2m2 2l2-2m6-5a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h4 class="text-xl font-semibold mb-2">EXCELLENCE</h4>
          <p class="text-gray-300 text-sm">
            We push our members to strive for excellence in everything they do. Our world‑class
            facilities and expert coaches provide the perfect environment for achieving your full
            potential.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR FACILITIES -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">
      OUR <span class="text-red-600">FACILITIES</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Professional Octagon -->
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/octagon.jpg"
          alt="Professional Octagon"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">PROFESSIONAL OCTAGON</h4>
          <p class="text-gray-300 text-sm">
            Train in the same environment as the pros with our regulation-sized octagon.
          </p>
        </div>
      </div>

      <!-- Strength & Conditioning -->
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/strength.jpg"
          alt="Strength & Conditioning"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">
            STRENGTH &amp; CONDITIONING
          </h4>
          <p class="text-gray-300 text-sm">
            State-of-the-art equipment to build the strength needed for combat sports.
          </p>
        </div>
      </div>

      <!-- Boxing Ring -->
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/boxing-ring.jpg"
          alt="Boxing Ring"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">BOXING RING</h4>
          <p class="text-gray-300 text-sm">
            Perfect your striking in our professional boxing ring with expert coaching.
          </p>
        </div>
      </div>

      <!-- Grappling Area -->
      <div class="relative overflow-hidden rounded-lg group transform transition hover:scale-105">
        <img
          src="/images/grappling-area.jpg"
          alt="Grappling Area"
          class="w-full h-64 object-cover"
        />
        <div
          class="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition"
        >
          <h4 class="text-xl font-semibold text-white mb-1">GRAPPLING AREA</h4>
          <p class="text-gray-300 text-sm">
            Spacious mat space for Brazilian Jiu‑Jitsu, wrestling, and grappling practice.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
