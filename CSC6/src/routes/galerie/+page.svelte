<script lang="ts">
	interface Item {
		src: string;
		category: 'Sparing' | 'Události' | 'Trénink';
		alt: string;
	}

	const categories = ['Vše', 'Sparing', 'Události', 'Trénink'] as const;
	let active = $state<(typeof categories)[number]>('Vše');

	const items: Item[] = [
		...[1, 2, 3, 4, 5, 6].map((n) => ({ src: `/images/web/sparring-${n}.jpg`, category: 'Sparing' as const, alt: 'Sparing na tréninku' })),
		...[1, 2, 3, 4, 5, 6].map((n) => ({ src: `/images/web/event-${n}.jpg`, category: 'Události' as const, alt: 'Závodníci CSC na akci' })),
		...[1, 2, 3, 4, 5, 6].map((n) => ({ src: `/images/web/training-${n}.jpg`, category: 'Trénink' as const, alt: 'Trénink v klubu CSC' }))
	];

	const filtered = $derived(active === 'Vše' ? items : items.filter((i) => i.category === active));
	const count = (c: string) => (c === 'Vše' ? items.length : items.filter((i) => i.category === c).length);

	let index = $state(-1);
	const close = () => (index = -1);
	const prev = () => (index = (index - 1 + filtered.length) % filtered.length);
	const next = () => (index = (index + 1) % filtered.length);

	function onKey(e: KeyboardEvent) {
		if (index < 0) return;
		if (e.key === 'Escape') close();
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}
</script>

<svelte:window onkeydown={onKey} />

<svelte:head>
	<title>Galerie | CSC MMA Karviná</title>
	<meta name="description" content="Fotky z tréninků, sparingů a závodů klubu CSC MMA Karviná." />
	<link rel="canonical" href="https://www.csc-karvina.cz/galerie" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">Galerie</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Pot, sparingy a&nbsp;pásy.</h1>
			<p class="page-head__lead">Tak to u nás vypadá na tréninku, na sparingu i na závodech.</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container">
		<div class="filters" role="group" aria-label="Filtr fotek">
			{#each categories as c}
				<button type="button" aria-pressed={active === c} onclick={() => (active = c)}>
					{c}<span class="mono">{count(c)}</span>
				</button>
			{/each}
		</div>

		<div class="masonry">
			{#each filtered as item, i (item.src)}
				<button type="button" onclick={() => (index = i)} aria-label="Zvětšit fotku: {item.alt}">
					<img class="photo" src={item.src} alt={item.alt} loading="lazy" />
				</button>
			{/each}
		</div>
	</div>
</section>

{#if index > -1}
	<div class="lightbox" role="dialog" aria-modal="true" aria-label="Fotka {index + 1} z {filtered.length}">
		<img src={filtered[index].src} alt={filtered[index].alt} />
		<button class="lightbox__btn lightbox__prev" onclick={prev} aria-label="Předchozí fotka">
			<svg class="icon" aria-hidden="true"><use href="#i-left" /></svg>
		</button>
		<button class="lightbox__btn lightbox__next" onclick={next} aria-label="Další fotka">
			<svg class="icon" aria-hidden="true"><use href="#i-right" /></svg>
		</button>
		<!-- svelte-ignore a11y_autofocus -->
		<button class="lightbox__btn lightbox__close" onclick={close} aria-label="Zavřít" autofocus>
			<svg class="icon" aria-hidden="true"><use href="#i-close" /></svg>
		</button>
		<span class="lightbox__count">{String(index + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</span>
	</div>
{/if}
