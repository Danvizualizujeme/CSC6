<script lang="ts">
	import { CLUB, CONTACT } from '$lib/data';
</script>

<svelte:head>
	<title>Cookies | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Web CSC MMA Karviná nepoužívá cookies ani sledovací nástroje. Mapa Google se načte jen na vaše vyžádání."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/cookies" />
</svelte:head>

<header class="page-head">
	<div class="container">
		<span class="label">Právní informace</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Cookies</h1>
			<p class="page-head__lead">
				Krátce: náš web žádné cookies nepoužívá, a proto se vás na souhlas s nimi neptáme.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container container--narrow legal">
		<div class="legal__meta"><span>Účinné od {CLUB.legalSince}</span></div>

		<h2 id="co-jsou">1. Co jsou cookies</h2>
		<p>
			Cookies jsou malé textové soubory, které si web ukládá do vašeho prohlížeče. Weby je používají například
			k zapamatování přihlášení, k měření návštěvnosti nebo k cílení reklamy. Podobně fungují i jiné způsoby
			ukládání dat do zařízení (local storage a podobně).
		</p>

		<h2 id="nas-web">2. Cookies na tomto webu</h2>
		<p>
			Web <strong>csc-karvina.cz</strong>, který provozuje {CLUB.name}, IČO {CLUB.ico},
			<strong>nepoužívá žádné cookies</strong> ani jiné ukládání dat do vašeho zařízení. Nepoužíváme
			analytické nástroje (například Google Analytics), reklamní ani sledovací kódy (například Meta Pixel).
		</p>
		<div class="legal__table">
			<table>
				<thead>
					<tr><th>Kategorie</th><th>Používáme?</th><th>Souhlas</th></tr>
				</thead>
				<tbody>
					<tr><td>Nezbytné (technické)</td><td>Ne</td><td>Není potřeba</td></tr>
					<tr><td>Analytické (měření návštěvnosti)</td><td>Ne</td><td>Není potřeba</td></tr>
					<tr><td>Marketingové a reklamní</td><td>Ne</td><td>Není potřeba</td></tr>
					<tr>
						<td>Obsah třetích stran (mapa Google)</td>
						<td>Jen po kliknutí na „Zobrazit mapu“</td>
						<td>Udělujete kliknutím</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p>
			Písmo webu je uložené přímo na našem serveru, takže se při návštěvě nic nenačítá ze serverů Googlu a vaše
			IP adresa se Googlu nepředává.
		</p>

		<h2 id="mapa">3. Mapa Google na stránce Kontakt</h2>
		<p>
			Na stránce <a href="/kontakt">Kontakt</a> je místo mapy nejdřív jen náhled. Mapa od Google Ireland Ltd.
			se načte až poté, co kliknete na <strong>„Zobrazit mapu“</strong>. Teprve tehdy se váš prohlížeč spojí se
			servery Googlu, předá mu vaši IP adresu a Google může do prohlížeče uložit své cookies. Kliknutím s tím
			souhlasíte pro danou návštěvu. Volbu si nepamatujeme, takže po obnovení stránky je mapa znovu skrytá.
		</p>
		<p>
			Zpracování údajů Googlem se řídí jeho
			<a href="https://policies.google.com/privacy?hl=cs" target="_blank" rel="noopener">zásadami ochrany soukromí</a>.
			Pokud mapu načíst nechcete, adresu najdete i v textu stránky, nebo použijte odkaz na Mapy.cz.
		</p>

		<h2 id="odkazy">4. Odkazy na sociální sítě</h2>
		<p>
			Ikony Facebooku a Instagramu jsou obyčejné odkazy. Dokud na ně nekliknete, nic se z těchto služeb
			nenačítá. Po přechodu na jejich weby platí zásady společnosti Meta Platforms.
		</p>

		<h2 id="smazani">5. Jak cookies smazat nebo zablokovat</h2>
		<p>
			Cookies, které si uložily jiné weby (například Google po zobrazení mapy), můžete kdykoli smazat nebo
			zablokovat v nastavení prohlížeče:
		</p>
		<ul>
			<li>
				<a href="https://support.google.com/chrome/answer/95647?hl=cs" target="_blank" rel="noopener">Google Chrome</a>
			</li>
			<li>
				<a href="https://support.mozilla.org/cs/kb/vymazani-cookies-a-dat-stranek-firefox" target="_blank" rel="noopener"
					>Mozilla Firefox</a
				>
			</li>
			<li>
				<a href="https://support.apple.com/cs-cz/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a>
			</li>
			<li>
				<a
					href="https://support.microsoft.com/cs-cz/microsoft-edge/odstran%C4%9Bn%C3%AD-soubor%C5%AF-cookie-v-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
					target="_blank"
					rel="noopener">Microsoft Edge</a
				>
			</li>
		</ul>

		<h2 id="kontakt">6. Dotazy</h2>
		<p>
			Pokud začneme cookies používat (například pro měření návštěvnosti), tuto stránku aktualizujeme a před
			jejich uložením vás požádáme o souhlas. S dotazy pište na
			<a href="mailto:{CONTACT.email}">{CONTACT.email}</a>. Více o zpracování osobních údajů najdete v
			<a href="/ochrana-osobnich-udaju">zásadách ochrany osobních údajů</a>.
		</p>
	</div>
</section>
