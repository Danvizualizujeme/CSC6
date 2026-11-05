<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { HEAD_COACH, COACHES, type Coach } from '$lib/data';

	let dialog: HTMLDialogElement;
	let selected = $state<Coach | null>(null);

	function openCoach(c: Coach) {
		selected = c;
		dialog.showModal();
	}
	const initials = (n: string) =>
		n
			.split(' ')
			.map((p) => p[0])
			.join('');
</script>

<svelte:head>
	<title>Trenéři | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Trenérský tým CSC Karviná: MMA, box, K1, thaibox, grappling, wrestling a tréninky pro děti. Hlavní trenér Lukáš Wojdyla."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/treneri" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">Trenéři</span>
		<div class="page-head__row">
			<h1 class="page-head__title">{COACHES.length + 1} trenérů, jeden tým.</h1>
			<p class="page-head__lead">
				Každý má svou specializaci, od dětské přípravky po thaibox z Thajska. Klikni na trenéra a přečti si,
				v čem vyniká.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container split">
		<div class="split__media" style="position:static">
			<img class="photo" src={HEAD_COACH.img} alt={HEAD_COACH.name} />
		</div>
		<div class="prose" use:reveal>
			<span class="label">Hlavní trenér</span>
			<h2>{HEAD_COACH.name}</h2>
			<p class="mono" style="color:var(--red);font-size:13px;letter-spacing:.08em;text-transform:uppercase">
				{HEAD_COACH.role}
			</p>
			<p>{HEAD_COACH.bio}</p>
			<ul class="list-lines" style="margin-top:28px">
				{#each HEAD_COACH.strengths as s, i}
					<li><span class="mono">0{i + 1}</span><span>{s}</span></li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<header class="section__head">
			<span class="label">Tým</span>
			<h2>Trenérský tým</h2>
		</header>
		<div class="coaches">
			{#each COACHES as c, i}
				<button type="button" class="coach" onclick={() => openCoach(c)} use:reveal={(i % 4) * 70}>
					{#if c.img}
						<img class="photo" src={c.img} alt="" loading="lazy" />
					{:else}
						<span class="coach__mono" aria-hidden="true">{initials(c.name)}</span>
					{/if}
					<span class="coach__body">
						<span>
							<span class="coach__name">{c.name}</span>
							<span class="coach__role">{c.role}</span>
						</span>
						<span class="coach__go" aria-hidden="true"><svg class="icon"><use href="#i-plus" /></svg></span>
					</span>
				</button>
			{/each}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="cta">
			<div>
				<h2>Pojď trénovat s námi.</h2>
				<p>Napiš, co tě zajímá, a doporučíme ti trénink i trenéra.</p>
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

<dialog
	class="dialog"
	bind:this={dialog}
	aria-labelledby="coach-name"
	onclick={(e) => e.target === dialog && dialog.close()}
>
	{#if selected}
		<div class="dialog__grid">
			{#if selected.img}
				<img class="photo" src={selected.img} alt={selected.name} />
			{:else}
				<span class="coach__mono" aria-hidden="true">{initials(selected.name)}</span>
			{/if}
			<div class="dialog__body">
				<button class="lightbox__btn dialog__close" style="position:static" onclick={() => dialog.close()} aria-label="Zavřít">
					<svg class="icon" aria-hidden="true"><use href="#i-close" /></svg>
				</button>
				<h2 id="coach-name">{selected.name}</h2>
				<p class="role">{selected.role}</p>
				<p>{selected.bio}</p>
				<ul class="chips" aria-label="Vyniká v">
					{#each selected.strengths as s}<li>{s}</li>{/each}
				</ul>
			</div>
		</div>
	{/if}
</dialog>
