// Sdílená data webu: rozpis, trenéři, disciplíny, ceny.
// Rozpis se používá na úvodu (karta „Dnes trénujeme“) i na stránce /rozpis.

export type Day = 'PO' | 'ÚT' | 'ST' | 'ČT' | 'PÁ' | 'SO' | 'NE';
export interface Lesson {
	time: string;
	name: string;
	coach: string;
	level: string;
}

export const DAYS: Day[] = ['PO', 'ÚT', 'ST', 'ČT', 'PÁ', 'SO', 'NE'];
export const DAY_NAMES: Record<Day, string> = {
	PO: 'Pondělí',
	ÚT: 'Úterý',
	ST: 'Středa',
	ČT: 'Čtvrtek',
	PÁ: 'Pátek',
	SO: 'Sobota',
	NE: 'Neděle'
};

export const SCHEDULE: Record<Day, Lesson[]> = {
	PO: [
		{ time: '8:15–9:15', name: 'MMA, box, K1', coach: 'Wojdyla', level: 'Všichni' },
		{ time: '15:30–16:30', name: 'Přípravka MMA', coach: 'Mayer, Wojdyla', level: '4–10 let' },
		{ time: '16:30–17:30', name: 'Box začátečníci', coach: 'Pawliczek', level: 'Začátečníci' },
		{ time: '17:30–18:45', name: 'Grappling + wrestling', coach: '', level: 'Všichni' },
		{ time: '18:30–19:30', name: 'Bezkontaktní MMA', coach: 'Pawliczek', level: '' }
	],
	ÚT: [
		{ time: '15:30–16:30', name: 'Junioři MMA', coach: 'Mayer, Kuta', level: '11–13 let' },
		{ time: '16:00–17:00', name: 'Box pokročilí', coach: 'Górecki', level: 'Pokročilí' },
		{ time: '16:30–17:30', name: 'Fitbox', coach: 'Hudeček', level: '' },
		{ time: '17:00–18:15', name: 'MMA začátečníci', coach: 'Bráborec', level: 'Začátečníci' },
		{ time: '17:30–18:30', name: 'K1', coach: 'Hudeček', level: 'Začátečníci' },
		{ time: '18:15–19:30', name: 'MMA pokročilí', coach: 'Wojdyla', level: 'Pokročilí' }
	],
	ST: [
		{ time: '8:15–9:15', name: 'MMA, box, K1', coach: 'Wojdyla', level: 'Všichni' },
		{ time: '15:30–16:30', name: 'Přípravka MMA', coach: 'Mayer, Wojdyla', level: '4–10 let' },
		{ time: '16:30–17:30', name: 'Box začátečníci', coach: 'Pawliczek', level: 'Začátečníci' },
		{ time: '17:30–18:45', name: 'Wrestling', coach: 'Barva', level: 'Všichni' },
		{ time: '18:30–19:30', name: 'Bezkontaktní MMA', coach: 'Pawliczek', level: '' },
		{ time: '18:45–19:45', name: 'Grappling', coach: 'Wojdyla', level: 'Všichni' }
	],
	ČT: [
		{ time: '15:30–16:30', name: 'Junioři MMA', coach: 'Mayer, Kuta', level: '11–13 let' },
		{ time: '16:00–17:00', name: 'Box pokročilí', coach: 'Górecki', level: 'Pokročilí' },
		{ time: '16:30–17:30', name: 'Fitbox', coach: 'Hudeček', level: '' },
		{ time: '17:00–18:15', name: 'MMA začátečníci', coach: 'Bráborec', level: 'Začátečníci' },
		{ time: '18:15–19:30', name: 'MMA pokročilí', coach: 'Wojdyla', level: 'Pokročilí' }
	],
	PÁ: [
		{ time: '8:15–9:15', name: 'MMA, box, K1', coach: 'Wojdyla', level: 'Všichni' },
		{ time: '15:00–16:00', name: 'Přípravka + junioři MMA', coach: '', level: '4–13 let' },
		{ time: '15:30–17:00', name: 'Grappling', coach: 'Sumelidis', level: 'Všichni' },
		{ time: '17:00–18:15', name: 'Thaibox', coach: 'Breit', level: '' },
		{ time: '18:15–19:15', name: 'Sparing K1 + box', coach: '', level: '' }
	],
	SO: [],
	NE: [
		{ time: '16:00–17:00', name: 'K1', coach: 'Hudeček', level: 'Začátečníci' },
		{ time: '17:00–18:00', name: 'Sparing MMA + grappling', coach: '', level: 'Všichni' },
		{ time: '18:00–19:00', name: 'Bezkontaktní MMA', coach: 'Pawliczek', level: '' }
	]
};

export const LESSONS_PER_WEEK = DAYS.reduce((n, d) => n + SCHEDULE[d].length, 0);

/** Index dne v DAYS podle data (pondělí = 0). */
export function todayIndex(date = new Date()): number {
	return (date.getDay() + 6) % 7;
}

export interface Discipline {
	name: string;
	text: string;
	tag: string;
}

export const DISCIPLINES: Discipline[] = [
	{ name: 'MMA', tag: 'Všechny úrovně', text: 'Postoj, zem i přechody mezi nimi. Od základů pro začátečníky po přípravu na zápas.' },
	{ name: 'Box', tag: 'Začátečníci i pokročilí', text: 'Práce rukou, nohou a hlavy. Základy techniky, kombinace a sparing pod dohledem.' },
	{ name: 'K1', tag: 'Postoj', text: 'Údery, kopy a kolena do rychlých kombinací. Rozvíjí dynamiku a odolnost.' },
	{ name: 'Thaibox', tag: 'Muay Thai', text: 'Osm zbraní: pěsti, lokty, kolena a holeně. Přesnost, tvrdost a kondice.' },
	{ name: 'Grappling', tag: 'Zem', text: 'Páky, škrcení a kontrola na zemi. Základ sebeobrany a nezbytnost pro MMA.' },
	{ name: 'Wrestling', tag: 'Strhy', text: 'Takedowny, strhy a kontrola soupeře. Síla a výbušnost, které se hodí všude.' },
	{ name: 'Fitbox', tag: 'Kondice', text: 'Kondiční trénink s prvky boxu a kickboxu. Bez kontaktu, s pořádnou dávkou potu.' },
	{ name: 'Bezkontaktní MMA', tag: 'Bez úderů', text: 'Technika a pohyb MMA bez tvrdého kontaktu. Pro koordinaci a kondici.' }
];

export interface Coach {
	name: string;
	role: string;
	img: string | null;
	bio: string;
	strengths: string[];
}

export const HEAD_COACH: Coach = {
	name: 'Lukáš Wojdyla',
	role: 'Hlavní trenér a zakladatel klubu',
	img: '/images/web/tr1.jpg',
	bio: 'Hlavní trenér a srdce celého klubu. Každého člena bere jako součást rodiny a vždy se snaží z každého dostat maximum. Je trpělivý, motivující a nikdy nezkazí žádnou srandu.',
	strengths: ['trpělivost', 'motivace svěřenců', 'vedení týmu', 'zakladatel CSC']
};

export const COACHES: Coach[] = [
	{
		name: 'Lukáš Bráborec',
		img: '/images/web/tr3.jpg',
		role: 'MMA začátečníci, kondice',
		bio: 'Specialista na práci s nováčky, kterým dokáže srozumitelně a dopodrobna vysvětlit každý detail. Trpělivě vede začátečníky k pevným základům MMA a zároveň jim vštěpuje respekt a disciplínu.',
		strengths: ['trpělivost', 'technické vysvětlení', 'výchova začátečníků']
	},
	{
		name: 'Lukáš Górecki',
		img: '/images/web/tr9.jpg',
		role: 'Box pokročilí',
		bio: 'Tvrdý, ale férový trenér, který dokáže najít slabinu soupeře a připravit bojovníky na zápas i do života. Kombinuje dril s nadhledem. Na svou výšku má ránu, kterou nikdo nechce schytat.',
		strengths: ['strategie', 'tvrdost', 'humor']
	},
	{
		name: 'Ondřej Pawliczek',
		img: '/images/web/tr2.jpg',
		role: 'Box začátečníci, bezkontaktní MMA',
		bio: 'Mladý a energický trenér, odchovanec Lukáše Wojdyly. Přináší do tréninků moderní přístup, zaměřuje se na techniku a detail a neustále posouvá svěřence dopředu.',
		strengths: ['inovace', 'technika', 'motivace mladých']
	},
	{
		name: 'Lukáš Mayer',
		img: '/images/web/tr4.jpg',
		role: 'Přípravka 4–10 let, základy MMA',
		bio: 'Empatický trenér s výjimečným přístupem k dětem i dospělým. Předává nejen techniku, ale i hodnoty a respekt. Dokáže vytvořit pozitivní atmosféru v každém tréninku.',
		strengths: ['práce s dětmi', 'lidský přístup', 'výchova hodnot']
	},
	{
		name: 'Daniel Hudeček',
		img: '/images/web/tr7.jpg',
		role: 'K1 začátečníci, kondice',
		bio: 'Přísný, ale přátelský trenér, který svěřence dovede k jasně stanoveným cílům. Vyvažuje disciplínu se zábavou a každý jeho trénink má smysl a řád.',
		strengths: ['disciplína', 'vedení k cílům', 'přátelský přístup']
	},
	{
		name: 'Michal Sumelidis',
		img: '/images/web/tr5.jpg',
		role: 'Grappling, mládež',
		bio: 'Jeden z nejlepších grapplerů v České republice, který učí s lehkostí a humorem. Jeho tréninky jsou zábavné a efektivní i pro ty, kdo nemají přirozený talent. Známý svou láskou ke kebabu.',
		strengths: ['grappling', 'trpělivé učení', 'humor']
	},
	{
		name: 'Erik Breit',
		img: '/images/web/tr6.jpg',
		role: 'Thaibox',
		bio: 'Elitní thaiboxer, který pravidelně piluje své dovednosti přímo v Thajsku. Patří k nejlepším v ČR a znalosti předává jasně a detailně. Precizní a náročný na techniku.',
		strengths: ['thaibox', 'technická preciznost', 'zkušenosti z Thajska']
	},
	{
		name: 'Marek Barva',
		img: null,
		role: 'Wrestling',
		bio: 'Specialista na wrestling a hody, které učí s maximální pečlivostí a smyslem pro detail. Jeho tréninky mají jasnou koncepci a směřují k výsledkům. Pokud chcete umět perfektní strhy, je to ten pravý.',
		strengths: ['wrestling', 'systematičnost', 'praktické vedení']
	},
	{
		name: 'Maxim Kuta',
		img: '/images/web/tr8.jpg',
		role: 'Asistent trenéra, mládež',
		bio: 'Nejmladší člen trenérského týmu, který už teď dokáže pomoci a inspirovat mladé sportovce. Je otevřený, přátelský a přináší do klubu svěží energii.',
		strengths: ['práce s mládeží', 'přátelský přístup', 'energie']
	}
];

export const PLANS = [
	{ name: 'Děti', price: 500, note: 'Přípravka 4–10 let', items: ['Pravidelný dětský trénink', 'Rozvoj motoriky a disciplíny'] },
	{ name: 'Junioři', price: 650, note: '11–13 let', items: ['Přístup ke všem lekcím', 'Vstup do posilovny'] },
	{ name: 'Dospělí', price: 850, items: ['Přístup ke všem lekcím', 'Neomezený vstup do posilovny'] }
];

export const CONTACT = {
	phone: '+420 734 538 844',
	phoneHref: 'tel:+420734538844',
	email: 'csc.karvina@seznam.cz',
	street: 'Rudé armády 651/19A',
	city: '733 01 Karviná',
	facebook: 'https://www.facebook.com/CSCKarvina',
	instagram: 'https://www.instagram.com/csc_mma'
};
