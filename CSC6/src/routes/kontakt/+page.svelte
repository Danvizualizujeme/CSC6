<script lang="ts">
  import { fade } from 'svelte/transition';

  // === Ikony pro infoboxy ===
  const icons = {
    address: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.068 15.068 0 006.59 6.59l2.21-2.21c.27-.27.67-.36.98-.24a10.012 10.012 0 014.28 1.15c.32.1.4.52.1.84l-1.89 1.89c-.52.52-1.28.61-1.87.21-3.69-2.43-6.9-5.64-9.33-9.33-.4-.59-.3-1.35.21-1.87l1.89-1.89c.32-.32.74-.24.84.1a10.012 10.012 0 011.15 4.28c.12.31.03.71-.24.98l-2.21 2.21z"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`
  };

  // === Logika formuláře ===
  let success = false;
  let errorMsg = '';
  const startTs = Date.now();

  async function handleSubmit(event: Event) {
    event.preventDefault();
    errorMsg = '';
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    if (data.get('website')) {
      errorMsg = 'Spam detekován.';
      return;
    }
    const ts = Number(data.get('ts'));
    if (Date.now() - ts < 3000) {
      errorMsg = 'Spam detekován.';
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/mvgbbejz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      const json = await res.json();
      if (res.ok) {
        success = true;
        form.reset();
      } else {
        errorMsg = json.error || 'Nastala chyba, zkuste to prosím znovu.';
      }
    } catch {
      errorMsg = 'Síťová chyba, zkuste to znovu.';
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@300;400;600;700&display=swap');

  .font-heading {
    font-family: 'Bebas Neue', sans-serif;
  }
  .font-body {
    font-family: 'Poppins', sans-serif;
  }
  .bg-dark {
    background-color: #0c0c0c;
  }
</style>

<main class="bg-dark text-white font-body min-h-screen overflow-hidden">
  <header class="text-center py-24 bg-[#111] border-b border-gray-800">
    <div class="container mx-auto px-6 max-w-7xl">
      <h1 class="text-5xl font-heading leading-tight mb-2">
        <span class="text-red-600">KONTAKTUJTE</span> NÁS
      </h1>
      <p class="text-gray-400 text-lg">Máte dotazy, nebo se chcete přihlásit na zkušební trénink?</p>
    </div>
  </header>

  <section class="container mx-auto px-6 py-24 max-w-7xl">
    <div class="bg-[#1a1a1a] p-12 rounded-3xl border border-gray-800 shadow-2xl max-w-4xl mx-auto" in:fade={{ duration: 1000 }}>
      <h3 class="text-3xl font-heading mb-6 text-center">Napište <span class="text-red-600">nám</span></h3>
      {#if success}
        <p class="text-green-400 mb-4 text-center">✅ Zpráva odeslána! Ozveme se vám co nejdříve.</p>
      {/if}
      {#if errorMsg}
        <p class="text-red-500 mb-4 text-center">❌ {errorMsg}</p>
      {/if}
      <form on:submit={handleSubmit} class="flex flex-col gap-6">
        <input name="website" type="text" tabindex="-1" autocomplete="off" class="absolute left-[-9999px]" />
        <input name="ts" type="hidden" value={startTs} />
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="jmeno"
            type="text"
            placeholder="Jméno *"
            required
            class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
          />
          <input
            name="prijmeni"
            type="text"
            placeholder="Příjmení *"
            required
            class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email *"
            required
            class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
          />
          <input
            name="telefon"
            type="tel"
            placeholder="Telefon"
            class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
          />
        </div>
        <input
          name="predmet"
          type="text"
          placeholder="Předmět"
          class="bg-dark border-2 border-gray-700 px-6 py-4 text-white rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Zpráva..."
          required
          class="bg-dark border-2 border-gray-700 px-6 py-4 text-white min-h-[120px] rounded-xl focus:ring-2 focus:ring-red-600 focus:outline-none placeholder:text-gray-500"
        ></textarea>
        <div class="flex items-center gap-4">
          <input name="souhlas" type="checkbox" id="souhlas" required class="accent-red-600 h-5 w-5" />
          <label for="souhlas" class="text-sm text-gray-400">Souhlasím se zpracováním osobních údajů <span class="text-red-600">*</span></label>
        </div>
        <button type="submit" class="bg-red-600 hover:bg-red-700 text-white rounded-full px-12 py-5 font-bold uppercase transition-all duration-300 shadow-lg mt-4 text-lg tracking-wide">
          Odeslat zprávu
        </button>
      </form>
    </div>
  </section>

  <section class="container mx-auto px-6 py-24 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16">
    <div class="bg-[#1a1a1a] p-12 rounded-3xl border border-gray-800 shadow-2xl h-full" in:fade={{ duration: 1000, delay: 200 }}>
      <h3 class="text-3xl font-heading mb-6">Kde nás <span class="text-red-600">najdete</span></h3>
      <p class="text-gray-400 text-lg mb-6">Navštivte nás v naší tělocvičně v centru Karviné. Těšíme se na vaši návštěvu!</p>
      <iframe
        class="w-full h-80 rounded-2xl border border-gray-700 shadow-lg"
        src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Rud%C3%A9%20arm%C3%A1dy%20651/19A%20Karvin%C3%A1%20733%2001+(CSC%20MMA%20CLUB)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        title="Mapa umístění CSC MMA CLUB"
        
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    
    <div class="space-y-8">
      <div class="bg-[#1a1a1a] p-12 rounded-3xl border border-gray-800 shadow-2xl" in:fade={{ duration: 1000, delay: 400 }}>
        <h3 class="text-3xl font-heading mb-6">Kontaktní <span class="text-red-600">údaje</span></h3>
        <div class="flex flex-col gap-4 text-lg">
          <div class="flex items-start gap-4 text-gray-400">
            {@html icons.address}
            <p>Rudé armády 651/19A, Karviná 733 01</p>
          </div>
          <div class="flex items-start gap-4 text-gray-400">
            {@html icons.phone}
            <p>+420 123 456 789</p>
          </div>
          <div class="flex items-start gap-4 text-gray-400">
            {@html icons.mail}
            <p>csc.karvina@seznam.cz</p>
          </div>
        </div>
      </div>

      <div class="bg-[#1a1a1a] p-12 rounded-3xl border border-gray-800 shadow-2xl" in:fade={{ duration: 1000, delay: 600 }}>
        <h3 class="text-3xl font-heading mb-6">Otevírací <span class="text-red-600">doba</span></h3>
        <div class="flex flex-col gap-4 text-lg">
          <div class="flex justify-between items-center pb-2 border-b border-gray-700">
            <span class="text-gray-400">Pondělí – Pátek:</span>
            <span class="text-white font-bold">8:00 – 21:00</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b border-gray-700">
            <span class="text-gray-400">Sobota:</span>
            <span class="text-white font-bold">9:00 – 17:00</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-400">Neděle:</span>
            <span class="text-white font-bold">8:00 – 21:00</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>