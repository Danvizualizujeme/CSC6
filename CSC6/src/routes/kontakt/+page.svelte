<!-- src/routes/kontakt/+page.svelte -->
<script lang="ts">
  // Stav odeslání / chyby
  let success = false;
  let errorMsg = '';

  // AJAX‑ový submit na Formspree
  async function handleSubmit(event: Event) {
    event.preventDefault();
    errorMsg = '';
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/manbbnjp', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      const json = await res.json();
      if (res.ok) {
        success = true;
        form.reset();
      } else {
        errorMsg = json.error || 'Nastala chyba, zkuste to prosím znovu.';
      }
    } catch {
      errorMsg = 'Síťová chyba, zkuste to prosím znovu.';
    }
  }
</script>

<main class="bg-black text-white min-h-screen overflow-x-hidden">

  <!-- HERO sekce -->
  <section
    class="relative h-[600px] bg-cover bg-center -mt-24"
    style="background-image: url('https://images.unsplash.com/photo-1606166325683-c9b9f598b48e?auto=format&fit=crop&w=1400&q=80')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 max-w-4xl">
      <h1 class="text-5xl font-bold leading-tight">KONTAKT</h1>
      <h2 class="text-3xl font-bold text-red-600 mt-2">CSC MMA CLUB</h2>
      <p class="mt-4 text-lg text-gray-200">
        Připoj se k nám a začni svou cestu v bojových sportech. Kontaktuj nás pro více informací.
      </p>
    </div>
  </section>

  <!-- Info boxy -->
  <section class="container mx-auto grid md:grid-cols-3 gap-6 px-6 py-16 max-w-6xl">
    <!-- Adresa -->
    <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
      <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M12 2C8 2 5 6.5 5 9.5c0 4.8 7 12.5 7 12.5s7-7.7 7-12.5C19 6.5 16 2 12 2Z"/>
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      </div>
      <h4 class="text-xl font-semibold mb-2">Adresa</h4>
      <p class="text-gray-300 text-sm leading-relaxed">
        Sportovní 123<br />Praha 10, 100 00<br />Česká republika
      </p>
    </div>

    <!-- Telefon -->
    <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
      <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.13.82.36 1.63.7 2.42a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.79.34 1.6.57 2.42.7A2 2 0 0 1 22 16.92Z"/>
        </svg>
      </div>
      <h4 class="text-xl font-semibold mb-2">Telefon</h4>
      <p class="text-gray-300 text-sm leading-relaxed">
        +420 123 456 789<br />
        info@cscmmaclub.cz<br />
        Po–Pá 8:00 – 21:00
      </p>
    </div>

    <!-- Email -->
    <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
      <div class="inline-flex items-center justify-center bg-red-600 rounded-full w-12 h-12 mb-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24">
          <path d="M3 8l9 6 9-6m-18 0a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h4 class="text-xl font-semibold mb-2">Email & sociální sítě</h4>
      <p class="text-gray-300 text-sm leading-relaxed">
        info@cscmmaclub.cz<br />
        Facebook: cscmmaclub<br />
        Odpověď do 24 h
      </p>
    </div>
  </section>

  <!-- Formulář + Mapa -->
  <section class="container mx-auto flex flex-col md:flex-row gap-8 px-6 max-w-6xl">
    <!-- Formulář -->
    <div class="group flex-1 bg-black p-8 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
      <h3 class="text-2xl font-bold mb-4 uppercase tracking-tight">
        Napište <span class="text-red-600">nám</span>
      </h3>

      {#if success}
        <p class="text-green-400 mb-4">Zpráva odeslána!</p>
      {/if}

      {#if errorMsg}
        <p class="text-red-500 mb-4">{errorMsg}</p>
      {/if}

      <form on:submit={handleSubmit} class="flex flex-col gap-4">
        <!-- vypnutí captcha -->
        <input type="hidden" name="_captcha" value="false" />

        <div class="flex gap-4">
          <input
            name="jmeno"
            type="text"
            placeholder="Jméno *"
            required
            class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            name="prijmeni"
            type="text"
            placeholder="Příjmení *"
            required
            class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <div class="flex gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email *"
            required
            class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            name="telefon"
            type="tel"
            placeholder="Telefon"
            class="flex-1 bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        </div>

        <input
          name="predmet"
          type="text"
          placeholder="Předmět"
          class="bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Zpráva..."
          required
          class="bg-black bg-opacity-60 border border-gray-700 px-3 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
        ></textarea>

        <div class="flex items-center gap-2">
          <input
            id="souhlas"
            name="souhlas"
            type="checkbox"
            required
            class="accent-red-600"
          />
          <label for="souhlas" class="text-sm text-gray-400">
            Souhlasím se zpracováním osobních údajů *
          </label>
        </div>

        <button
          type="submit"
          class="bg-red-600 hover:bg-red-700 text-white rounded-xl px-6 py-2 font-semibold uppercase transition-all duration-200 mt-2"
        >
          Odeslat zprávu
        </button>
      </form>
    </div>

    <!-- Mapa + otevírací doba -->
    <div class="flex-1 flex flex-col gap-6">
      <div class="group bg-black p-8 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center h-full">
        <div class="text-lg font-semibold mb-1">Interaktivní mapa</div>
        <div class="text-gray-400 text-sm mb-2 text-center">
          Sportovní 123, Praha 10<br />
          50.000000, 14.000000
        </div>
        <iframe
          class="w-full h-40 rounded-lg border border-gray-700"
          src="https://maps.google.com/maps?q=Sportovní%20123,%20Praha%2010&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Mapa umístění CSC MMA CLUB"
        ></iframe>
      </div>
      <div class="group bg-black p-6 rounded-lg border border-gray-700 transform transition hover:scale-105 hover:shadow-lg">
        <div class="font-semibold mb-2">Otevírací doba</div>
        <div class="flex flex-col gap-1 text-sm">
          <div class="flex justify-between">
            <span>Pondělí – Pátek:</span>
            <span class="text-red-600 font-semibold">8:00 – 21:00</span>
          </div>
          <div class="flex justify-between">
            <span>Sobota:</span>
            <span class="text-red-600 font-semibold">9:00 – 17:00</span>
          </div>
          <div class="flex justify-between">
            <span>Neděle:</span>
            <span class="text-gray-500">Zavřeno</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Odsazení dole -->
  <div class="h-24"></div>
</main>

<style>
  :global(html) {
    scroll-padding-top: 6rem;
  }
</style>
