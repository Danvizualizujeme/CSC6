<script lang="ts">
	import { reveal } from '$lib/reveal';

	const offer = [
		'Tréninky MMA, boxu, thajského boxu, K1, grapplingu, fitboxu, bezkontaktního MMA a wrestlingu pro všechny úrovně.',
		'Zkušené trenéry s praxí z české i mezinárodní scény.',
		'Přátelský kolektiv, respekt a motivaci překonávat vlastní hranice.',
		'Zázemí v Karviné s posilovnou, druhým sálem a relax místností.',
		'Možnost startovat na soutěžích, nebo trénovat „jen“ pro radost a zdraví.'
	];

	const values = [
		{ name: 'Disciplína', text: 'Disciplína není jen o sportu, ale i o přístupu k sobě a k ostatním.' },
		{ name: 'Respekt', text: 'Budujeme prostředí založené na vzájemném respektu a podpoře. Úcta k sobě i k ostatním je samozřejmost.' },
		{ name: 'Excelence', text: 'Dáváme do tréninku maximum a hledáme cestu, jak být každý den o kousek lepší.' }
	];

	const spaces = [
		{ img: '/images/web/octagon.jpg', name: 'Hlavní sál', text: 'Vše pro kvalitní trénink, od nácviku technik po sparing a kondiční přípravu.' },
		{ img: '/images/web/strength.jpg', name: 'Síla a kondice', text: 'Posilovna se základním vybavením pro sílu a stroje pro kondici a vytrvalost.' },
		{ img: '/images/web/boxing-ring.jpg', name: 'Druhý sál', text: 'Další místnost, kde se dá trénovat naplno a zpestřit přípravu.' },
		{ img: '/images/web/grappling-area.jpg', name: 'Relax', text: 'Po tréninku si členové můžou odpočinout v relax místnosti.' }
	];
</script>

<svelte:head>
	<title>O nás | CSC MMA Karviná</title>
	<meta
		name="description"
		content="CSC Karviná z. s. funguje od roku 2012. Příběh klubu, naše hodnoty, prostory a úspěchy závodníků."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/o-nas" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">O nás</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Klub, kde rosteš jako sportovec i&nbsp;člověk.</h1>
			<p class="page-head__lead">
				CSC Karviná z. s. vznikl v roce 2012. Z malého projektu se stal klub, který spojuje začátečníky,
				zkušené sportovce i profesionální zápasníky.
			</p>
		</div>
		<img class="page-head__img photo" src="/images/web/spolecna.jpg" alt="Členové klubu CSC Karviná na společné fotce" />
	</div>
</header>

<section class="section">
	<div class="container split">
		<div class="prose">
			<h2>Příběh klubu</h2>
			<p>
				Klub vznikl s jasnou vizí: vytvořit prostor, kde se lidé všech úrovní můžou učit, rozvíjet a růst
				prostřednictvím bojových sportů.
			</p>
			<p>
				Chceme nabídnout špičkový trénink a zároveň budovat silnou, přátelskou komunitu. Bojová umění pro nás
				nejsou jen o vítězstvích, ale hlavně o <strong>disciplíně, respektu a pokoře</strong> a o neustálém
				osobním růstu, v ringu i mimo něj.
			</p>
			<p>
				Ať chceš vyhrát první zápas, zlepšit kondici, shodit pár kilo nebo najít nový koníček, najdeš u nás
				odborné vedení a férové prostředí.
			</p>

			<h3>Co u nás najdeš</h3>
			<ul class="list-lines">
				{#each offer as o, i}
					<li><span class="mono">0{i + 1}</span><span>{o}</span></li>
				{/each}
			</ul>

			<div class="milestones" use:reveal>
				<h3>Milníky <span class="mono">2025</span></h3>
				<p>
					<strong>Adam Kánský (70 kg)</strong> je první šampion amatérského MMA v historii Karviné.
				</p>
				<p>
					<strong>Eliška Bobovičová</strong> je první reprezentantka Karviné a CSC na amatérském mistrovství
					světa v MMA (São Paulo, Brazílie).
				</p>
			</div>
		</div>
		<div class="split__media">
			<img class="photo" src="/images/web/event-3.jpg" alt="Závodnice CSC s medailí" loading="lazy" />
		</div>
	</div>
</section>

<section class="bone">
	<div class="container">
		<header class="section__head">
			<span class="label">Filozofie</span>
			<h2>Tři věci, na kterých stojíme</h2>
		</header>
		<div class="values">
			{#each values as v, i}
				<article class="value" use:reveal={i * 80}>
					<span class="mono">0{i + 1}</span>
					<h3>{v.name}</h3>
					<p>{v.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<header class="section__head">
			<span class="label">Prostory</span>
			<h2>Kde trénujeme</h2>
			<p>Rudé armády 651/19A v Karviné. Dva sály, posilovna a místo, kde si po tréninku sedneš.</p>
		</header>
		<div class="spaces">
			{#each spaces as s, i}
				<article class="space" use:reveal={(i % 2) * 80}>
					<img class="photo" src={s.img} alt="" loading="lazy" />
					<h3>{s.name}</h3>
					<p>{s.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="cta">
			<div>
				<h2>Chceš to zkusit?</h2>
				<p>Domluv si první trénink. Zkušenosti ani kondici nepotřebuješ.</p>
			</div>
			<div class="cta__actions">
				<a class="btn-pill" href="/kontakt#prihlaska">
					<span>Domluvit trénink</span>
					<span class="btn-pill__icon"><svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg></span>
				</a>
			</div>
		</div>
	</div>
</section>
