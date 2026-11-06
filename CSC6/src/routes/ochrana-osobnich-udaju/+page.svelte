<script lang="ts">
	import { CLUB, CONTACT } from '$lib/data';

	const toc = [
		['spravce', 'Kdo vaše údaje zpracovává'],
		['dotazy', 'Dotazy a kontaktní formulář'],
		['clenove', 'Členové a účastníci tréninků'],
		['foto', 'Fotografie a videa'],
		['web', 'Návštěvníci webu'],
		['prijemci', 'Kdo k údajům má přístup'],
		['prava', 'Vaše práva'],
		['zmeny', 'Změny zásad']
	];
</script>

<svelte:head>
	<title>Ochrana osobních údajů | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Jak CSC Karviná z. s. zpracovává osobní údaje členů, rodičů, zájemců o trénink a návštěvníků webu podle GDPR."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/ochrana-osobnich-udaju" />
</svelte:head>

<!--
	TODO před spuštěním (ověřit s klubem, ideálně i s právníkem):
	- jaké údaje klub o členech skutečně vede (datum narození? rodné číslo? zdravotní údaje?),
	- zda a u kterých sportovních svazů členy registruje (MMA asociace, box, thaibox…),
	- zda má klub souhlasy s fotografiemi trenérů a dětí na webu,
	- uzavřít s Formspree a Netlify smlouvu o zpracování (DPA) – obě ji nabízejí online.
-->

<header class="page-head">
	<div class="container">
		<span class="label">Právní informace</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Ochrana osobních údajů</h1>
			<p class="page-head__lead">
				Jaké údaje o vás zpracováváme, proč, jak dlouho a jaká máte práva. Bez zbytečné právničiny.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container container--narrow legal">
		<div class="legal__meta"><span>Účinné od {CLUB.legalSince}</span><span>GDPR</span></div>

		<nav class="legal__toc" aria-label="Obsah">
			<p>Obsah</p>
			<ol>
				{#each toc as [id, label]}
					<li><a href="#{id}">{label}</a></li>
				{/each}
			</ol>
		</nav>

		<h2 id="spravce">1. Kdo vaše údaje zpracovává</h2>
		<p>
			Správcem osobních údajů je spolek <strong>{CLUB.name}</strong>, IČO {CLUB.ico}, se sídlem {CLUB.seat},
			zapsaný ve {CLUB.register} (dále jen „klub“ nebo „my“).
		</p>
		<p>
			S čímkoli, co se týká vašich údajů, se obracejte na
			<a href="mailto:{CONTACT.email}">{CONTACT.email}</a>, na telefon
			<a href={CONTACT.phoneHref}>{CONTACT.phone}</a> nebo písemně na adresu sídla. Pověřence pro ochranu
			osobních údajů jsme nejmenovali, protože nám to zákon neukládá.
		</p>
		<p>
			Údaje zpracováváme podle nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákona
			č. 110/2019 Sb., o zpracování osobních údajů.
		</p>

		<h2 id="dotazy">2. Dotazy a kontaktní formulář</h2>
		<p>
			Když nám napíšete přes formulář na webu, e-mailem, přes sociální sítě nebo zavoláte, zpracováváme jméno
			a příjmení, e-mail, případně telefon, disciplínu, o kterou máte zájem, a obsah zprávy.
		</p>
		<ul>
			<li>
				<strong>Účel:</strong> odpovědět vám a domluvit první trénink nebo členství.
			</li>
			<li>
				<strong>Právní základ:</strong> jednání o smlouvě na vaši žádost (čl. 6 odst. 1 písm. b) GDPR), u
				obecných dotazů náš oprávněný zájem odpovídat na zprávy (čl. 6 odst. 1 písm. f) GDPR).
			</li>
			<li>
				<strong>Jak dlouho:</strong> po dobu vyřizování dotazu a poté nejvýše 12 měsíců. Pokud se stanete
				členem, údaje převezmeme do evidence členů (bod 3).
			</li>
		</ul>
		<p>
			Vyplnění formuláře je dobrovolné. Bez jména a e-mailu vám ale nemůžeme odpovědět. Pokud je zájemcem
			o trénink dítě, má formulář vyplnit jeho rodič nebo jiný zákonný zástupce.
		</p>

		<h2 id="clenove">3. Členové a účastníci tréninků</h2>
		<p>Pokud u nás trénujete (nebo trénuje vaše dítě), zpracováváme:</p>
		<ul>
			<li>jméno, příjmení, datum narození a kontaktní údaje (telefon, e-mail),</li>
			<li>u nezletilých jméno a kontakt na zákonného zástupce,</li>
			<li>údaje o členství a platbách členských příspěvků,</li>
			<li>
				údaje potřebné k přihlášení na soutěže a k registraci u sportovních svazů (například hmotnostní
				kategorie), pokud se soutěží účastníte,
			</li>
			<li>
				zdravotní omezení, která nám sami sdělíte, aby trenér mohl trénink přizpůsobit a v případě potřeby
				poskytnout první pomoc.
			</li>
		</ul>

		<div class="legal__table">
			<table>
				<thead>
					<tr><th>Účel</th><th>Právní základ</th><th>Jak dlouho</th></tr>
				</thead>
				<tbody>
					<tr>
						<td>Vedení členství, organizace tréninků, komunikace se členy a rodiči</td>
						<td>Plnění smlouvy a stanov spolku (čl. 6 odst. 1 písm. b) GDPR)</td>
						<td>Po dobu členství a 1 rok po jeho skončení</td>
					</tr>
					<tr>
						<td>Evidence plateb a účetnictví spolku</td>
						<td>Právní povinnost (čl. 6 odst. 1 písm. c) GDPR), zákon o účetnictví</td>
						<td>Po dobu stanovenou účetními a daňovými předpisy (zpravidla 5 až 10 let)</td>
					</tr>
					<tr>
						<td>Přihlášky na soutěže a registrace u sportovních svazů</td>
						<td>Plnění smlouvy na vaši žádost (čl. 6 odst. 1 písm. b) GDPR)</td>
						<td>Po dobu členství, údaje u svazu podle jeho pravidel</td>
					</tr>
					<tr>
						<td>Zdravotní omezení, která nám sdělíte</td>
						<td>Váš výslovný souhlas (čl. 9 odst. 2 písm. a) GDPR)</td>
						<td>Po dobu členství nebo do odvolání souhlasu</td>
					</tr>
					<tr>
						<td>Obrana právních nároků (například při úrazu)</td>
						<td>Oprávněný zájem (čl. 6 odst. 1 písm. f) GDPR)</td>
						<td>Po dobu promlčecí lhůty, zpravidla 3 roky</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h2 id="foto">4. Fotografie a videa</h2>
		<p>
			Na trénincích a akcích občas fotíme a natáčíme a záběry zveřejňujeme na tomto webu a na našem Facebooku
			a Instagramu. Ukazujeme tak, jak u nás trénink vypadá.
		</p>
		<ul>
			<li>
				<strong>Portréty a záběry, na kterých je konkrétní člověk hlavním motivem</strong> (například fotky
				trenérů nebo závodníků s medailí), zveřejňujeme jen s jeho souhlasem (čl. 6 odst. 1 písm. a) GDPR).
			</li>
			<li>
				<strong>Děti do 15 let</strong> zveřejňujeme jen se souhlasem zákonného zástupce.
			</li>
			<li>
				<strong>Skupinové a reportážní záběry</strong> z tréninků a akcí zveřejňujeme na základě oprávněného
				zájmu na prezentaci klubu (čl. 6 odst. 1 písm. f) GDPR).
			</li>
		</ul>
		<p>
			Pokud se na některé fotce nebo videu nechcete vidět, napište nám a záběr co nejdřív odstraníme z webu
			i z našich profilů. Souhlas můžete kdykoli odvolat. Odvolání nemá vliv na zveřejnění, které proběhlo
			před ním.
		</p>

		<h2 id="web">5. Návštěvníci webu</h2>
		<p>
			Web běží na hostingu společnosti Netlify, Inc. Její servery při každé návštěvě ukládají technické záznamy
			(IP adresu, datum a čas, navštívenou stránku a typ prohlížeče). Slouží k zajištění bezpečnosti a provozu
			webu na základě oprávněného zájmu (čl. 6 odst. 1 písm. f) GDPR) a poskytovatel je automaticky maže.
		</p>
		<p>
			Web <strong>nepoužívá cookies</strong> ani analytické, reklamní či sledovací nástroje. Písmo se načítá
			přímo z našeho webu, ne od Googlu. Mapa Google se načte, až když o ni kliknutím sami požádáte.
			Podrobnosti najdete v <a href="/cookies">zásadách používání cookies</a>.
		</p>
		<p>
			Odkazy na Facebook a Instagram vedou na weby jiných provozovatelů. Když na naše profily přejdete, řídí se
			zpracování vašich údajů zásadami společnosti Meta Platforms.
		</p>

		<h2 id="prijemci">6. Kdo k údajům má přístup</h2>
		<p>
			K údajům mají přístup jen trenéři a členové vedení klubu, kteří je potřebují pro svou činnost. Dále je
			mohou zpracovávat naši dodavatelé:
		</p>
		<ul>
			<li>Netlify, Inc., San Francisco, USA: hosting webu,</li>
			<li>Formspree, Inc., USA: příjem zpráv z kontaktního formuláře,</li>
			<li>Seznam.cz, a.s., Praha: e-mailová schránka klubu,</li>
			<li>sportovní svazy a pořadatelé soutěží: jen pokud se přihlásíte na soutěž,</li>
			<li>Meta Platforms Ireland Ltd.: zveřejnění fotografií na Facebooku a Instagramu.</li>
		</ul>
		<p>
			Netlify a Formspree mohou údaje zpracovávat v USA. Předání probíhá na základě rámce EU-US Data Privacy
			Framework, případně standardních smluvních doložek schválených Evropskou komisí (čl. 45 a 46 GDPR).
		</p>
		<p>
			Údaje nikomu neprodáváme a nepoužíváme je k reklamě. Orgánům veřejné moci je poskytneme jen tehdy, když
			nám to ukládá zákon. Nerozhodujeme o vás automatizovaně a neprovádíme profilování.
		</p>

		<h2 id="prava">7. Vaše práva</h2>
		<p>V souvislosti se zpracováním osobních údajů máte právo:</p>
		<ul>
			<li>získat informaci, jaké údaje o vás zpracováváme, a jejich kopii (čl. 15 GDPR),</li>
			<li>na opravu nepřesných údajů (čl. 16),</li>
			<li>na výmaz, pokud údaje už nepotřebujeme nebo je zpracováváme neoprávněně (čl. 17),</li>
			<li>na omezení zpracování (čl. 18),</li>
			<li>na přenositelnost údajů, které zpracováváme na základě souhlasu nebo smlouvy (čl. 20),</li>
			<li>vznést námitku proti zpracování na základě oprávněného zájmu (čl. 21),</li>
			<li>kdykoli odvolat udělený souhlas.</li>
		</ul>
		<p>
			Za nezletilé tato práva uplatňuje jejich zákonný zástupce. Stačí napsat na
			<a href="mailto:{CONTACT.email}">{CONTACT.email}</a>. Odpovíme bez zbytečného odkladu, nejpozději do
			jednoho měsíce. Abychom údaje nevydali někomu jinému, můžeme vás požádat o ověření totožnosti.
		</p>
		<p>
			Pokud si myslíte, že s údaji nakládáme v rozporu s předpisy, můžete podat stížnost u
			<strong>Úřadu pro ochranu osobních údajů</strong>, Pplk. Sochora 27, 170 00 Praha 7,
			<a href="https://uoou.gov.cz" target="_blank" rel="noopener">uoou.gov.cz</a>.
		</p>

		<h2 id="zmeny">8. Změny zásad</h2>
		<p>
			Zásady můžeme upravit, například když změníme způsob zpracování nebo se změní předpisy. Aktuální znění je
			vždy na této stránce.
		</p>
	</div>
</section>
