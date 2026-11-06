<script lang="ts">
	import { CLUB, CONTACT, PLANS } from '$lib/data';

	const toc = [
		['uvod', 'Úvodní ustanovení'],
		['clenstvi', 'Zkušební trénink a členství'],
		['ceny', 'Ceny a platby'],
		['ukonceni', 'Ukončení členství'],
		['odstoupeni', 'Odstoupení u smlouvy uzavřené na dálku'],
		['zdravi', 'Zdraví a bezpečnost'],
		['deti', 'Děti a mládež'],
		['pravidla', 'Pravidla v klubu'],
		['reklamace', 'Stížnosti a reklamace'],
		['spory', 'Řešení sporů'],
		['zaver', 'Závěrečná ustanovení']
	];
</script>

<svelte:head>
	<title>Obchodní a členské podmínky | CSC MMA Karviná</title>
	<meta
		name="description"
		content="Podmínky účasti na trénincích a členství v klubu CSC Karviná z. s.: ceny, platby, ukončení členství, bezpečnost a pravidla."
	/>
	<link rel="canonical" href="https://www.csc-karvina.cz/obchodni-podminky" />
</svelte:head>

<!--
	TODO před spuštěním – potvrdit s vedením klubu (hodnoty níže jsou navržené, ne od klubu):
	- je první (zkušební) trénink zdarma? (bod 2.1),
	- splatnost příspěvku (navrženo: do 10. dne měsíce) a způsob platby, číslo účtu (bod 3),
	- zda klub vrací poměrnou část příspěvku při dlouhodobé nemoci nebo úrazu (bod 3.5),
	- jak klub řeší pojištění členů (bod 6.4),
	- soulad se stanovami spolku (vznik a zánik členství).
	Doporučeno nechat zkontrolovat právníkem.
-->

<header class="page-head">
	<div class="container">
		<span class="label">Právní informace</span>
		<div class="page-head__row">
			<h1 class="page-head__title">Obchodní a členské podmínky</h1>
			<p class="page-head__lead">
				Pravidla účasti na trénincích a členství v klubu. Co platíte, jak členství ukončit a na co dávat pozor.
			</p>
		</div>
	</div>
</header>

<section class="section" style="padding-top:0">
	<div class="container container--narrow legal">
		<div class="legal__meta"><span>Účinné od {CLUB.legalSince}</span></div>

		<nav class="legal__toc" aria-label="Obsah">
			<p>Obsah</p>
			<ol>
				{#each toc as [id, label]}
					<li><a href="#{id}">{label}</a></li>
				{/each}
			</ol>
		</nav>

		<h2 id="uvod">1. Úvodní ustanovení</h2>
		<ol>
			<li>
				Tyto podmínky upravují účast na trénincích a členství v klubu, který provozuje spolek
				<strong>{CLUB.name}</strong>, IČO {CLUB.ico}, se sídlem {CLUB.seat}, zapsaný ve {CLUB.register}
				(dále jen „klub“).
			</li>
			<li>
				Kontakt: <a href="mailto:{CONTACT.email}">{CONTACT.email}</a>,
				<a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. Tréninky probíhají na adrese {CONTACT.street},
				{CONTACT.city}.
			</li>
			<li>
				Účastníkem je každý, kdo se účastní tréninku (dále jen „člen“). Za nezletilého jedná jeho zákonný
				zástupce.
			</li>
			<li>
				Vztahy neupravené těmito podmínkami se řídí stanovami spolku a zákonem č. 89/2012 Sb., občanský
				zákoník. Pokud je člen spotřebitelem, má vždy práva, která mu dává zákon, i když je tyto podmínky
				výslovně neuvádějí.
			</li>
		</ol>

		<h2 id="clenstvi">2. Zkušební trénink a členství</h2>
		<ol>
			<li>
				Na první (zkušební) trénink se stačí domluvit telefonicky, e-mailem nebo přes formulář na webu.
				Zkušební trénink člena k ničemu nezavazuje.
			</li>
			<li>
				Členství vzniká přihlášením do klubu a zaplacením členského příspěvku na první měsíc. Přihlášením člen
				potvrzuje, že se s těmito podmínkami seznámil.
			</li>
			<li>
				Členství je osobní a nelze ho převést na jinou osobu.
			</li>
			<li>
				Rozpis tréninků je zveřejněný na stránce <a href="/rozpis">Rozpis</a>. Klub může rozpis z provozních
				důvodů měnit (například o prázdninách nebo svátcích). Změny oznamuje na webu, na sociálních sítích nebo
				přímo na tréninku.
			</li>
		</ol>

		<h2 id="ceny">3. Ceny a platby</h2>
		<ol>
			<li>Členský příspěvek se platí za kalendářní měsíc. Aktuální ceny:</li>
		</ol>
		<div class="legal__table">
			<table>
				<thead>
					<tr><th>Členství</th><th>Pro koho</th><th>Měsíčně</th></tr>
				</thead>
				<tbody>
					{#each PLANS as p}
						<tr><td><strong>{p.name}</strong></td><td>{p.note ?? '—'}</td><td>{p.price} Kč</td></tr>
					{/each}
				</tbody>
			</table>
		</div>
		<ol start="2">
			<li>Uvedené ceny jsou konečné.</li>
			<li>
				Příspěvek se platí předem, nejpozději do 10. dne příslušného měsíce, v hotovosti trenérovi nebo
				převodem na účet klubu. Platební údaje sdělí trenér nebo vedení klubu.
			</li>
			<li>
				Příspěvek je paušální. Jeho výše nezávisí na počtu tréninků, kterých se člen v daném měsíci skutečně
				zúčastní.
			</li>
			<li>
				Za tréninky, které člen vynechá, se příspěvek nevrací. Při dlouhodobé nemoci nebo úrazu (déle než
				měsíc) se může člen s vedením klubu dohodnout na přerušení placení.
			</li>
			<li>
				Pokud trénink odpadne z důvodu na straně klubu, klub ho podle možností nahradí jiným termínem.
			</li>
			<li>
				Klub může ceny změnit. Změnu oznámí nejméně 30 dní předem na webu a na tréninku. Nová cena platí od
				prvního celého měsíce po uplynutí této lhůty. Pokud člen s novou cenou nesouhlasí, může členství
				ukončit.
			</li>
		</ol>

		<h2 id="ukonceni">4. Ukončení členství</h2>
		<ol>
			<li>
				Člen může členství ukončit kdykoli, a to ústně trenérovi, e-mailem nebo jednoduše tím, že na další
				měsíc příspěvek nezaplatí. Členství pak skončí koncem posledního zaplaceného měsíce.
			</li>
			<li>Již zaplacený příspěvek za probíhající měsíc se nevrací, s výjimkou bodu 5.</li>
			<li>
				Klub může členovi členství ukončit, pokud hrubě nebo opakovaně porušuje tyto podmínky či pokyny
				trenéra, ohrožuje zdraví ostatních nebo je přes upozornění v prodlení s platbou. V takovém případě
				se zaplacený příspěvek nevrací.
			</li>
		</ol>

		<h2 id="odstoupeni">5. Odstoupení u smlouvy uzavřené na dálku</h2>
		<ol>
			<li>
				Pokud člen jako spotřebitel uzavře členství na dálku (například e-mailem nebo přes web a zaplatí
				převodem, aniž by byl osobně v klubu), může od smlouvy odstoupit bez udání důvodu do 14 dnů od jejího
				uzavření.
			</li>
			<li>
				Odstoupení stačí poslat e-mailem na <a href="mailto:{CONTACT.email}">{CONTACT.email}</a>. Klub vrátí
				zaplacenou částku do 14 dnů stejným způsobem, jakým byla zaplacena.
			</li>
			<li>
				Pokud člen během této lhůty na vlastní žádost začne trénovat, uhradí poměrnou část příspěvku za dobu
				do odstoupení. Klub mu vrátí jen zbytek.
			</li>
		</ol>

		<h2 id="zdravi">6. Zdraví a bezpečnost</h2>
		<ol>
			<li>
				Bojové sporty jsou kontaktní a nesou riziko zranění. Člen se jich účastní dobrovolně a na vlastní
				odpovědnost. Klub dbá na bezpečnost a přiměřenou náročnost tréninků podle úrovně členů.
			</li>
			<li>
				Člen trénuje jen v dobrém zdravotním stavu. Zdravotní omezení (například problémy se srdcem, epilepsie,
				nedávné úrazy nebo operace, těhotenství) je povinen předem sdělit trenérovi. Při pochybnostech
				doporučujeme konzultaci s lékařem.
			</li>
			<li>
				Člen se řídí pokyny trenéra. Sparing a kontaktní cvičení probíhají jen se souhlasem a pod dohledem
				trenéra, s odpovídajícími ochrannými pomůckami. Účast na sparingu a soutěžích je dobrovolná.
			</li>
			<li>
				Klub odpovídá za škodu podle občanského zákoníku. Neodpovídá za zranění, které vznikne nedodržením
				pokynů trenéra nebo těchto podmínek. Doporučujeme mít vlastní úrazové pojištění.
			</li>
			<li>
				Na trénink je zakázáno přicházet pod vlivem alkoholu nebo jiných návykových látek.
			</li>
			<li>
				Za cenné věci odložené v prostorách klubu klub odpovídá jen tehdy, pokud je převzal do úschovy.
			</li>
		</ol>

		<h2 id="deti">7. Děti a mládež</h2>
		<ol>
			<li>
				Děti a juniory přihlašuje zákonný zástupce, který zároveň odpovídá za pravdivost údajů o zdravotním
				stavu dítěte.
			</li>
			<li>
				Trenér odpovídá za dítě po dobu tréninku, tedy od jeho začátku do konce. Před a po tréninku je dítě
				v péči zákonného zástupce.
			</li>
			<li>
				Fotografie dětí zveřejňujeme jen se souhlasem zákonného zástupce. Podrobnosti najdete v
				<a href="/ochrana-osobnich-udaju#foto">zásadách ochrany osobních údajů</a>.
			</li>
		</ol>

		<h2 id="pravidla">8. Pravidla v klubu</h2>
		<ul>
			<li>Respekt k trenérům, spoluhráčům a soupeřům. Agresivní nebo ponižující chování netolerujeme.</li>
			<li>Čisté sportovní oblečení, ostříhané nehty, bez šperků a hodinek na tréninku.</li>
			<li>Na žíněnky se vstupuje bez venkovní obuvi.</li>
			<li>Techniky naučené v klubu se používají jen na tréninku, při soutěžích a v nutné obraně.</li>
			<li>Po tréninku vrať vybavení na své místo.</li>
		</ul>

		<h2 id="reklamace">9. Stížnosti a reklamace</h2>
		<p>
			Pokud nejste s něčím spokojení, řekněte to trenérovi nebo napište na
			<a href="mailto:{CONTACT.email}">{CONTACT.email}</a>. Stížnost nebo reklamaci vyřídíme bez zbytečného
			odkladu, nejpozději do 30 dnů, a o výsledku vás informujeme.
		</p>

		<h2 id="spory">10. Mimosoudní řešení sporů</h2>
		<p>
			Pokud mezi klubem a členem, který je spotřebitelem, vznikne spor, který se nepodaří vyřešit dohodou, může
			spotřebitel podat návrh na mimosoudní řešení sporu u <strong>České obchodní inspekce</strong>, Ústřední
			inspektorát, oddělení ADR, Gorazdova 1969/24, 120 00 Praha 2,
			<a href="https://adr.coi.cz" target="_blank" rel="noopener">adr.coi.cz</a>. Tím není dotčeno právo obrátit
			se na soud.
		</p>

		<h2 id="zaver">11. Závěrečná ustanovení</h2>
		<ol>
			<li>
				Klub může tyto podmínky změnit. Změnu oznámí nejméně 30 dní předem na webu. Pokud člen se změnou
				nesouhlasí, může členství ukončit podle bodu 4.
			</li>
			<li>
				Osobní údaje zpracováváme podle <a href="/ochrana-osobnich-udaju">zásad ochrany osobních údajů</a>.
			</li>
			<li>Tyto podmínky jsou účinné od {CLUB.legalSince}.</li>
		</ol>
	</div>
</section>
