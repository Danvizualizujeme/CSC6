<script lang="ts">
	import { DISCIPLINES } from '$lib/data';

	let status = $state<'idle' | 'sending' | 'ok' | 'err'>('idle');
	let errorMsg = $state('');
	const startTs = Date.now();

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		const data = new FormData(form);

		// Ochrana proti spamu: skryté pole a minimální doba vyplnění
		if (data.get('website') || Date.now() - Number(data.get('ts')) < 3000) {
			status = 'err';
			errorMsg = 'Zprávu se nepodařilo odeslat. Zkuste to prosím za chvíli znovu.';
			return;
		}

		status = 'sending';
		try {
			const res = await fetch('https://formspree.io/f/mvgbbejz', {
				method: 'POST',
				body: data,
				headers: { Accept: 'application/json' }
			});
			const json = await res.json().catch(() => ({}));
			if (res.ok) {
				status = 'ok';
				form.reset();
			} else {
				status = 'err';
				errorMsg = json.error || 'Nastala chyba, zkuste to prosím znovu.';
			}
		} catch {
			status = 'err';
			errorMsg = 'Síťová chyba, zkuste to prosím znovu.';
		}
	}
</script>

<form class="form" onsubmit={submit}>
	<input class="hp" name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true" />
	<input name="ts" type="hidden" value={startTs} />

	<div class="form__row">
		<label class="field">
			<span>Jméno *</span>
			<input name="jmeno" type="text" autocomplete="given-name" required />
		</label>
		<label class="field">
			<span>Příjmení *</span>
			<input name="prijmeni" type="text" autocomplete="family-name" required />
		</label>
	</div>
	<div class="form__row">
		<label class="field">
			<span>E-mail *</span>
			<input name="email" type="email" autocomplete="email" required />
		</label>
		<label class="field">
			<span>Telefon</span>
			<input name="telefon" type="tel" autocomplete="tel" />
		</label>
	</div>
	<label class="field">
		<span>Co chceš trénovat</span>
		<select name="disciplina">
			<option value="">Ještě nevím, poradíte mi</option>
			{#each DISCIPLINES as d}
				<option>{d.name}</option>
			{/each}
			<option>Přípravka / junioři (děti)</option>
		</select>
	</label>
	<label class="field">
		<span>Zpráva *</span>
		<textarea name="message" rows="4" required placeholder="Např. kdy můžu přijít poprvé a co si mám vzít s sebou?"
		></textarea>
	</label>
	<p class="consent">
		<span
			>Odesláním zprávy berete na vědomí, že vaše údaje použijeme k odpovědi podle
			<a href="/ochrana-osobnich-udaju#dotazy" style="color:var(--text)">zásad ochrany osobních údajů</a>.</span
		>
	</p>

	{#if status === 'ok'}
		<p class="form__msg form__msg--ok" role="status">Díky, zpráva dorazila. Ozveme se ti co nejdřív.</p>
	{:else if status === 'err'}
		<p class="form__msg form__msg--err" role="alert">{errorMsg}</p>
	{/if}

	<div>
		<button class="btn-pill btn-pill--red" type="submit" disabled={status === 'sending'}>
			<span>{status === 'sending' ? 'Odesílám…' : 'Odeslat zprávu'}</span>
			<span class="btn-pill__icon"><svg class="icon" aria-hidden="true"><use href="#i-arrow" /></svg></span>
		</button>
	</div>
</form>
