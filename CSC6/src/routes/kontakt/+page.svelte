<script lang="ts">
	import ContactForm from '$lib/ContactForm.svelte';
	import { CONTACT } from '$lib/data';

	// Mapa Google se načte až po kliknutí (bez cookies třetích stran předem)
	let showMap = $state(false);
</script>

<svelte:head>
	<title>Kontakt | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Kontakt na CSC MMA Karviná: Rudé armády 651/19A, Karviná. Telefon +420 734 538 844. Domluv si první trénink."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/kontakt" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">Kontakt</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Přijď se podívat.</h1>
			<p class="page-head__lead">
				Máš dotaz nebo chceš domluvit první trénink? Zavolej, napiš e-mail nebo vyplň formulář. Ozveme se co
				nejdřív.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0" id="prihlaska">
	<div class="container contact-grid">
		<div class="card">
			<h2>Kde nás najdete</h2>
			<ul class="contact-rows">
				<li>
					<span class="mono">Adresa</span>
					<strong>{CONTACT.street}<br />{CONTACT.city}</strong>
				</li>
				<li>
					<span class="mono">Telefon</span>
					<a href={CONTACT.phoneHref}><strong>{CONTACT.phone}</strong></a>
				</li>
				<li>
					<span class="mono">E-mail</span>
					<a href="mailto:{CONTACT.email}"><strong>{CONTACT.email}</strong></a>
				</li>
				<li>
					<span class="mono">Sítě</span>
					<span>
						<a href={CONTACT.facebook} target="_blank" rel="noopener">Facebook</a> ·
						<a href={CONTACT.instagram} target="_blank" rel="noopener">Instagram</a>
					</span>
				</li>
			</ul>
			{#if showMap}
				<iframe
					class="map"
					src="https://www.google.com/maps?q=Rud%C3%A9+arm%C3%A1dy+651%2F19A%2C+733+01+Karvin%C3%A1&output=embed"
					title="Mapa: CSC MMA Karviná, Rudé armády 651/19A"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			{:else}
				<div class="map-consent">
					<p>
						Mapa se načítá od Googlu, který při tom může uložit cookies. Načteme ji, až když o ni požádáte.
						<a href="/cookies#mapa">Více o cookies</a>
					</p>
					<div class="map-consent__actions">
						<button class="btn btn--ghost" type="button" onclick={() => (showMap = true)}>Zobrazit mapu</button>
						<a
							class="btn btn--ghost"
							href="https://mapy.cz/zakladni?q=Rud%C3%A9%20arm%C3%A1dy%20651%2F19a%20Karvin%C3%A1"
							target="_blank"
							rel="noopener">Otevřít v Mapy.cz</a
						>
					</div>
				</div>
			{/if}
		</div>
		<div class="card">
			<h2>Napiš nám</h2>
			<p style="color:var(--muted);margin-bottom:28px">
				Odpovíme e-mailem, nebo ti zavoláme, pokud vyplníš telefon.
			</p>
			<ContactForm />
		</div>
	</div>
</section>

<section class="section">
	<div class="container container--narrow">
		<div class="card">
			<h2>Otevírací doba</h2>
			<ul class="hours">
				<li><span>Pondělí – pátek</span><span class="mono">8:00 – 21:00</span></li>
				<li><span>Sobota</span><span class="mono">8:00 – 21:00</span></li>
				<li><span>Neděle</span><span class="mono">8:00 – 21:00</span></li>
			</ul>
			<p style="color:var(--muted);margin:20px 0 0">
				Časy jednotlivých tréninků najdeš v <a href="/rozpis" style="color:var(--text)">rozpisu</a>.
			</p>
		</div>
	</div>
</section>
