<!-- src/routes/+page.svelte -->
<script lang="ts">
  // === HERO & FEATURES ===
  interface Feature {
    title: string;
    description: string;
    icon: string;
  }
  const features: Feature[] = [
    {
      title: 'PROFESSIONAL TRAINING',
      description:
        'Train with experienced coaches who have competed at the highest levels of MMA, boxing, and Brazilian Jiu‑Jitsu.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 7h18M3 12h18M3 17h18" />
             </svg>`
    },
    {
      title: 'MODERN FACILITIES',
      description:
        'Our gym is equipped with a full‑size octagon, boxing ring, grappling mats, and state‑of‑the‑art fitness equipment.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 11v5m0 0l-2-2m2 2l2-2m6-5a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>`
    },
    {
      title: 'COMMUNITY',
      description:
        'Join a supportive community of fighters and enthusiasts who push each other to reach their full potential.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17 20h5v-2a3 3 0 00-3-3h-2m-4 5h4m-8 0H5v-2a3 3 0 013-3h2m4 0a3 3 0 100-6 3 3 0 000 6z" />
             </svg>`
    }
  ];

  // === ABOUT ===
  const aboutList = [
    'Boxing',
    'Muay Thai',
    'MMA',
    'Brazilian Jiu‑Jitsu',
    'Wrestling',
    'Strength & Conditioning'
  ];

  // === SCHEDULE ===
  const days = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const schedule: string[][] = [
    ['06:00 – 07:30', 'Boxing', 'BJJ', 'Boxing', 'BJJ', 'MMA', '–'],
    ['09:00 – 10:30', 'Muay Thai', 'Wrestling', 'Muay Thai', 'Wrestling', 'Open Mat', 'All Levels BJJ'],
    ['12:00 – 13:30', 'BJJ', 'Boxing', 'BJJ', 'Boxing', 'BJJ', 'Muay Thai'],
    ['17:00 – 18:30', 'Kids MMA', 'Kids BJJ', 'Kids MMA', 'Kids BJJ', 'Kids Boxing', '–'],
    ['19:00 – 20:30', 'MMA', 'BJJ Advanced', 'MMA', 'BJJ Advanced', 'Sparring', '–']
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
      name: 'Mike Johnson',
      role: 'Head Coach – MMA',
      image: '/images/trainers/mike.jpg',
      description:
        'Former UFC fighter with over 15 years of professional experience. Specializes in wrestling and ground-and-pound techniques.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<!-- fb SVG -->` },
        { href: 'https://twitter.com',  label: 'Twitter',  icon: `<!-- tw SVG -->`  },
        { href: 'https://instagram.com',label: 'Instagram',icon: `<!-- ig SVG -->`  }
      ]
    },
    {
      name: 'Sarah Martinez',
      role: 'BJJ Coach',
      image: '/images/trainers/sarah.jpg',
      description:
        'Black belt in Brazilian Jiu‑Jitsu with multiple championship titles. Known for her technical approach to grappling.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<!-- fb SVG -->` },
        { href: 'https://twitter.com',  label: 'Twitter',  icon: `<!-- tw SVG -->`  },
        { href: 'https://instagram.com',label: 'Instagram',icon: `<!-- ig SVG -->`  }
      ]
    },
    {
      name: 'David Lee',
      role: 'Muay Thai Coach',
      image: '/images/trainers/david.jpg',
      description:
        'Former Muay Thai champion with experience training in Thailand. Expert in clinch work and devastating elbow techniques.',
      socials: [
        { href: 'https://facebook.com', label: 'Facebook', icon: `<!-- fb SVG -->` },
        { href: 'https://twitter.com',  label: 'Twitter',  icon: `<!-- tw SVG -->`  },
        { href: 'https://instagram.com',label: 'Instagram',icon: `<!-- ig SVG -->`  }
      ]
    }
  ];

  // === TESTIMONIALS ===
  interface Testimonial {
    quote: string;
    name: string;
    since: string;
    avatar: string;
  }
  const testimonials: Testimonial[] = [
    {
      quote:
        'Training at CSC has completely transformed my life. The coaches are knowledgeable and supportive, and the community is like a second family. I’ve lost 30 pounds and gained confidence I never had before.',
      name: 'John D.',
      since: 'Member for 2 years',
      avatar: '/images/members/john.jpg'
    },
    {
      quote:
        "As a woman, I was hesitant to join an MMA gym, but CSC has been incredibly welcoming. The self‑defense skills I’ve learned are invaluable, and I’ve never been in better shape.",
      name: 'Rachel M.',
      since: 'Member for 1 year',
      avatar: '/images/members/rachel.jpg'
    },
    {
      quote:
        "I came to CSC to improve my BJJ game, but I’ve gained so much more. The coaches here have helped me refine my technique and prepare for competitions. I’ve won my last three tournaments!",
      name: 'Michael T.',
      since: 'Member for 3 years',
      avatar: '/images/members/michael.jpg'
    }
  ];
</script>

<main class="bg-black text-white space-y-24">

  <!-- HERO -->
  <section
    class="relative bg-cover bg-center"
    style="background-image: url('/images/mma-hero.jpg'); height: 600px;"
  >
    <div class="absolute inset-0 bg-black/75"></div>
    <div class="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">
        TRAIN WITH THE <span class="text-red-600">CHAMPIONS</span>
      </h1>
      <p class="mt-4 text-lg">
        Join CSC MMA Club and train with professional fighters in a state‑of‑the‑art facility.
        From beginners to pros, we have programs for everyone.
      </p>
      <div class="mt-6 flex flex-wrap gap-4">
        <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
          JOIN NOW
        </button>
        <button class="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded font-semibold">
          VIEW SCHEDULE
        </button>
      </div>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
    {#each features as f}
      <div class="bg-gray-800 p-6 rounded-lg border-t-4 border-red-600">
        <div class="text-red-600 mb-4">{@html f.icon}</div>
        <h3 class="text-xl font-semibold">{f.title}</h3>
        <p class="mt-2 text-gray-300">{f.description}</p>
      </div>
    {/each}
  </section>

  <!-- ABOUT -->
  <section class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
    <div class="border-4 border-red-600 p-1">
      <img src="/images/mma-gym.jpg" alt="Gym interior" class="w-full rounded" />
    </div>
    <div>
      <h2 class="text-3xl font-bold mb-4">
        ABOUT <span class="text-red-600">CSC MMA CLUB</span>
      </h2>
      <p class="text-gray-200 mb-4">
        Founded in 2010, CSC MMA Club has grown from a small local gym to one of the most respected
        MMA training facilities in the region. Our mission is to provide world-class training for
        fighters of all levels while fostering a supportive and motivating environment.
      </p>
      <p class="text-gray-200 mb-6">
        Whether you're looking to compete professionally, learn self-defense, or simply get in the
        best shape of your life, our experienced coaches and modern facilities will help you achieve
        your goals.
      </p>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-gray-200">
        {#each aboutList as item}
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600 mr-2" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </li>
        {/each}
      </ul>
      <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
        LEARN MORE
      </button>
    </div>
  </section>

  <!-- SCHEDULE -->
  <section class="container mx-auto px-6 space-y-6 max-w-6xl">
    <div class="text-center">
      <h2 class="text-3xl font-bold">
        TRAINING <span class="text-red-600">SCHEDULE</span>
      </h2>
      <p class="text-gray-200 mt-2">
        We offer a variety of classes throughout the week to accommodate all skill levels and
        schedules. Check out our weekly training calendar below.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full text-left border-collapse">
        <thead>
          <tr>
            {#each days as d, i}
              <!-- tady se string skládá v JS -->
              <th class={`px-4 py-2 ${i !== 0 ? 'bg-red-600 text-white' : ''}`}>
                {d}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each schedule as row, ri}
            <tr class={ri % 2 === 0 ? 'bg-gray-800' : ''}>
              {#each row as cell}
                <td class="px-4 py-2 border-t border-gray-700">{cell}</td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <button class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold">
        JOIN A CLASS
      </button>
    </div>
  </section>

  <!-- TRAINERS -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h2 class="text-3xl font-bold text-center mb-4">
      OUR <span class="text-red-600">TRAINERS</span>
    </h2>
    <p class="text-center text-gray-300 mb-12">
      Our team consists of experienced fighters and coaches who are dedicated to helping you achieve your goals in martial arts.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each trainers as t}
        <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img src={t.image} alt={t.name} class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold">{t.name}</h3>
            <p class="text-red-600 mb-4">{t.role}</p>
            <p class="text-gray-300 mb-4">{t.description}</p>
            <div class="flex space-x-4">
              {#each t.socials as s}
                <a
                  href={s.href}
                  aria-label={s.label}
                  class="text-gray-400 hover:text-white"
                  rel="noopener noreferrer"
                >
                  {@html s.icon}
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="bg-gray-900 py-16">
    <div class="container mx-auto px-6 max-w-6xl">
      <h2 class="text-3xl font-bold text-center mb-4">
        MEMBER <span class="text-red-600">TESTIMONIALS</span>
      </h2>
      <p class="text-center text-gray-300 mb-12">
        Hear what our members have to say about their experience training at CSC MMA Club.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each testimonials as tm}
          <div class="bg-gray-800 rounded-lg p-6 flex flex-col justify-between">
            <blockquote class="text-gray-200 italic mb-6">“{tm.quote}”</blockquote>
            <div class="flex items-center mt-auto">
              <img
                src={tm.avatar}
                alt={tm.name}
                class="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p class="font-semibold">{tm.name}</p>
                <p class="text-gray-400 text-sm">{tm.since}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- JOIN FORM -->
  <section
    class="relative bg-cover bg-center"
    style="background-image: url('/images/splatter-bg.jpg');"
  >
    <div class="absolute inset-0 bg-black/75"></div>
    <div class="relative z-10 container mx-auto px-6 py-16 max-w-lg bg-gray-900 bg-opacity-90 rounded-lg border-2 border-red-600">
      <h2 class="text-2xl font-bold text-center mb-2">
        JOIN <span class="text-red-600">CSC MMA CLUB</span>
      </h2>
      <p class="text-gray-300 text-sm text-center mb-6">
        Take the first step towards your martial arts journey. Fill out the form below and one of
        our coaches will contact you to schedule a free trial class.
      </p>
      <form class="space-y-4">
        <div>
          <label for="fullName" class="block text-sm mb-1">Full Name</label>
          <input
            id="fullName"
            type="text"
            class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"
          />
        </div>
        <div>
          <label for="email" class="block text-sm mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"
          />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="phone" class="block text-sm mb-1">Phone Number</label>
            <input
              id="phone"
              type="tel"
              class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"
            />
          </div>
          <div>
            <label for="level" class="block text-sm mb-1">Experience Level</label>
            <select
              id="level"
              class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"
            >
              <option>Beginner – No Experience</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm mb-1">Message (Optional)</label>
          <textarea
            id="message"
            rows="4"
            class="w-full px-3 py-2 bg-black text-white border border-gray-700 rounded"
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded font-semibold"
          >
            GET STARTED
          </button>
        </div>
      </form>
    </div>
  </section>

  <!-- CONTACT US -->
  <section class="container mx-auto px-6 py-16 max-w-6xl">
    <h2 class="text-3xl font-bold text-center mb-4">
      CONTACT <span class="text-red-600">US</span>
    </h2>
    <p class="text-center text-gray-300 mb-12">
      Have questions about our classes, membership options, or anything else? Get in touch with us.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-red-600 space-y-4">
        <h3 class="text-xl font-semibold text-red-600">GET IN TOUCH</h3>
        <div class="text-gray-200 text-sm space-y-2">
          <p>
            <strong>Address</strong><br />
            123 Fight Street, Downtown<br />
            New York, NY 10001
          </p>
          <p>
            <strong>Phone</strong><br />
            (555) 123‑4567
          </p>
          <p>
            <strong>Email</strong><br />
            info@cscmmaclub.com
          </p>
          <p>
            <strong>Hours</strong><br />
            Mon–Fri: 5:30AM – 10:00PM<br />
            Sat: 8:00AM – 6:00PM<br />
            Sun: 8:00AM – 2:00PM
          </p>
        </div>
        <div class="flex space-x-4 pt-4">
          <a href="https://facebook.com" aria-label="Facebook" class="text-red-600 hover:text-red-400">
            <!-- FB icon -->
          </a>
          <a href="https://instagram.com" aria-label="Instagram" class="text-red-600 hover:text-red-400">
            <!-- IG icon -->
          </a>
          <a href="https://twitter.com" aria-label="Twitter" class="text-red-600 hover:text-red-400">
            <!-- TW icon -->
          </a>
          <a href="https://youtube.com" aria-label="YouTube" class="text-red-600 hover:text-red-400">
            <!-- YT icon -->
          </a>
        </div>
      </div>
      <div class="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!…"
          class="w-full h-64"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="CSC MMA Club Location"
        ></iframe>
      </div>
    </div>
  </section>
</main>
