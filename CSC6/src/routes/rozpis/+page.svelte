<script lang="ts">
  let days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  let active = 0;

  const schedule = [
    { time: '06:00 - 07:30', class: 'Strength & Conditioning', instructor: 'Mike Thomas', level: 'All Levels', room: 'Fitness Area' },
    { time: '08:00 - 09:30', class: 'Boxing Fundamentals', instructor: 'Sarah Martinez', level: 'Beginner', room: 'Boxing Ring' },
    { time: '10:00 - 11:30', class: 'Brazilian Jiu-Jitsu', instructor: 'Carlos Silva', level: 'Intermediate', room: 'Grappling Area' },
    { time: '12:00 - 13:00', class: 'Lunch Break Open Mat', instructor: 'Self-Directed', level: 'All Levels', room: 'All Areas' },
    { time: '16:00 - 17:30', class: 'Kids MMA (Ages 8–12)', instructor: 'Lisa Johnson', level: 'Youth', room: 'Training Room 2' },
    { time: '18:00 - 19:30', class: 'MMA Fundamentals', instructor: 'Alex Rodriguez', level: 'Beginner', room: 'Octagon' },
    { time: '20:00 - 21:30', class: 'Advanced MMA Sparring', instructor: 'James Wilson', level: 'Advanced', room: 'Octagon' }
  ];

  function selectDay(index: number) {
    active = index;
    // TODO: filter schedule by day
  }
</script>

<main class="pt-24 bg-black text-white space-y-16">
  <!-- HERO / SCHEDULE -->
  <section class="relative bg-cover bg-center h-[600px]" style="background-image:url('/images/schedule-hero.jpg')">
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl text-center">
      <h1 class="text-5xl font-bold">
        CLASS <span class="text-red-600">SCHEDULE</span>
      </h1>
      <p class="mt-4 text-lg">
        Find the perfect training sessions to fit your schedule and goals.
      </p>
      <div class="mt-6 flex justify-center gap-4">
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">JOIN NOW</button>
        <button class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold">FREE TRIAL</button>
      </div>
    </div>
  </section>

  <!-- DAYS TABS -->
  <section class="container mx-auto px-6 max-w-6xl">
    <div class="flex space-x-2 justify-center mb-6">
      {#each days as day, i}
        <button
          class="px-4 py-2 uppercase text-sm tracking-wide border-b-2 transition"
          class:border-red-600={i === active}
          class:text-red-600={i === active}
          class:text-gray-400={i !== active}
          on:click={() => selectDay(i)}
        >{day}</button>
      {/each}
    </div>

    <!-- SCHEDULE TABLE -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="text-gray-400 uppercase text-sm">
            <th class="px-4 py-2">Time</th>
            <th class="px-4 py-2">Class</th>
            <th class="px-4 py-2">Instructor</th>
            <th class="px-4 py-2">Level</th>
            <th class="px-4 py-2">Room</th>
          </tr>
        </thead>
        <tbody>
          {#each schedule as item}
            <tr class="border-t border-gray-700 hover:bg-gray-800">
              <td class="px-4 py-3 text-red-600 font-medium">{item.time}</td>
              <td class="px-4 py-3">{item.class}</td>
              <td class="px-4 py-3">{item.instructor}</td>
              <td class="px-4 py-3">{item.level}</td>
              <td class="px-4 py-3">{item.room}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </section>

  <!-- OUR CLASSES -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">OUR <span class="text-red-600">CLASSES</span></h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- MMA TRAINING -->
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div class="inline-flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 mr-2" viewBox="0 0 24 24" fill="currentColor"><!-- icon --></svg>
          <h4 class="text-xl font-semibold">MMA TRAINING</h4>
        </div>
        <p class="text-gray-300 text-sm mb-4">Comprehensive mixed martial arts training combining striking, grappling, and ground techniques. Learn from experienced fighters and develop a well-rounded skill set.</p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
      <!-- BOXING -->
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div class="inline-flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 mr-2" viewBox="0 0 24 24" fill="currentColor"><!-- icon --></svg>
          <h4 class="text-xl font-semibold">BOXING</h4>
        </div>
        <p class="text-gray-300 text-sm mb-4">Master the sweet science with our professional boxing coaches. Focus on footwork, head movement, combinations, and defensive techniques in our state-of-the-art boxing ring.</p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
      <!-- BRAZILIAN JIU-JITSU -->
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <div class="inline-flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600 mr-2" viewBox="0 0 24 24" fill="currentColor"><!-- icon --></svg>
          <h4 class="text-xl font-semibold">BRAZILIAN JIU-JITSU</h4>
        </div>
        <p class="text-gray-300 text-sm mb-4">Learn the art of ground fighting with our BJJ program. Focus on submissions, positional control, and effective use of leverage against larger opponents.</p>
        <button class="text-red-600 font-semibold uppercase text-sm">All Levels</button>
      </div>
    </div>
  </section>

  <!-- upcoming events -->
  <section class="bg-black py-16">
    <h3 class="text-3xl font-bold text-center mb-12">UPCOMING <span class="text-red-600">EVENTS</span></h3>
    <div class="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="group relative rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <img src="/images/events/event1.jpg" alt="BJJ Seminar" class="w-full h-48 object-cover" />
        <div class="absolute bottom-0 left-0 bg-black/70 p-4 w-full">
          <p class="text-red-600 text-sm uppercase">Jul 28 • 10:00 AM - 2:00 PM</p>
          <h4 class="text-white font-semibold">BJJ Seminar with World Champion</h4>
        </div>
      </div>
      <div class="group relative rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <img src="/images/events/event2.jpg" alt="In-House Competition" class="w-full h-48 object-cover" />
        <div class="absolute bottom-0 left-0 bg-black/70 p-4 w-full">
          <p class="text-red-600 text-sm uppercase">Aug 15 • 6:00 PM - 10:00 PM</p>
          <h4 class="text-white font-semibold">CSC In-House Competition</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- membership options -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h3 class="text-3xl font-bold text-center mb-12">MEMBERSHIP <span class="text-red-600">OPTIONS</span></h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Basic</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">$99<span class="text-sm">/month</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>Access to all basic classes</li>
          <li>Gym access during business hours</li>
          <li>1 specialty class per week</li>
        </ul>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Select Plan</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Premium</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">$149<span class="text-sm">/month</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>Unlimited gym access</li>
          <li>All specialty classes included</li>
          <li>1 personal training session/month</li>
        </ul>
        <span class="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm mb-4">Popular</span>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Select Plan</button>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <h4 class="text-xl font-semibold mb-4">Elite</h4>
        <p class="text-gray-400 text-3xl font-bold mb-4">$249<span class="text-sm">/month</span></p>
        <ul class="text-gray-300 mb-6 space-y-2">
          <li>Unlimited access to all classes</li>
          <li>24/7 gym access</li>
          <li>4 personal training sessions/month</li>
        </ul>
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">Select Plan</button>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="bg-black py-16">
    <h3 class="text-3xl font-bold text-center mb-12">FREQUENTLY ASKED <span class="text-red-600">QUESTIONS</span></h3>
    <div class="container mx-auto px-6 max-w-6xl space-y-4">
      <div class="group border border-gray-700 rounded-lg p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="w-full flex justify-between items-center text-white font-semibold">
          Do I need previous experience to join?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
      <div class="group border border-gray-700 rounded-lg p-4 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <button class="w-full flex justify-between items-center text-white font-semibold">
          What should I bring to my first class?
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
    </div>
  </section>

</main>

<style>
  :global(html) { scroll-padding-top: 6rem; }
</style>
