<script setup lang="ts">
const logoUrl = 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1749159033614-1749159033526_avatar.jpg'
const heroImage = 'https://images.unsplash.com/photo-1514474959185-5d7b1b1c327a?auto=format&fit=crop&w=1200&q=80'

const offers = [
  {
    title: 'Tynki cementowo-wapienne',
    description: 'Solidne tynkowanie maszynowe i ręczne dla ścian oraz sufitów odpornych na wilgoć i uszkodzenia.',
    image: 'https://images.unsplash.com/photo-1581092334944-7363d0b9e9b7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Gładzie wapienne',
    description: 'Ekologiczne gładzie z naturalnych składników, idealne do sypialni i pomieszczeń dziecięcych.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Ocieplenie i adaptacja poddaszy',
    description: 'Kompleksowa izolacja, zabudowa GK i wykończenie poddasza pod kątem użytkowym.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sufity podwieszane i zabudowa GK',
    description: 'Estetyczne sufity podwieszane oraz funkcjonalne zabudowy karton-gipsowe z oświetleniem.',
    image: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1000&q=80',
  },
]

const highlights = [
  { label: '5.0 / 5', value: '20 opinii w Oferteo' },
  { label: 'Małopolska i Świętokrzyskie', value: 'Obsługa regionu lokalnie' },
  { label: 'Darmowa wycena', value: 'Oferta po zapytaniu online lub wizji lokalnej' },
]

const process = [
  { step: '1', title: 'Analiza zlecenia', detail: 'Przyjmujemy zlecenie i analizujemy zakres prac po zapytaniu lub oględzinach.' },
  { step: '2', title: 'Przygotowanie', detail: 'Organizacja materiałów, zabezpieczenie przestrzeni i przygotowanie harmonogramu.' },
  { step: '3', title: 'Wykonanie', detail: 'Profesjonalne tynkowanie, gładzenie, ocieplanie i wykończenia zgodnie z ustaleniami.' },
  { step: '4', title: 'Odbiór', detail: 'Kontrola jakości, sprzątanie i przekazanie gotowego wnętrza klientowi.' },
]

const galleryImages = [
  {
    src: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852070849-crop-img-0168.jpeg.jpg',
    alt: 'Wykonane tynki maszynowe RN-BUD',
  },
  {
    src: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852076654-crop-img-0166.jpeg.jpg',
    alt: 'Gładzie wapienne wykonane przez RN-BUD',
  },
  {
    src: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852072419-crop-img-0165.jpeg.jpg',
    alt: 'Prace remontowe i wykończeniowe RN-BUD',
  },
  {
    src: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=1000&q=80',
    alt: 'Prace wykończeniowe ścian i sufitów',
  },
  {
    src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    alt: 'Prace budowlane i tynkarskie',
  },
  {
    src: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1000&q=80',
    alt: 'Adaptacja poddasza i sufit podwieszany',
  },
]

const location = {
  address: 'ul. Romana Grodeckiego 131, 32-700 Bochnia',
  city: 'Bochnia, Małopolskie',
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=20.4340420%2C49.985802%2C20.4352420%2C49.986302&layer=mapnik&marker=49.986052%2C20.434642',
  googleMapsEmbed: 'https://www.google.com/maps?q=49.9860337,20.4347081&z=17&output=embed',
}

const contact = {
  email: 'kontakt@rn-bud.com',
  preferred: 'czat, e-mail, telefon',
  oferteo: 'https://www.oferteo.pl/rn-bud-serhii-zosyk/firma/5433282',
  googleMapsReview: 'https://www.google.com/maps/place/RN-BUD+%7C+Tynki+maszynowe,+g%C5%82adzie,+ocieplenia+i+adaptacje+poddaszy/@49.9860371,20.4321332,17z/data=!3m1!4b1!4m6!3m5!1s0x4568a8cefbcb41f:0x3b8fcacdfadd6d02!8m2!3d49.9860337!4d20.4347081!16s%2Fg%2F11md_zyl8w?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
  nip: '8681988843',
  regon: '524615233',
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#0f4c81] selection:text-white">
    <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex container items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
        <a href="#top" class="flex items-center gap-3">
          <img :src="logoUrl" alt="RN-BUD logo" class="h-12 w-12 rounded-full border border-slate-200 object-cover" />
          <div>
            <p class="text-lg font-semibold text-slate-900">RN-BUD</p>
            <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Serhii Zosyk</p>
          </div>
        </a>

        <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#offers" class="transition hover:text-slate-900">Usługi</a>
          <a href="#process" class="transition hover:text-slate-900">Jak działamy</a>
          <a href="#gallery" class="transition hover:text-slate-900">Galeria</a>
          <a href="#contact" class="transition hover:text-slate-900">Kontakt</a>
        </nav>

        <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-primary">Zobacz profil</a>
      </div>
    </header>

    <main class="overflow-hidden" id="top">
      <section class="mx-auto grid container gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-12">
        <div class="space-y-8">
          <span class="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">Tynki • Gładzie • Ocieplenia</span>
          <div class="space-y-6">
            <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">RN-BUD realizuje solidne prace tynkarskie i wykończeniowe w Małopolsce.</h1>
            <p class="max-w-2xl text-lg leading-8 text-slate-600">Wykonujemy tynki cementowo-wapienne, gładzie wapienne, ocieplenia poddaszy oraz sufity podwieszane. Jeśli szukasz rzetelnej budowlanej ekipy, chętnie przygotujemy ofertę i ustalimy termin.</p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" class="btn btn-primary w-full text-center sm:w-auto">Poproś o wycenę</a>
            <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-secondary w-full text-center sm:w-auto">Opinie na Oferteo</a>
          </div>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="rounded-[2rem] bg-slate-950 p-6 text-white card-glow">
              <p class="text-sm uppercase tracking-[0.18em] text-slate-300">Ocena</p>
              <p class="mt-4 text-3xl font-semibold">5.0</p>
              <p class="mt-2 text-sm text-slate-300">20 potwierdzonych opinii</p>
            </div>
            <div class="rounded-[2rem] bg-slate-950 p-6 text-white card-glow">
              <p class="text-sm uppercase tracking-[0.18em] text-slate-300">Region</p>
              <p class="mt-4 text-3xl font-semibold">Małopolska</p>
              <p class="mt-2 text-sm text-slate-300">obsługa także Świętokrzyskie</p>
            </div>
            <div class="rounded-[2rem] bg-slate-950 p-6 text-white card-glow">
              <p class="text-sm uppercase tracking-[0.18em] text-slate-300">Darmowa wycena</p>
              <p class="mt-4 text-3xl font-semibold">Tak</p>
              <p class="mt-2 text-sm text-slate-300">Oferta po zapytaniu lub wizji lokalnej</p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-soft">
          <img :src="heroImage" alt="Zespół RN-BUD pracujący nad wykończeniem wnętrza" class="h-full w-full object-cover" loading="lazy" />
          <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-6 text-white">
            <p class="text-sm uppercase tracking-[0.24em] text-slate-300">RN-BUD</p>
            <h2 class="mt-3 text-2xl font-semibold">Skuteczne wykończenia wnętrz i tynki</h2>
          </div>
        </div>
      </section>

      <section class="bg-slate-50 py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="rounded-[2rem] bg-white p-8 shadow-soft">
              <h2 class="text-3xl font-semibold text-slate-900">O firmie</h2>
              <p class="mt-4 text-lg leading-8 text-slate-600">Nazywam się Serhii Zosyk i prowadzę RN-BUD. Specjalizuję się w kompleksowych pracach wykończeniowych: tynkach cementowo-wapiennych, gładziach wapiennych, ociepleniach poddaszy oraz sufitach podwieszanych. Działam na nowych inwestycjach oraz remontach istniejących budynków.</p>
              <div class="mt-10 grid gap-4 sm:grid-cols-3">
                <div class="rounded-3xl border border-slate-200 p-6">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Rok startu</p>
                  <p class="mt-4 text-3xl font-semibold text-slate-900">2023</p>
                </div>
                <div class="rounded-3xl border border-slate-200 p-6">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Opinie</p>
                  <p class="mt-4 text-3xl font-semibold text-slate-900">20</p>
                </div>
                <div class="rounded-3xl border border-slate-200 p-6">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Ocena</p>
                  <p class="mt-4 text-3xl font-semibold text-slate-900">5.0</p>
                </div>
              </div>
            </div>

            <div class="grid gap-4 rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
              <div>
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Dane firmy</p>
                <p class="mt-4 text-xl font-semibold text-white">RN-BUD Serhii Zosyk</p>
                <p class="mt-2 text-slate-300">ul. Romana Grodeckiego 131, 32-700 Bochnia</p>
              </div>
              <div class="grid gap-3 rounded-3xl bg-slate-950 p-6">
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-400">NIP</p>
                  <p class="mt-3 text-lg font-semibold text-white">8681988843</p>
                </div>
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-400">REGON</p>
                  <p class="mt-3 text-lg font-semibold text-white">524615233</p>
                </div>
                <div>
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Preferowany kontakt</p>
                  <p class="mt-3 text-lg font-semibold text-white">Czat, e-mail, telefon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" class="py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="mb-10 max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Oferta</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Najczęściej realizowane usługi</h2>
            <p class="mt-4 text-slate-600">Pracujemy w zakresie tynków, gładzi, adaptacji poddaszy i sufitów podwieszanych. Wszystkie realizacje wykonujemy solidnie i z dbałością o porządek.</p>
          </div>
          <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            <article v-for="offer in offers" :key="offer.title" class="overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img :src="offer.image" :alt="offer.title" class="h-52 w-full object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-slate-900">{{ offer.title }}</h3>
                <p class="mt-3 text-slate-600">{{ offer.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="process" class="bg-slate-50 py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="mb-10 max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Proces</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Jak pracujemy</h2>
            <p class="mt-4 text-slate-600">Przejrzysty proces wykonawczy daje klientom pewność, że projekt zostanie zakończony terminowo i w najwyższej jakości.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <article v-for="item in process" :key="item.step" class="rounded-[2rem] bg-white p-8 shadow-soft">
              <div class="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0f4c81] text-2xl font-semibold text-white">{{ item.step }}</div>
              <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ item.title }}</h3>
              <p class="mt-3 text-slate-600">{{ item.detail }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="gallery" class="py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="mb-10 max-w-2xl">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Galeria</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Zdjęcia realizacji</h2>
            <p class="mt-4 text-slate-600">Wybrane zdjęcia z prac wykonanych przez RN-BUD oraz inspiracje z Google Images dla estetycznych wykończeń.</p>
          </div>
          <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div v-for="image in galleryImages" :key="image.src" class="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <img :src="image.src" :alt="image.alt" class="h-72 w-full object-cover transition duration-500 hover:scale-105" />
              <div class="p-5">
                <p class="text-slate-700">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-slate-50 py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
            <div class="rounded-[2rem] bg-white p-8 shadow-soft">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Lokalizacja</p>
              <h2 class="mt-3 text-3xl font-semibold text-slate-900">Biuro RN-BUD w Bochni</h2>
              <p class="mt-4 text-slate-600">Jeśli mieszkasz w Małopolsce lub Świętokrzyskim, możesz skontaktować się z nami bezpośrednio przez profil Oferteo lub mailowo.</p>
              <div class="mt-10 grid gap-4 sm:grid-cols-2">
                <div class="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Adres</p>
                  <p class="mt-3 text-base font-semibold text-slate-900">{{ location.address }}</p>
                </div>
                <div class="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Miasto</p>
                  <p class="mt-3 text-base font-semibold text-slate-900">{{ location.city }}</p>
                </div>
              </div>
            </div>
            <div class="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <iframe
                title="RN-BUD location"
                width="100%"
                height="420"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="location.mapUrl"
                class="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
            <div class="space-y-6">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]/60">Kontakt</p>
              <h2 class="text-3xl font-semibold">Potrzebujesz wyceny lub opinii?</h2>
              <p class="max-w-2xl text-slate-300">Napisz lub zadzwoń, a przygotujemy szczegółową ofertę. Jeśli zrobiliśmy już dla Ciebie prace, zostaw opinię na Oferteo lub w Google Maps, aby inni mogli nas znaleźć.</p>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-3xl bg-slate-950 p-6">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-400">E-mail</p>
                  <p class="mt-3 text-lg font-semibold text-white">{{ contact.email }}</p>
                </div>
                <div class="rounded-3xl bg-slate-950 p-6">
                  <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Preferowany kontakt</p>
                  <p class="mt-3 text-lg font-semibold text-white">{{ contact.preferred }}</p>
                </div>
              </div>
            </div>
            <div class="grid gap-4 rounded-3xl bg-slate-950 p-6 text-slate-300">
              <div class="rounded-3xl bg-slate-900 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">NIP</p>
                <p class="mt-3 text-lg font-semibold text-white">{{ contact.nip }}</p>
              </div>
              <div class="rounded-3xl bg-slate-900 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">REGON</p>
                <p class="mt-3 text-lg font-semibold text-white">{{ contact.regon }}</p>
              </div>
              <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-primary">Zostaw opinię na Oferteo</a>
              <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener" class="btn btn-outline-accent">Zostaw opinię w Google Maps</a>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-slate-50 py-16">
        <div class="mx-auto container px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div class="space-y-6 rounded-[2rem] bg-white p-8 shadow-soft">
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Opinie Google Maps</p>
              <h2 class="text-3xl font-semibold text-slate-900">Zobacz naszą lokalizację i zostaw ocenę</h2>
              <p class="text-slate-600">Aby pomóc nam rozwijać RN-BUD, prosimy o ocenę w Google Maps. Twoja opinia jest ważna zarówno dla nas, jak i dla innych klientów szukających rzetelnych wykonawców.</p>
              <div class="flex flex-col gap-4 sm:flex-row">
                <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener" class="btn btn-primary">Zostaw opinię w Google Maps</a>
                <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener" class="btn btn-secondary">Odwiedź Google Maps</a>
              </div>
            </div>
            <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <iframe
                title="RN-BUD Google Maps"
                width="100%"
                height="420"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="location.googleMapsEmbed"
                class="h-full w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-200 bg-white py-8">
      <div class="mx-auto container px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 RN-BUD Serhii Zosyk. Wykonujemy tynki, gładzie i adaptacje poddaszy w Małopolsce.
      </div>
    </footer>
  </div>
</template>
