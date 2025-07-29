<script lang="ts">
  // žádná logika prozatím není potřeba
</script>

<main class="bg-black text-white space-y-16">

  <!-- HERO / ABOUT -->
  <section
    class="relative -mt-24 bg-cover bg-center h-[600px]"
    style="background-image:url('/images/about-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
         <span class="text-red-600">TRENÉŘI</span>
      </h1>
      <p class="mt-4 text-lg">
        Naši mistři sdílí svoje know‑how – připravte se na nový level tréninku.
      </p>
      <div class="mt-6 flex flex-wrap gap-4">
        <a href="#story" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">NÁŠ PŘÍBĚH</a>
        <a href="#join" class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold">PŘIPOJ SE</a>
      </div>
    </div>
  </section>

  <!-- LEAD COACH -->
  <section class="container mx-auto px-6 py-16 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <img src="/images/trainers/alex-chen.jpg" alt="Alex Chen" class="w-full rounded-lg shadow-lg object-cover" />
    </div>
    <div>
      <h2 class="text-4xl font-bold text-red-600 mb-2">ALEX CHEN</h2>
      <p class="text-gray-400 uppercase tracking-wide font-semibold mb-4">Head Coach & Founder</p>
      <div class="w-16 h-1 bg-red-600 mb-6"></div>
      <p class="text-gray-300 mb-4">
        With over 15 years of professional fighting experience, including a successful UFC career, Alex Chen brings unparalleled knowledge and expertise to CSC MMA Club. After retiring from competition with an impressive 22-3 record, Alex dedicated himself to coaching the next generation of fighters.
      </p>
      <p class="text-gray-300 mb-6">
        Alex’s coaching philosophy combines technical precision with strategic fight IQ, helping fighters develop a complete skill set. His ability to identify and develop talent has led to numerous championship victories for CSC fighters.
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
        <!-- Icon stats -->
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2h16V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6z"/><path fill-rule="evenodd" d="M18 9H2v5a3 3 0 003 3h10a3 3 0 003-3V9z" clip-rule="evenodd"/></svg>
          <span>UFC Veteran<br/>2010–2017</span>
        </div>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M6 3v2H5a2 2 0 00-2 2v1h14V7a2 2 0 00-2-2h-1V3H6z"/><path fill-rule="evenodd" d="M18 8H2v5a3 3 0 003 3h10a3 3 0 003-3V8z" clip-rule="evenodd"/></svg>
          <span>Black Belt BJJ<br/>Under Rickson Gracie</span>
        </div>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 012 0v2h3a1 1 0 010 2H8a1 1 0 010-2h3V2z"/><path fill-rule="evenodd" d="M4 8h12v5a4 4 0 01-4 4H8a4 4 0 01-4-4V8z" clip-rule="evenodd"/></svg>
          <span>Sports Science Degree<br/>Stanford University</span>
        </div>
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a1 1 0 011-1h8a1 1 0 011 1v2H5V4z"/><path fill-rule="evenodd" d="M3 8h14v5a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" clip-rule="evenodd"/></svg>
          <span>Coach of the Year<br/>2018, 2021</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ELITE COACHING STAFF -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-8">ELITE <span class="text-red-600">COACHING STAFF</span></h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each [
        { name: 'Sarah Thompson', title: 'Muay Thai Coach', img: '/images/trainers/sarah-thompson.jpg', desc: 'Former Muay Thai world champion with 10+ years...', social: { twitter: 'https://twitter.com/sarah', instagram: 'https://instagram.com/sarah', facebook: 'https://facebook.com/sarah' } },
        { name: 'Carlos Mendez', title: 'BJJ Coach', img: '/images/trainers/carlos-mendez.jpg', desc: '3rd degree black belt...', social: { twitter: 'https://twitter.com/carlos', instagram: 'https://instagram.com/carlos', facebook: 'https://facebook.com/carlos' } },
        { name: 'James Wilson', title: 'Boxing Coach', img: '/images/trainers/james-wilson.jpg', desc: 'Former Olympic boxer...', social: { twitter: 'https://twitter.com/james', instagram: 'https://instagram.com/james', facebook: 'https://facebook.com/james' } },
        { name: 'Mike Johnson', title: 'Wrestling Coach', img: '/images/trainers/mike-johnson.jpg', desc: 'NCAA Division I...', social: { twitter: 'https://twitter.com/mike', instagram: 'https://instagram.com/mike', facebook: 'https://facebook.com/mike' } },
        { name: 'David Parker', title: 'Strength & Conditioning', img: '/images/trainers/david-parker.jpg', desc: 'Certified strength coach...', social: { twitter: 'https://twitter.com/david', instagram: 'https://instagram.com/david', facebook: 'https://facebook.com/david' } },
        { name: 'Lisa Martinez', title: 'Nutrition & Recovery', img: '/images/trainers/lisa-martinez.jpg', desc: 'Sports nutritionist...', social: { twitter: 'https://twitter.com/lisa', instagram: 'https://instagram.com/lisa', facebook: 'https://facebook.com/lisa' } }
      ] as coach}
        <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105">
          <img src={coach.img} alt={coach.name} class="w-full h-64 object-cover rounded-lg mb-4" />
          <h4 class="text-xl font-semibold mb-1">{coach.name}</h4>
          <p class="text-red-600 font-medium mb-3">{coach.title}</p>
          <p class="text-gray-300 text-sm mb-4">{coach.desc}</p>
          <div class="flex gap-4 text-gray-400">
            <a href={coach.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">…</a>
            <a href={coach.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">…</a>
            <a href={coach.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">…</a>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
