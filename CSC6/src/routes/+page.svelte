<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal, wordReveal } from '$lib/reveal';
	import ContactForm from '$lib/ContactForm.svelte';
	import {
		DAYS,
		DAY_NAMES,
		SCHEDULE,
		DISCIPLINES,
		HEAD_COACH,
		COACHES,
		PLANS,
		CONTACT,
		LESSONS_PER_WEEK,
		todayIndex,
		type Lesson
	} from '$lib/data';

	// Karta „Dnes trénujeme“: počítá se až v prohlížeči podle místního času
	let todayLabel = $state('Dnes');
	let dayName = $state('');
	let lessons = $state<(Lesson & { past: boolean })[]>([]);

	onMount(() => {
		const now = new Date();
		let i = todayIndex(now);
		const minutes = now.getHours() * 60 + now.getMinutes();
		const endOf = (t: string) => {
			const [h, m] = t.split('–')[1].split(':').map(Number);
			return h * 60 + m;
		};
		let list = SCHEDULE[DAYS[i]].map((l) => ({ ...l, past: endOf(l.time) < minutes }));
		// Dnes už nic nezbývá nebo je volno → ukázat nejbližší den s tréninky
		if (!list.length || list.every((l) => l.past)) {
			for (let k = 1; k <= 7; k++) {
				const j = (i + k) % 7;
				if (SCHEDULE[DAYS[j]].length) {
					todayLabel = k === 1 ? 'Zítra' : DAY_NAMES[DAYS[j]];
					i = j;
					list = SCHEDULE[DAYS[j]].map((l) => ({ ...l, past: false }));
					break;
				}
			}
		}
		dayName = DAY_NAMES[DAYS[i]];
		lessons = list;
	});

	const coachesPreview = [HEAD_COACH, ...COACHES.slice(0, 3)];

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'SportsActivityLocation',
		name: 'CSC MMA Karviná',
		description: 'MMA klub v Karviné: tréninky MMA, boxu, K1, thaiboxu, grapplingu a wrestlingu pro děti i dospělé.',
		image: 'https://www.csc-karvina.cz/images/web/sparring-1.jpg',
		'@id': 'https://www.csc-karvina.cz',
		url: 'https://www.csc-karvina.cz',
		telephone: CONTACT.phone,
		email: CONTACT.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: CONTACT.street,
			addressLocality: 'Karviná',
			postalCode: '733 01',
			addressCountry: 'CZ'
		},
		geo: { '@type': 'GeoCoordinates', latitude: 49.854, longitude: 18.541 },
		sameAs: [CONTACT.facebook, CONTACT.instagram]
	};
	const schemaScript = `<script type="application/ld+json">${JSON.stringify(schemaData)}<\/script>`;
</script>

<svelte:head>
	<title>CSC MMA Karviná | MMA, box, K1, thaibox a grappling</title>
	<meta
		name="description"
		content="Bojové sporty v Karviné od roku 2012. MMA, box, K1, thaibox, grappling a wrestling pro začátečníky, děti i závodníky. Přijď na první trénink."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.csc-karvina.cz/" />
	<meta property="og:title" content="CSC MMA Karviná" />
	<meta property="og:description" content="Bojové sporty v Karviné od roku 2012. Přijď na první trénink." />
	<meta property="og:image" content="https://www.csc-karvina.cz/images/web/sparring-1.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="canonical" href="https://www.csc-karvina.cz/" />
	{@html schemaScript}
</svelte:head>

<!-- HERO -->
<section class="hero">
	<img class="hero__img photo" src="/images/web/sparring-1.jpg" alt="" fetchpriority="high" />
	<div class="hero__inner">
		<div class="hero-in">
			<h1 class="hero__title">Jedna cesta.<br />Jeden cíl.<br /><em>Jedna rodina.</em></h1>
			<p class="hero__lead">
				Bojové sporty v Karviné od roku 2012. MMA, box, K1, thaibox i grappling pro úplné začátečníky, děti
				i závodníky.
			</p>
			<div class="hero__actions">
				<a class="btn-pill" href="#prihlaska">
					<span>Přijď na první trénink</span>
					<span class="btn-pill__icon"><svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg></span>
				</a>
				<a class="btn btn--ghost" href="/rozpis">Rozpis tréninků</a>
			</div>
			<p class="hero__meta">
				<span>Karviná · Rudé armády 19A</span>
				<span>{LESSONS_PER_WEEK} tréninků týdně</span>
				<span>Od 4 let</span>
			</p>
		</div>

		<aside class="today" aria-label="Tréninky {todayLabel.toLowerCase()}">
			<div class="today__head">
				<span class="today__live">{todayLabel} trénujeme</span>
				<span>{dayName}</span>
			</div>
			<ul>
				{#each lessons as l}
					<li class:is-past={l.past}>
						<span class="mono">{l.time}</span>
						<span>{l.name}</span>
					</li>
				{/each}
			</ul>
			<a class="today__more" href="/rozpis">
				Celý týden
				<svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
			</a>
		</aside>
	</div>
</section>

<!-- ÚVODNÍ VĚTA -->
<section class="statement" id="o-nas">
	<div class="container statement__inner">
		<span class="label">O klubu</span>
		<h2 class="statement__text" use:wordReveal>
			Trénujeme od roku 2012. Z malé party se stal klub, kde vedle sebe makají úplní začátečníci, děti
			i závodníci. Přijď takový, jaký jsi. Zbytek naučíme.
		</h2>
		<div class="statement__photos">
			<img class="photo" src="/images/web/training-1.jpg" alt="Grapplingový trénink na žíněnkách" loading="lazy" />
			<img class="photo" src="/images/web/event-4.jpg" alt="Závodník CSC s mistrovským pásem" loading="lazy" />
			<img class="photo" src="/images/web/sparring-4.jpg" alt="Sparing na tréninku boxu" loading="lazy" />
		</div>
		<a class="btn btn--ghost" href="/o-nas">Příběh klubu</a>
	</div>
</section>

<!-- STATISTIKY -->
<section class="stats">
	<div class="stats__card">
		<img class="photo" src="/images/web/spolecna.jpg" alt="Společná fotka členů klubu CSC Karviná" loading="lazy" />
		<p class="stats__lead">
			V roce 2025 jsme měli prvního šampiona amatérského MMA v historii Karviné a první reprezentantku na
			mistrovství světa v São Paulu.
		</p>
		<ul class="stats__list">
			<li><strong>2012</strong><span>Rok založení</span></li>
			<li><strong>{COACHES.length + 1}</strong><span>Trenérů</span></li>
			<li><strong>{DISCIPLINES.length}</strong><span>Disciplín</span></li>
			<li><strong>{LESSONS_PER_WEEK}</strong><span>Tréninků týdně</span></li>
		</ul>
	</div>
</section>

<!-- DISCIPLÍNY -->
<section class="section">
	<div class="container">
		<header class="section__head section__head--row">
			<div>
				<span class="label">Disciplíny</span>
				<h2>Co u nás trénujeme</h2>
			</div>
			<a class="btn btn--ghost" href="/rozpis">Kdy který trénink</a>
		</header>
		<ul class="disc">
			{#each DISCIPLINES as d, i}
				<li use:reveal={i * 40}>
					<span class="disc__no">{String(i + 1).padStart(2, '0')}</span>
					<h3 class="disc__name">{d.name}</h3>
					<p class="disc__text">{d.text}</p>
					<span class="disc__tag">{d.tag}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- TRENÉŘI -->
<section class="section">
	<div class="container">
		<header class="section__head section__head--row">
			<div>
				<span class="label">Trenéři</span>
				<h2>Lidi, kteří tě povedou</h2>
			</div>
			<a class="btn btn--ghost" href="/treneri">Všech {COACHES.length + 1} trenérů</a>
		</header>
		<div class="coaches">
			{#each coachesPreview as c, i}
				<a class="coach" href="/treneri" use:reveal={i * 80}>
					{#if c.img}<img class="photo" src={c.img} alt="" loading="lazy" />{/if}
					<span class="coach__body">
						<span>
							<span class="coach__name">{c.name}</span>
							<span class="coach__role">{c.role}</span>
						</span>
						<span class="coach__go" aria-hidden="true"><svg class="icon"><use href="#i-arrow" /></svg></span>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CENÍK -->
<section class="bone">
	<div class="container">
		<header class="section__head">
			<span class="label">Členství</span>
			<h2>Jednoduchý ceník</h2>
			<p>Platí se měsíčně. Přijď si nejdřív zkusit první trénink a pak se rozhodni.</p>
		</header>
		<div class="plans">
			{#each PLANS as p, i}
				<article class="plan" class:plan--hl={i === 2} use:reveal={i * 80}>
					<h3>{p.name}</h3>
					<span class="plan__note">{p.note ?? ''}</span>
					<p class="plan__price">{p.price}&nbsp;Kč<small>/ měsíc</small></p>
					<ul>
						{#each p.items as item}
							<li><svg class="icon" aria-hidden="true"><use href="#i-check" /></svg>{item}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
		<div class="plans__foot">
			<p>Nevíš, co vybrat? Zavolej na <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.</p>
			<a class="btn-pill btn-pill--dark" href="#prihlaska">
				<span>Domluvit první trénink</span>
				<span class="btn-pill__icon"><svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg></span>
			</a>
		</div>
	</div>
</section>

<!-- PŘIHLÁŠKA -->
<section class="section" id="prihlaska">
	<div class="container">
		<div class="contact-grid">
			<div class="cta" style="grid-template-columns:1fr;align-content:space-between">
				<div>
					<h2>Začni dřív, než si to rozmyslíš.</h2>
					<p>
						Napiš, co tě zajímá, a domluvíme první trénink. Zkušenosti ani kondici nepotřebuješ, začínáme od základů.
					</p>
				</div>
				<div class="cta__actions">
					<a class="btn btn--ghost" href={CONTACT.phoneHref}>{CONTACT.phone}</a>
					<a class="btn btn--ghost" href="mailto:{CONTACT.email}">{CONTACT.email}</a>
				</div>
			</div>
			<div class="card">
				<ContactForm />
			</div>
		</div>
	</div>
</section>
