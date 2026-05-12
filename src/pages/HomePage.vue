<script setup lang="ts">
import { galleryCategories } from '../data/gallery'

const logoUrl = 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1749159033614-1749159033526_avatar.jpg'
const heroImage = 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852070849-crop-img-0168.jpeg.jpg'

const heroHighlights = [
  { title: 'Ocena', value: '5.0', subtitle: '20 potwierdzonych opinii' },
  { title: 'Region', value: 'Małopolska', subtitle: 'obsługa także Świętokrzyskie' },
  { title: 'Darmowa wycena', value: 'Tak', subtitle: 'po zapytaniu lub wizji lokalnej' },
]

const offers = [
  {
    title: 'Tynki cementowo-wapienne',
    description: 'Wysokiej trwałości tynki odporne na uszkodzenia mechaniczne i wilgoć. Nadają się do wnętrz i na zewnątrz oraz tworzą zdrowy mikroklimat.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852070849-crop-img-0168.jpeg.jpg',
  },
  {
    title: 'Gładzie wapienne',
    description: 'Naturalne gładzie odporne na grzyby i pleśń, idealne do sypialni i pomieszczeń dziecięcych. Przygotowuję powierzchnię do malowania najwyższej jakości.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852076654-crop-img-0166.jpeg.jpg',
  },
  {
    title: 'Ocieplenie i adaptacja poddaszy',
    description: 'Profesjonalna izolacja termiczna i funkcjonalna adaptacja poddasza. Przygotowuję przestrzeń do użytkowania jako sypialnia, biuro lub pokój dziecięcy.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852072419-crop-img-0165.jpeg.jpg',
  },
  {
    title: 'Sufity podwieszane',
    description: 'Montaż lekkich sufitów podwieszanych, które poprawiają akustykę i ukrywają instalacje. Można tworzyć nowoczesne aranżacje z oświetleniem LED.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1751785555737-crop-img-1660.jpg',
  },
]

const aboutFacts = [
  { label: 'Rok startu', value: '2023' },
  { label: 'Opinie', value: '20' },
  { label: 'Ocena', value: '5.0' },
]

const companyDetails = [
  { label: 'NIP', value: '8681988843' },
  { label: 'REGON', value: '524615233' },
]

const processSteps = [
  { step: '1', title: 'Analiza zlecenia', detail: 'Przyjmujemy zlecenie i analizujemy zakres prac po zapytaniu lub oględzinach.' },
  { step: '2', title: 'Przygotowanie', detail: 'Organizacja materiałów, zabezpieczenie przestrzeni i przygotowanie harmonogramu.' },
  { step: '3', title: 'Wykonanie', detail: 'Profesjonalne tynkowanie, gładzenie, ocieplanie i wykończenia zgodnie z ustaleniami.' },
  { step: '4', title: 'Odbiór', detail: 'Kontrola jakości, sprzątanie i przekazanie gotowego wnętrza klientowi.' },
]

const location = {
  address: 'ul. Romana Grodeckiego 131, 32-700 Bochnia',
  city: 'Bochnia, Małopolskie',
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=20.4340420%2C49.985802%2C20.4352420%2C49.986302&layer=mapnik&marker=49.986052%2C20.434642',
  googleMapsEmbed: 'https://www.google.com/maps?q=49.9860337,20.4347081&z=17&output=embed',
}

const contact = {
  email: 'serhii.zosyk@rn-bud.pl',
  phone: '+48123456789',
  preferred: 'Czat, e-mail, telefon',
  oferteo: 'https://www.oferteo.pl/rn-bud-serhii-zosyk/firma/5433282',
  googleMapsReview: 'https://www.google.com/maps/place/RN-BUD+%7C+Tynki+maszynowe,+g%C5%82adzie,+ocieplenia+i+adaptacje+poddaszy/@49.9860371,20.4321332,17z/data=!3m1!4b1!4m6!3m5!1s0x4568a8cefbcb41f:0x3b8fcacdfadd6d02!8m2!3d49.9860337!4d20.4347081!16s%2Fg%2F11md_zyl8w?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
  nip: '8681988843',
  regon: '524615233',
}
</script>

<template>
  <div>
    <section class="mx-auto grid container gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-12">
      <div class="space-y-8">
        <span
          class="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 border border-slate-200">Tynki
          • Gładzie • Ocieplenia</span> 
        <div class="space-y-6">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">RN-BUD realizuje
            solidne prace tynkarskie i wykończeniowe w Małopolsce.</h1>
          <p class="max-w-2xl text-lg leading-8 text-slate-600">Wykonujemy tynki cementowo-wapienne, gładzie wapienne,
            ocieplenia poddaszy oraz sufity podwieszane. Jeśli szukasz rzetelnej budowlanej ekipy, chętnie przygotujemy
            ofertę i ustalimy termin.</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" class="btn btn-primary w-full text-center sm:w-auto">Poproś o wycenę</a>
          <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener"
            class="btn btn-secondary w-full text-center sm:w-auto">Opinie na Oferteo</a>
        </div>
        <!-- grid grid-cols-1 gap-4 sm:grid-cols-3 -->
        <div class="flex flex-wrap xl:flex-nowrap gap-4">
          <div v-for="item in heroHighlights" :key="item.title"
            class="rounded-[2rem] bg-slate-900 p-6 text-white card-glow wrap-break-word w-full">
            <p class="text-sm uppercase tracking-[0.18em] text-slate-300">{{ item.title }}</p>
            <p class="mt-4 text-3xl font-semibold">{{ item.value }}</p>
            <p class="mt-2 text-sm text-slate-300 whitespace-normal wrap-break-word">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-soft">
        <img :src="heroImage" alt="Zespół RN-BUD pracujący nad wykończeniem wnętrza" class="h-full w-full object-cover"
          loading="lazy" />
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
            <p class="mt-4 text-lg leading-8 text-slate-600">Nazywam się Serhii Zosyk i specjalizuję się w kompleksowych pracach wykończeniowych oraz adaptacyjnych. Posiadam wieloletnie doświadczenie w branży budowlanej, dzięki czemu oferuję profesjonalne wykonanie usług z wykorzystaniem sprawdzonych materiałów i nowoczesnych technologii. Gwarantuję solidność, dokładność i terminowość. Pracuję zarówno przy nowych inwestycjach, jak i remontach obiektów już istniejących.</p>
            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div v-for="fact in aboutFacts" :key="fact.label" class="rounded-3xl border border-slate-200 bg-slate-100 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-500">{{ fact.label }}</p>
                <p class="mt-4 text-3xl font-semibold text-slate-900">{{ fact.value }}</p>
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
              <div v-for="item in companyDetails" :key="item.label">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">{{ item.label }}</p>
                <p class="mt-3 text-lg font-semibold text-white">{{ item.value }}</p>
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
          <p class="mt-4 text-slate-600">Pracujemy w zakresie tynków, gładzi, adaptacji poddaszy i sufitów
            podwieszanych. Wszystkie realizacje wykonujemy solidnie i z dbałością o porządek.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <article v-for="offer in offers" :key="offer.title"
            class="overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
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
          <p class="mt-4 text-slate-600">Przejrzysty proces wykonawczy daje klientom pewność, że projekt zostanie
            zakończony terminowo i w najwyższej jakości.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="step in processSteps" :key="step.step" class="rounded-[2rem] bg-white p-8 shadow-soft">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-3xl bg-[#0f4c81] text-2xl font-semibold text-white">
              {{ step.step }}</div>
            <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ step.title }}</h3>
            <p class="mt-3 text-slate-600">{{ step.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="gallery" class="py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Galeria</p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">Zdjęcia realizacji</h2>
          <p class="mt-4 text-slate-600">Kliknij kategorię, aby przejść do osobnej strony galerii i obejrzeć zdjęcia w
            powiększeniu.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="category in galleryCategories" :key="category.id"
            class="overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <router-link :to="`/gallery/${category.id}`" class="block">
              <img :src="category.cover" :alt="category.title" class="h-72 w-full object-cover" />
              <div class="p-6">
                <h3 class="text-xl font-semibold text-slate-900">{{ category.title }}</h3>
                <p class="mt-3 text-slate-600">{{ category.subtitle }}</p>
              </div>
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div class="space-y-6 rounded-[2rem] bg-white p-8 shadow-soft">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Opinie Google Maps</p>
            <h2 class="text-3xl font-semibold text-slate-900">Zobacz naszą lokalizację i zostaw ocenę</h2>
            <p class="text-slate-600">Aby pomóc nam rozwijać RN-BUD, prosimy o ocenę w Google Maps. Twoja opinia jest
              ważna zarówno dla nas, jak i dla innych klientów szukających rzetelnych wykonawców.</p>
            <div class="flex flex-col gap-4 sm:flex-row">
              <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener"
                class="btn btn-primary">Zostaw opinię w Google Maps</a>
              <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener"
                class="btn btn-secondary">Odwiedź Google Maps</a>
            </div>
          </div>
          <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <iframe title="RN-BUD Google Maps" width="100%" height="420" frameborder="0" scrolling="no" marginheight="0"
              marginwidth="0" :src="location.googleMapsEmbed" class="h-full w-full"></iframe>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
          <div class="space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Kontakt</p>
            <h2 class="text-3xl font-semibold">Potrzebujesz wyceny lub opinii?</h2>
            <p class="text-slate-300">Napisz lub zadzwoń, a przygotujemy szczegółową ofertę. Jeśli zrobiliśmy dla Ciebie prace, zostaw opinię na Oferteo lub w Google Maps, aby inni mogli nas znaleźć.</p>
            
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div class="rounded-3xl bg-slate-950 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Telefon</p>
                <p class="mt-3 text-lg font-semibold text-white">{{ contact.phone }}</p>
              </div>
              <div class="rounded-3xl bg-slate-950 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">E-mail</p>
                <p class="mt-3 text-lg font-semibold text-white">{{ contact.email }}</p>
              </div>
              <div class="rounded-3xl bg-slate-950 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-400">Adres</p>
                <p class="mt-3 text-lg font-semibold text-white">ul. Romana Grodeckiego 131, 32-700 Bochnia</p>
              </div>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <a :href="`tel:${contact.phone}`" class="btn btn-primary text-center">Zadzwoń do nas</a>
              <a :href="`mailto:${contact.email}`" class="btn btn-secondary text-center">Napisz do nas</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
