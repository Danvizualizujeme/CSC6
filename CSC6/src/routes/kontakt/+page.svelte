<script lang="ts">
let name = '';
let email = '';
let message = '';
let sent = false;

function handleSubmit(e: Event) {
  e.preventDefault();
  // zde přidej vlastní email API podle potřeby
  sent = true;
  setTimeout(() => { sent = false }, 3500);
}
</script>

<!-- Hero sekce -->
<section class="relative h-[350px] md:h-[450px] w-full flex items-center justify-center">
  <img
    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80"
    alt="Kontakt"
    class="absolute inset-0 w-full h-full object-cover brightness-50"
  />
  <h1 class="relative z-10 text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg uppercase tracking-wide">
    Kontakt
  </h1>
</section>

<!-- Kontakt obsah -->
<section class="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
  <!-- Kontaktní údaje + mapa -->
  <div>
    <h2 class="text-2xl font-bold text-red-600 mb-4">Najdeš nás zde:</h2>
    <div class="mb-6">
      <strong>Adresa:</strong>  
      <span class="text-gray-200">Ulice 123, 110 00 Praha</span><br/>
      <strong>Telefon:</strong>  
      <span class="text-gray-200">+420 123 456 789</span><br/>
      <strong>Email:</strong>  
      <span class="text-gray-200">info@cscmma.cz</span>
    </div>
    <iframe
      class="rounded-xl w-full h-64 border-2 border-red-600"
      src="https://www.openstreetmap.org/export/embed.html?bbox=14.42076%2C50.08804%2C14.42576%2C50.09204&amp;layer=mapnik"
      style="border:0;"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="Mapa umístění CSC MMA Clubu"
    ></iframe>
  </div>

  <!-- Formulář -->
  <form class="bg-gray-900 rounded-xl p-8 shadow-md space-y-4" on:submit|preventDefault={handleSubmit}>
    <h2 class="text-2xl font-bold text-red-600 mb-4">Napiš nám</h2>
    <input class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" type="text" bind:value={name} placeholder="Tvé jméno" required />
    <input class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" type="email" bind:value={email} placeholder="Tvůj e-mail" required />
    <textarea class="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none" rows="4" bind:value={message} placeholder="Zpráva" required></textarea>
    <button class="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded transition w-full" type="submit">
      Odeslat
    </button>
    {#if sent}
      <div class="text-green-500 font-semibold text-center mt-2">Zpráva odeslána!</div>
    {/if}
  </form>
</section>
