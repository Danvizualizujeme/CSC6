<script lang="ts">
	import '@fontsource/geist/400.css';
	import '@fontsource/geist/500.css';
	import '@fontsource/geist/600.css';
	import '@fontsource/geist-mono/500.css';
	import '../app.css';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { CONTACT, CLUB } from '$lib/data';

	let { children } = $props();
	let open = $state(false);

	const links = [
		{ href: '/o-nas', label: 'O nás' },
		{ href: '/rozpis', label: 'Rozpis' },
		{ href: '/treneri', label: 'Trenéři' },
		{ href: '/galerie', label: 'Galerie' },
		{ href: '/kontakt', label: 'Kontakt' }
	];

	afterNavigate(() => (open = false));
	const current = (href: string) => (page.url.pathname.startsWith(href) ? 'page' : undefined);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<a class="skip" href="#obsah">Přeskočit na obsah</a>

<header class="header">
	<div class="navbar">
		<a class="brand" href="/" aria-label="CSC Karviná – úvod">
			<img src="/images/logoCSC2-1.svg" alt="" width="44" height="44" />
			<span class="brand__name">CSC Karviná<small>Combat Sports Club</small></span>
		</a>
		<span class="navbar__divider" aria-hidden="true"></span>
		<nav class="nav" aria-label="Hlavní menu">
			{#each links as l}
				<a href={l.href} aria-current={current(l.href)}>{l.label}</a>
			{/each}
		</nav>
		<a class="header__cta" href="/kontakt#prihlaska">
			<span>První trénink</span>
			<span class="header__cta-sep" aria-hidden="true"></span>
			<svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg>
		</a>
		<button
			class="nav-toggle"
			aria-controls="mobile-menu"
			aria-expanded={open}
			aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
			onclick={() => (open = !open)}
		>
			<span></span><span></span>
		</button>
	</div>
	{#if open}
		<nav class="mobile-menu" id="mobile-menu" aria-label="Menu">
			{#each links as l, i}
				<a href={l.href} aria-current={current(l.href)}
					>{l.label}<span class="mono">0{i + 1}</span></a
				>
			{/each}
		</nav>
	{/if}
</header>

<main id="obsah">
	{@render children()}
</main>

<footer class="footer">
	<div class="footer__card">
		<div class="footer__grid">
			<div class="footer__brand">
				<a class="brand" href="/" aria-label="CSC Karviná – úvod">
					<img src="/images/logoCSC2-1.svg" alt="" width="44" height="44" loading="lazy" />
					<span class="brand__name">CSC Karviná<small>Combat Sports Club</small></span>
				</a>
				<p>Bojové sporty pro začátečníky, děti i závodníky. Jedna cesta, jeden cíl, jedna rodina.</p>
				<div class="footer__social">
					<a href={CONTACT.facebook} aria-label="Facebook" target="_blank" rel="noopener">
						<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
							><path
								d="M14 8.5V6.8c0-.8.5-1 1-1h2.3V2.1L14.2 2C10.8 2 10 4.5 10 6.2v2.3H7.7V12H10v10h4V12h2.9l.4-3.5H14z"
							/></svg
						>
					</a>
					<a href={CONTACT.instagram} aria-label="Instagram" target="_blank" rel="noopener">
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"
							><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle
								cx="17.5"
								cy="6.5"
								r="1"
								fill="currentColor"
								stroke="none"
							/></svg
						>
					</a>
				</div>
			</div>
			<div>
				<h2>Klub</h2>
				<ul>
					{#each links as l}
						<li><a href={l.href}>{l.label}</a></li>
					{/each}
				</ul>
			</div>
			<div>
				<h2>Kde nás najdete</h2>
				<p>{CONTACT.street}<br />{CONTACT.city}</p>
			</div>
			<div>
				<h2>Kontakt</h2>
				<ul>
					<li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
					<li><a href="mailto:{CONTACT.email}">{CONTACT.email}</a></li>
				</ul>
			</div>
		</div>
		<p class="footer__word" aria-hidden="true">CSC Karviná</p>
		<div class="footer__bottom">
			<p>© {new Date().getFullYear()} {CLUB.name}</p>
			<nav class="footer__legal" aria-label="Právní informace">
				<a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>
				<a href="/cookies">Cookies</a>
				<a href="/obchodni-podminky">Obchodní podmínky</a>
			</nav>
		</div>
		<p class="footer__id">
			{CLUB.name} · IČO {CLUB.ico} · sídlo {CLUB.seat} · zapsaný ve {CLUB.register}
		</p>
	</div>
</footer>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
	<symbol id="i-arrow" viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M4 12h16m-6-6 6 6-6 6"
		/></symbol
	>
	<symbol id="i-plus" viewBox="0 0 24 24"
		><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 5v14M5 12h14" /></symbol
	>
	<symbol id="i-check" viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-width="2.4"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M20 6 9 17l-5-5"
		/></symbol
	>
	<symbol id="i-close" viewBox="0 0 24 24"
		><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18" /></symbol
	>
	<symbol id="i-left" viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m15 18-6-6 6-6"
		/></symbol
	>
	<symbol id="i-right" viewBox="0 0 24 24"
		><path
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m9 18 6-6-6-6"
		/></symbol
	>
</svg>
