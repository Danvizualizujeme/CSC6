<div class="bg-black text-white min-h-screen flex flex-col">
  <!-- Hero sekce -->
  <section class="w-full pt-32 pb-8 bg-gradient-to-b from-black to-gray-900 text-left px-6">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold tracking-tight uppercase">KONTAKT</h1>
      <h2 class="text-3xl font-bold text-red-600 uppercase mt-2">CSC MMA CLUB</h2>
      <p class="mt-4 text-gray-200 max-w-lg">Připoj se k nám a začni svou cestu v bojových sportech. Kontaktuj nás pro více informací.</p>
    </div>
  </section>

  <!-- Info boxy -->
  <section class="container mx-auto flex flex-col md:flex-row gap-6 my-8 px-6">
    <!-- Adresa -->
    <div class="flex-1 bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center">
      <svg class="w-8 h-8 text-red-600 mb-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2C8 2 5 6.5 5 9.5c0 4.8 7 12.5 7 12.5s7-7.7 7-12.5C19 6.5 16 2 12 2Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
      <div class="font-semibold text-lg mb-1">Adresa</div>
      <div class="text-gray-400 text-sm text-center">
        Sportovní 123<br />
        Praha 10, 100 00<br />
        Česká republika
      </div>
    </div>
    <!-- Telefon -->
    <div class="flex-1 bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center">
      <svg class="w-8 h-8 text-red-600 mb-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.13.82.36 1.63.7 2.42a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.79.34 1.6.57 2.42.7A2 2 0 0 1 22 16.92Z"/></svg>
      <div class="font-semibold text-lg mb-1">Telefon</div>
      <div class="text-gray-400 text-sm text-center">
        +420 123 456 789<br />
        info@cscmmaclub.cz<br />
        Po-Pá 8:00 - 21:00
      </div>
    </div>
    <!-- Email -->
    <div class="flex-1 bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center">
      <svg class="w-8 h-8 text-red-600 mb-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
      <div class="font-semibold text-lg mb-1">Email</div>
      <div class="text-gray-400 text-sm text-center">
        info@cscmmaclub.cz<br />
        Facebook: cscmmaclub<br />
        Čas odpovědi: do 24 h
      </div>
    </div>
  </section>

  <!-- Formulář + Mapa -->
  <section class="container mx-auto flex flex-col md:flex-row gap-8 px-6 my-10">
    <!-- Formulář -->
    <div class="bg-gray-900 rounded-xl shadow-md p-8 flex-1">
      <h3 class="text-2xl font-bold mb-4 uppercase tracking-tight">Napište <span class="text-red-600">nám</span></h3>
      <form class="flex flex-col gap-4">
        <!-- Formulář bez nastavení -->
        <div class="flex gap-4">
          <input class="flex-1 bg-black bg-opacity-60 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Jméno *" />
          <input class="flex-1 bg-black bg-opacity-60 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Příjmení *" />
        </div>
        <div class="flex gap-4">
          <input class="flex-1 bg-black bg-opacity-60 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Email *" />
          <input class="flex-1 bg-black bg-opacity-60 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Telefon" />
        </div>
        <input class="bg-black bg-opacity-60 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Předmět" />
        <textarea class="bg-black bg-opacity-60 rounded px-3 py-2 text-white min-h-[90px] focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Zpráva..."></textarea>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="souhlas" class="accent-red-600" />
          <label for="souhlas" class="text-sm text-gray-400">Souhlasím se zpracováním osobních údajů *</label>
        </div>
        <button class="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2 font-semibold transition-all duration-200 mt-2 uppercase">
          Odeslat zprávu
        </button>
      </form>
    </div>
    <!-- Mapa + info -->
    <div class="flex-1 flex flex-col gap-6">
      <div class="bg-gray-900 rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-full">
        <svg class="w-12 h-12 text-red-600 mb-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m21 21-6-6"/><circle cx="11" cy="11" r="8"/></svg>
        <div class="text-lg font-semibold mb-1">Interaktivní mapa</div>
        <div class="text-gray-400 text-sm mb-2 text-center">Sportovní 123, Praha 10<br/>50.000000, 14.000000</div>
        <iframe class="w-full h-40 rounded-md mt-3" src="https://maps.google.com/maps?q=Sportovní%20123,%20Praha%2010&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Mapa umístění CSC MMA CLUB"></iframe>
      </div>
      <div class="bg-gray-900 rounded-xl shadow-md p-6">
        <div class="font-semibold mb-2">Otevírací doba</div>
        <div class="flex flex-col gap-1 text-sm">
          <div class="flex justify-between">
            <span>Pondělí – Pátek:</span>
            <span class="text-red-600 font-semibold">8:00 – 21:00</span>
          </div>
          <div class="flex justify-between">
            <span>Sobota:</span>
            <span class="text-red-600 font-semibold">9:00 – 17:00</span>
          </div>
          <div class="flex justify-between">
            <span>Neděle:</span>
            <span class="text-gray-500">Zavřeno</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
