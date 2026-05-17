<script setup lang="ts">
import offer1Img from '@assets/offer1.jpg';
import offer2Img from '@assets/offer2.jpg';
import offer3Img from '@assets/offer3.jpg';

const heroHighlights = [
  { title: 'Darmowa wycena', value: 'Tak', subtitle: 'po zapytaniu lub wizji lokalnej' },
  { title: 'Region', value: 'Małopolska', subtitle: 'Bochnia, Wieliczka, Gdów, Brzesko, Niepołomice' },
  { title: 'Ocena', value: '5.0 ★', subtitle: '20+ potwierdzonych opinii' },
]


const offers = [
  {
    title: 'Tynki cementowo-wapienne',
    description: 'Wysokiej trwałości tynki odporne na uszkodzenia mechaniczne i wilgoć. Nadają się do wnętrz i na zewnątrz oraz tworzą zdrowy mikroklimat.',
    image: offer1Img,
    galleryFolder: 'tynki',
  },
  {
    title: 'Gładzie wapienne',
    description: 'Naturalne gładzie odporne na grzyby i pleśń, idealne do sypialni i pomieszczeń dziecięcych. Przygotowujemy powierzchnię do malowania najwyższej jakości.',
    image: offer2Img,
    galleryFolder: 'gładzie',
  },
  {
    title: 'Ocieplenie i adaptacja poddaszy, sufity podwieszane, zabudowy GK',
    description: 'Profesjonalna izolacja termiczna i funkcjonalna adaptacja poddasza. ',
    image: offer3Img,
    galleryFolder: 'ocieplenie',
  }
]

const aboutFacts = [
  { label: 'Rok startu', value: '2023' },
  { label: 'Opinie', value: '20' },
  { label: 'Ocena', value: '5.0 ★' },
]

const processSteps = [
  { step: '1', title: 'Analiza zlecenia', detail: 'Przyjmujemy zlecenie i analizujemy zakres prac po zapytaniu lub oględzinach.' },
  { step: '2', title: 'Przygotowanie', detail: 'Organizacja materiałów, zabezpieczenie przestrzeni i przygotowanie harmonogramu.' },
  { step: '3', title: 'Wykonanie', detail: 'Profesjonalne tynkowanie, gładzenie, ocieplanie i wykończenia zgodnie z ustaleniami.' },
  { step: '4', title: 'Odbiór', detail: 'Kontrola jakości, sprzątanie i przekazanie gotowego wnętrza klientowi.' },
]

const testimonials = [
  {
    quote: 'Bardzo fachowo i solidnie wykonana praca. Tynki i gładzie świetnie zrobione. Fachowe doradztwo, rzeczowa wycena, terminowe wykonanie i świetne efekty. Polecam serdecznie.',
    author: 'Ewelina M.',
    date: 'Luty 2026',
    service: 'Tynki i gładzie',
  },
  {
    quote: 'Z całego serca polecam. Kontakt z Serhii super. Tynki cementowo-wapienne wyszły super, jesteśmy bardzo zadowoleni. Oby więcej takich fachowców, inni mogą się tylko uczyć.',
    author: 'M.M.',
    date: 'Sierpień 2025',
    service: 'Tynki cementowo-wapienne',
  },
  {
    quote: 'Usługa wykonana bardzo starannie. Serhii potrafi doradzić w kwestiach technicznych, co jest bardzo cenne. Profesjonalne podejście na każdym etapie. Polecam.',
    author: 'Sebastian M.',
    date: 'Sierpień 2025',
    service: 'Prace wykończeniowe',
  },
]

const contact = {
  email: 'robimynajlepiej@gmail.com',
  phone: '+48733421485',
  preferred: 'Czat, e-mail, telefon',
  oferteo: 'https://www.oferteo.pl/rn-bud-serhii-zosyk/firma/5433282',
  googleMapsReview: 'https://www.google.com/maps/place/RN-BUD+%7C+Tynki+maszynowe,+g%C5%82adzie,+ocieplenia+i+adaptacje+poddaszy/@49.9860371,20.4321332,17z/data=!3m1!4b1!4m6!3m5!1s0x4568a8cefbcb41f:0x3b8fcacdfadd6d02!8m2!3d49.9860337!4d20.4347081!16s%2Fg%2F11md_zyl8w?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D',
  nip: '8681988843',
  regon: '524615233',
}
</script>

<template>
  <div>

    <!-- ─── HERO ───────────────────────────────────────────────────── -->
    <section class="mx-auto grid container gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-12">
      <div class="space-y-8">
        <span
          class="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">Tynki
          • Gładzie • Ocieplenia</span>
        <div class="space-y-6">
          <h1 class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">RN-BUD realizuje
            solidne prace tynkarskie i wykończeniowe w Małopolsce.</h1>
          <p class="max-w-2xl text-lg leading-8 text-slate-600">Wykonujemy tynki cementowo-wapienne, gładzie wapienne,
            ocieplenia i adaptację poddaszy oraz sufity podwieszane. Jeśli szukasz rzetelnej budowlanej ekipy, chętnie
            przygotujemy
            ofertę i ustalimy termin.</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" class="btn btn-primary w-full text-center sm:w-auto">Poproś o wycenę</a>
          <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener"
            class="btn btn-secondary w-full text-center sm:w-auto">Opinie na Oferteo</a>
        </div>
        <!-- grid grid-cols-1 gap-4 sm:grid-cols-3 -->
        <div class="flex flex-wrap gap-4 xl:flex-nowrap">
          <div v-for="item in heroHighlights" :key="item.title"
            class="card-glow w-full rounded-3xl border border-slate-200 bg-white p-6">
            <p class="text-sm uppercase tracking-[0.18em] text-slate-500">{{ item.title }}</p>
            <p class="mt-4 text-3xl font-semibold text-slate-900">{{ item.value }}</p>
            <p class="mt-2 text-sm text-slate-600 whitespace-normal wrap-break-word">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="hidden sm:block relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <img src="@assets/heroImage.JPG" alt="Zespół RN-BUD pracujący nad wykończeniem wnętrza"
          class="h-full w-full object-cover" loading="lazy" />
        <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/95 to-transparent p-6 text-white">
          <p class="text-sm uppercase tracking-[0.24em] text-slate-300">RN-BUD</p>
          <h2 class="mt-3 text-2xl font-semibold">Skuteczne wykończenia wnętrz i tynki</h2>
        </div>
      </div>
    </section>

    <!-- ─── ABOUT ──────────────────────────────────────────────────── -->
    <section class="bg-slate-50 py-10 sm:py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-white p-8 shadow-soft">
          <h2 class="text-3xl font-semibold text-slate-900">O firmie</h2>
          <p class="mt-4 text-lg leading-8 text-slate-600">
            Nazywam się Serhii Zosyk i specjalizuję się w kompleksowych pracach wykończeniowych oraz adaptacyjnych.
            Posiadam wieloletnie doświadczenie w branży budowlanej, dzięki czemu oferuję profesjonalne wykonanie usług z
            wykorzystaniem sprawdzonych materiałów i nowoczesnych technologii. Gwarantuję solidność, dokładność i
            terminowość. Pracuję zarówno przy nowych inwestycjach, jak i remontach obiektów już istniejących.
            <br /><br />
            Firma RN-BUD działa od {{ aboutFacts[0]?.value }} roku, zdobywając zaufanie klientów, co potwierdza {{
              aboutFacts[1]?.value }}+ pozytywnych opinii oraz najwyższa ocena {{ aboutFacts[2]?.value }}. Stawiamy na
            jakość, terminowość i zadowolenie klienta.
          </p>
        </div>
      </div>
    </section>

    <!-- ─── SERVICES ──────────────────────────────────────────────── -->
    <section id="offers" class="py-10 sm:py-16 bg-white">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-blue">Oferta</p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">Nasze usługi</h2>
        </div>
        <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <article v-for="offer in offers" :key="offer.title"
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img :src="offer.image" :alt="offer.title" class="h-52 w-full object-cover" />
            <div class="p-6 flex flex-col h-full">
              <h3 class="text-lg font-semibold text-slate-900">{{ offer.title }}</h3>
              <p class="mt-3 text-sm text-slate-600 leading-6">{{ offer.description }}</p>
              <router-link :to="{ path: '/gallery/realizacje', query: { folder: offer.galleryFolder } }"
                class="mt-3 text-sm font-semibold text-[#0a3357]">Otwórz galerię →</router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── PROCESS ───────────────────────────────────────────────── -->
    <section id="process" class="bg-slate-50 py-10 sm:py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-blue">Proces</p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">Jak pracujemy</h2>
          <p class="mt-4 text-slate-600">Przejrzysty proces wykonawczy daje klientom pewność, że projekt zostanie
            zakończony terminowo i w najwyższej jakości.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="step in processSteps" :key="step.step"
            class="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a3357] text-2xl font-semibold text-white">
              {{ step.step }}</div>
            <h3 class="mt-6 text-xl font-semibold text-slate-900">{{ step.title }}</h3>
            <p class="mt-3 text-slate-600">{{ step.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── TESTIMONIALS ──────────────────────────────────────────── -->
    <section id="reviews" class="bg-slate-100 py-10 sm:py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-blue">Opinie klientów</p>
          <p class="mt-4 text-base text-slate-600">Nasze realizacje mówią same za siebie — sprawdź, co mówią klienci po
            wykonaniu tynków, gładzi i adaptacji poddaszy.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="review in testimonials" :key="review.author"
            class="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div>
              <div class="star-row text-xl">
                <span v-for="i in 5" :key="i">★</span>
              </div>
              <p class="mt-4 text-base leading-7 text-slate-700">"{{ review.quote }}"</p>
            </div>
            <div class="mt-6 border-t border-slate-200 pt-5">
              <p class="font-semibold text-slate-900">{{ review.author }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ review.service }} · {{ review.date }}</p>
            </div>
          </article>
        </div>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-accent">
            Wszystkie opinie na Oferteo
          </a>
          <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener" class="btn btn-secondary">
            Opinie w Google Maps
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="py-10 sm:py-16">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-soft">
          <div class="space-y-6">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Kontakt</p>
            <h2 class="text-3xl font-semibold">Potrzebujesz wyceny lub doradztwa?</h2>
            <p class="text-slate-600">Napisz lub zadzwoń, a przygotujemy szczegółową ofertę. Jeśli zrobiliśmy dla Ciebie
              prace, zostaw opinię na Oferteo lub w Google Maps, aby inni mogli nas znaleźć.</p>

            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-500">Telefon</p>
                <p class="mt-3 text-lg font-semibold text-slate-900">{{ contact.phone }}</p>
                <span>(WhatsApp)</span>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p class="text-sm uppercase tracking-[0.2em] text-slate-500">E-mail</p>
                <p class="mt-3 text-lg font-semibold text-slate-900">{{ contact.email }}</p>
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
