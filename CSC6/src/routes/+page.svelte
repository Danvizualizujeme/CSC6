<!-- src/routes/+page.svelte -->
<script lang="ts">
  // === FEATURES ===
  interface Feature { title: string; description: string; icon: string; }
  const features: Feature[] = [
    {
      title: 'Professional Training',
      description:
        'Our certified trainers provide world‑class MMA instruction using modern techniques and equipment.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm0 0v6m0 0l-2-2m2 2l2-2" />
            </svg>`
    },
    {
      title: 'Community Support',
      description:
        'Join a supportive community of fighters who push each other to reach their full potential.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-3-3h-2m-4 5h4m-8 0H5v-2a3 3 0 013-3h2m4 0a3 3 0 100-6 3 3 0 000 6z" />
            </svg>`
    },
    {
      title: 'Competition Ready',
      description:
        "Whether you're training for fitness or competition, we'll prepare you for success in the cage.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m0 0a9 9 0 11-9 9 9 9 0 019-9z" />
            </svg>`
    }
  ];

  // === ABOUT ===
  const aboutList = [
    'Expert Coaches',
    'All Skill Levels',
    'Modern Facilities',
    'Competition Training'
  ];

  // === SCHEDULE ===
  const days = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const schedule: string[][] = [
    ['06:00 – 07:30', 'Boxing', 'Conditioning', 'Boxing', 'Conditioning', 'Boxing', 'Open Mat'],
    ['09:00 – 10:30', 'BJJ Basics', 'Muay Thai', 'BJJ Basics', 'Muay Thai', 'BJJ Basics', 'Kids MMA'],
    ['17:00 – 18:30', 'Wrestling', 'BJJ Advanced', 'Wrestling', 'BJJ Advanced', 'Wrestling', '–'],
    ['19:00 – 21:00', 'MMA Sparring', 'Muay Thai', 'MMA Sparring', 'Muay Thai', 'Fight Prep', '–']
  ];

  // === TRAINERS ===
  interface Social { href: string; icon: string; label: string }
  interface Trainer {
    name: string;
    role: string;
    image: string;
    description: string;
    socials: Social[];
  }
  const trainers: Trainer[] = [
    {
      name: 'Mike Thompson',
      role: 'Head Coach / BJJ Black Belt',
      image: '/images/trainers/mike.jpg',
      description:
        'Former UFC fighter with over 15 years of experience in Brazilian Jiu‑Jitsu and MMA competition.',
      socials: [
        { href: 'https://facebook.com',    label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',     label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',   label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    },
    {
      name: 'Sarah Johnson',
      role: 'Boxing Coach',
      image: '/images/trainers/sarah.jpg',
      description:
        'Professional boxer with multiple national championships and 8 years of coaching experience.',
      socials: [
        { href: 'https://facebook.com',    label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',     label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',   label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    },
    {
      name: 'Alex Rodriguez',
      role: 'Muay Thai Specialist',
      image: '/images/trainers/alex.jpg',
      description:
        'Trained in Thailand for 5 years and competed in over 30 professional Muay Thai fights.',
      socials: [
        { href: 'https://facebook.com',    label: 'Facebook',  icon: `<svg><!-- fb SVG --></svg>` },
        { href: 'https://twitter.com',     label: 'Twitter',   icon: `<svg><!-- tw SVG --></svg>` },
        { href: 'https://instagram.com',   label: 'Instagram', icon: `<svg><!-- ig SVG --></svg>` }
      ]
    }
  ];
</script>

<main class="bg-black text-white space-y-32">

  <!-- HERO -->
  <section
    class="relative bg-cover bg-center h-[600px]"
    style="background-image:url('/images/mma-hero.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        TRAIN HARD. <span class="text-red-600">FIGHT HARDER.</span>
      </h1>
      <p class="mt-4 text-lg">
        Join CSC MMA Club and train with the best fighters and coaches in the industry.
        We offer comprehensive training programs for all skill levels.
      </p>
      <div class="mt-6 flex flex-wrap gap-4">
        <a
          href="#schedule"
          class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold flex items-center gap-2"
        >
          VIEW SCHEDULE
        </a>
        <a
          href="#join"
          class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold flex items-center gap-2"
        >
          JOIN NOW
        </a>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
    {#each features as f}
      <div class="bg-black p-6 rounded-lg border border-gray-700 hover:scale-105 transform transition">
        <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
          {@html f.icon}
        </div>
        <h3 class="text-xl font-semibold">{f.title}</h3>
        <p class="mt-2 text-gray-300">{f.description}</p>
      </div>
    {/each}
  </section>

  <!-- ABOUT -->
  <section id="about" class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
    <img src="/images/mma-gym-2.jpg" alt="Gym interior" class="rounded-lg shadow-lg" />
    <div>
      <h2 class="text-3xl font-bold mb-4">
        ABOUT <span class="text-red-600">CSC MMA CLUB</span>
      </h2>
      <p class="text-gray-300 mb-6">
        Founded in 2012, CSC MMA Club has grown to become one of the premier mixed martial
        arts training facilities in the region. Our state‑of‑the‑art gym offers comprehensive
        training in various martial arts disciplines including Brazilian Jiu‑Jitsu, Muay Thai,
        Wrestling, and Boxing.
      </p>
      <div class="mb-6">
        <span class="inline-block bg-red-600 px-4 py-2 rounded text-white font-bold">
          10+ YEARS EXPERIENCE
        </span>
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {#each aboutList as item}
          <li class="flex items-center text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        {/each}
      </ul>
      <a href="#join" class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
        LEARN MORE
      </a>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section id="schedule" class="container mx-auto px-6 max-w-6xl space-y-6">
    <div class="text-center">
      <h2 class="text-3xl font-bold">
        TRAINING <span class="text-red-600">SCHEDULE</span>
      </h2>
      <p class="text-gray-300">
        Check our weekly schedule and join the classes that fit your needs and availability.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-left border-collapse">
        <thead>
          <tr>
            {#each days as d, i}
              <th
                class="px-4 py-2"
                class:bg-red-600={i > 0}
                class:text-white={i > 0}
              >
                {d}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each schedule as row, ri}
            <tr class:bg-gray-800={ri % 2 === 0}>
              {#each row as cell}
                <td class="px-4 py-2 border-t border-gray-700">{cell}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <a
        href="#join"
        class="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded font-semibold"
      >
        BOOK A FREE TRIAL CLASS
      </a>
    </div>
  </section>

  <!-- OUR TRAINERS -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold">
        OUR <span class="text-red-600 underline decoration-red-600 decoration-4 underline-offset-2">TRAINERS</span>
      </h2>
      <p class="text-gray-300">
        Meet our team of professional trainers with years of experience across all disciplines.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each trainers as t}
        <div
          class="bg-black p-6 rounded-lg border border-gray-700 hover:scale-105 transform transition"
        >
          <img src={t.image} alt={t.name} class="w-full h-64 object-cover rounded-md mb-4" />
          <h3 class="text-xl font-semibold text-white">{t.name}</h3>
          <p class="text-red-600 mb-4">{t.role}</p>
          <p class="text-gray-300">{t.description}</p>
          <div class="flex space-x-4 mt-6 text-gray-400">
            {#each t.socials as s}
              <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" class="hover:text-white">
                {@html s.icon}
              </a>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CONTACT -->
  <section id="join" class="container mx-auto px-6 py-16 max-w-6xl grid md:grid-cols-2 gap-12">
    <div>
      <h2 class="text-3xl font-bold mb-4">GET IN <span class="text-red-600">TOUCH</span></h2>
      <p class="text-gray-300 mb-8">
        Have questions or want to schedule a visit? Fill out the form and our team will get back to you asap.
      </p>
      <div class="space-y-6 text-gray-200 text-sm">
        <div class="flex items-start gap-3">
          <div>
            <strong>Our Location</strong><br />
            123 Fight Street, Combat City, CC 12345
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div>
            <strong>Phone Number</strong><br />
            (123) 456‑7890
          </div>
        </div>
        <div class="flex items-start gap-3">
          <div>
            <strong>Email Address</strong><br />
            info@cscmmaclub.com
          </div>
        </div>
      </div>
      <div class="flex space-x-4 mt-8 text-gray-400">
        <a href="https://facebook.com" aria-label="Facebook"><!-- fb SVG --></a>
        <a href="https://instagram.com" aria-label="Instagram"><!-- ig SVG --></a>
        <a href="https://twitter.com" aria-label="Twitter"><!-- tw SVG --></a>
        <a href="https://youtube.com" aria-label="YouTube"><!-- yt SVG --></a>
      </div>
    </div>
    <form class="space-y-4 bg-gray-800 p-6 rounded-lg">
      <input type="text" placeholder="Full Name"
             class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded" />
      <input type="email" placeholder="Email Address"
             class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded" />
      <input type="text" placeholder="Subject"
             class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded" />
      <textarea rows="5" placeholder="Message"
                class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"></textarea>
      <button type="submit"
              class="w-full bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
        SEND MESSAGE
      </button>
    </form>
  </section>

</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
