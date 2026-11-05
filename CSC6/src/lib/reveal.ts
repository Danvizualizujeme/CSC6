// Svelte akce pro jemné animace při scrollu.
// use:reveal      – prvek se při vstupu do okna vysune a zprůhlední (třída .is-in)
// use:wordReveal  – text se rozsvěcuje slovo po slovu podle polohy na obrazovce

const reduced = () =>
	typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function reveal(node: HTMLElement, delay = 0) {
	node.classList.add('reveal');
	if (delay) node.style.transitionDelay = `${delay}ms`;
	if (reduced() || typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-in');
		return {};
	}
	const io = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('is-in');
					io.disconnect();
				}
			}
		},
		{ rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);
	return { destroy: () => io.disconnect() };
}

export function wordReveal(node: HTMLElement) {
	if (reduced()) return {};
	const words = node.textContent?.trim().split(/\s+/) ?? [];
	node.setAttribute('aria-label', node.textContent?.trim() ?? '');
	node.innerHTML = words.map((w) => `<span aria-hidden="true">${w}</span>`).join(' ');
	const spans = Array.from(node.querySelectorAll('span'));

	let raf = 0;
	const update = () => {
		raf = 0;
		const r = node.getBoundingClientRect();
		const vh = window.innerHeight;
		// 0 když je horní hrana textu ve 85 % výšky okna, 1 když je ve 35 %
		const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5 + r.height * 0.5)));
		const lit = Math.round(p * spans.length);
		spans.forEach((s, i) => s.classList.toggle('is-on', i < lit));
	};
	const onScroll = () => {
		if (!raf) raf = requestAnimationFrame(update);
	};
	update();
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll);
	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (raf) cancelAnimationFrame(raf);
		}
	};
}
