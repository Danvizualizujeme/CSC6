<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal } from '$lib/reveal';
	import { DAYS, DAY_NAMES, SCHEDULE, DISCIPLINES, PLANS, LESSONS_PER_WEEK, todayIndex } from '$lib/data';

	let active = $state(0);
	let today = $state(-1);
	onMount(() => {
		today = todayIndex();
		active = today;
	});

	const day = $derived(DAYS[active]);
	const lessons = $derived(SCHEDULE[day]);

	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') active = (active + 1) % 7;
		else if (e.key === 'ArrowLeft') active = (active + 6) % 7;
		else return;
		e.preventDefault();
		document.getElementById(`tab-${active}`)?.focus();
	}

	// Odpovědi doplněné k původním otázkám – ověřit s klubem
	const faq = [
		{
			q: 'Potřebuju předchozí zkušenosti?',
			a: 'Ne. Většina lidí k nám přišla bez zkušeností. Vyber si trénink označený jako „Začátečníci“ nebo „Všichni“ a trenér tě provede základy.'
		},
		{
			q: 'Co si mám vzít na první trénink?',
			a: 'Sportovní oblečení, pití a ručník. Pokud máš vlastní rukavice nebo chrániče, vezmi je s sebou. Když ne, napiš nám předem a poradíme.'
		},
		{
			q: 'Od kolika let můžou děti trénovat?',
			a: 'Přípravka MMA je pro děti od 4 do 10 let, junioři pro věk 11 až 13 let. Tréninky jsou přizpůsobené věku a důraz je na bezpečí a zábavu.'
		},
		{
			q: 'Musím zápasit nebo sparovat?',
			a: 'Ne. Spousta členů trénuje jen pro kondici a radost. Na sparing a soutěže se chodí dobrovolně, až když na to budeš připravený.'
		}
	];
</script>

<svelte:head>
	<title>Rozpis tréninků a ceník | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Týdenní rozpis tréninků MMA, boxu, K1, thaiboxu, grapplingu a wrestlingu v Karviné. Ceník členství pro děti, juniory a dospělé."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/rozpis" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">Rozpis tréninků</span>
		<div class="page-head__row">
			<h1 class="page-head__title">{LESSONS_PER_WEEK} tréninků každý týden.</h1>
			<p class="page-head__lead">
				Ranní, odpolední i večerní. Vyber den a najdi trénink, který ti sedne. Začátečníci jsou vítaní na
				všech lekcích označených „Začátečníci“ a „Všichni“.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container">
		<div class="days" role="tablist" aria-label="Den v týdnu">
			{#each DAYS as d, i}
				<button
					id="tab-{i}"
					role="tab"
					aria-selected={i === active}
					aria-controls="sched"
					tabindex={i === active ? 0 : -1}
					class:is-today={i === today}
					title={DAY_NAMES[d]}
					onclick={() => (active = i)}
					onkeydown={onKey}>{d}</button
				>
			{/each}
		</div>

		<div class="sched" id="sched" role="tabpanel" aria-labelledby="tab-{active}">
			<div class="sched__head">
				<h2>{DAY_NAMES[day]}</h2>
				<span class="mono">{active === today ? 'Dnes · ' : ''}{lessons.length} {lessons.length === 1 ? 'trénink' : lessons.length >= 2 && lessons.length <= 4 ? 'tréninky' : 'tréninků'}</span>
			</div>
			{#each lessons as l}
				<div class="sched__row">
					<span class="sched__time">{l.time}</span>
					<span class="sched__name">{l.name}</span>
					<span class="sched__coach">{l.coach || '—'}</span>
					<span class="sched__level">{#if l.level}<span>{l.level}</span>{/if}</span>
				</div>
			{:else}
				<p class="sched__empty">V sobotu nejsou pravidelné tréninky. Odpočívej, v neděli se jede dál.</p>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<header class="section__head">
			<span class="label">Kurzy</span>
			<h2>Co znamená který trénink</h2>
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
			<li use:reveal>
				<span class="disc__no">09</span>
				<h3 class="disc__name">Přípravka MMA</h3>
				<p class="disc__text">
					Hravou formou se děti učí pohybovou průpravu, disciplínu a první techniky. Důraz je na zábavu, bezpečí
					a všestrannost.
				</p>
				<span class="disc__tag">4–10 let</span>
			</li>
			<li use:reveal>
				<span class="disc__no">10</span>
				<h3 class="disc__name">Junioři MMA</h3>
				<p class="disc__text">
					Konkrétní techniky MMA, kondice a týmový duch. Tréninky přizpůsobené věku podporují zdravý růst i
					sebedůvěru.
				</p>
				<span class="disc__tag">11–13 let</span>
			</li>
		</ul>
	</div>
</section>

<section class="bone" id="cenik">
	<div class="container">
		<header class="section__head">
			<span class="label">Ceník</span>
			<h2>Členství</h2>
			<p>Platí se měsíčně.</p>
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
	</div>
</section>

<section class="section">
	<div class="container container--narrow">
		<header class="section__head">
			<span class="label">Časté dotazy</span>
			<h2>Než přijdeš poprvé</h2>
		</header>
		<div class="faq">
			{#each faq as f}
				<details>
					<summary>{f.q}<span class="faq__plus" aria-hidden="true"></span></summary>
					<p>{f.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="cta">
			<div>
				<h2>Vybral sis trénink?</h2>
				<p>Napiš nám, kdy chceš přijít, a dáme vědět trenérovi.</p>
			</div>
			<div class="cta__actions">
				<a class="btn-pill" href="/kontakt#prihlaska">
					<span>Domluvit první trénink</span>
					<span class="btn-pill__icon"><svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg></span>
				</a>
			</div>
		</div>
	</div>
</section>
