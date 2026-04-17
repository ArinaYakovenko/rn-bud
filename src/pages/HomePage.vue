<script setup lang="ts">
import { galleryCategories } from '../data/gallery'

const logoUrl = 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1749159033614-1749159033526_avatar.jpg'
const heroImage = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80'

const heroHighlights = [
  { title: 'Ocena', value: '5.0', subtitle: '20 potwierdzonych opinii' },
  { title: 'Region', value: 'Małopolska', subtitle: 'obsługa także Świętokrzyskie' },
  { title: 'Darmowa wycena', value: 'Tak', subtitle: 'po zapytaniu lub wizji lokalnej' },
]

const offers = [
  {
    title: 'Tynki cementowo-wapienne',
    description: 'Solidne tynkowanie maszynowe i ręczne dla ścian oraz sufitów odpornych na wilgoć i uszkodzenia mechaniczne.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852070849-crop-img-0168.jpeg.jpg',
  },
  {
    title: 'Gładzie wapienne',
    description: 'Ekologiczne gładzie z naturalnych składników, idealne do sypialni i pomieszczeń dziecięcych.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852076654-crop-img-0166.jpeg.jpg',
  },
  {
    title: 'Ocieplenie i adaptacja poddaszy',
    description: 'Kompleksowa izolacja, zabudowa GK i wykończenie poddasza pod kątem użytkowym.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1751785555737-crop-img-1660.jpg',
  },
  {
    title: 'Sufity podwieszane i zabudowa GK',
    description: 'Estetyczne sufity podwieszane oraz funkcjonalne zabudowy karton-gipsowe z oświetleniem.',
    image: 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1717852072419-crop-img-0165.jpeg.jpg',
  },
]

const aboutFacts = [
  { label: 'Rok startu', value: '2023' },
  { label: 'Opinie', value: '20' },
  { label: 'Ocena', value: '5.0 ★' },
]

const companyDetails = [
  { label: 'NIP', value: '8681988843' },
  { label: 'REGON', value: '524615233' },
  { label: 'Preferowany kontakt', value: 'Czat, e-mail, telefon' },
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

const location = {
  address: 'ul. Romana Grodeckiego 131, 32-700 Bochnia',
  city: 'Bochnia, Małopolskie',
  mapUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=20.4340420%2C49.985802%2C20.4352420%2C49.986302&layer=mapnik&marker=49.986052%2C20.434642',
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
  <div>

    <!-- ─── HERO ───────────────────────────────────────────────────── -->
    <section class="mx-auto grid container gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 xl:px-12">
      <div class="space-y-8">
        <span class="inline-flex rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em]"
          style="background:#fff3e0; color:#d4760a;">
          Tynki · Gładzie · Ocieplenia
        </span>
        <div class="space-y-5">
          <h1 class="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-tight">
            RN-BUD — solidne tynki i wykończenia wnętrz w Małopolsce.
          </h1>
          <p class="max-w-2xl text-lg leading-8 text-slate-600">
            Wykonujemy tynki cementowo-wapienne, gładzie wapienne, ocieplenia poddaszy oraz sufity podwieszane. 20 ocen 5★ potwierdzają nasze zaangażowanie i jakość.
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" class="btn btn-primary w-full text-center sm:w-auto">Poproś o wycenę</a>
          <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-secondary w-full text-center sm:w-auto">
            Opinie na Oferteo ★ 5.0
          </a>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div v-for="item in heroHighlights" :key="item.title"
            class="rounded-[2rem] p-6 text-white card-glow"
            style="background: #0f4c81;">
            <p class="text-xs uppercase tracking-[0.18em] text-blue-200">{{ item.title }}</p>
            <p class="mt-4 text-3xl font-bold">{{ item.value }}</p>
            <p class="mt-2 text-sm text-blue-200">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-[2rem] shadow-soft">
        <img :src="heroImage" alt="Profesjonalne prace tynkarskie RN-BUD" class="h-full w-full object-cover" loading="lazy" />
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6 text-white">
          <p class="text-xs uppercase tracking-[0.24em] text-slate-300">RN-BUD · Bochnia</p>
          <h2 class="mt-2 text-xl font-semibold">Skuteczne wykończenia wnętrz i tynki</h2>
        </div>
      </div>
    </section>

    <!-- ─── ABOUT ──────────────────────────────────────────────────── -->
    <section class="py-16" style="background:#faf9f7;">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="rounded-[2rem] bg-white p-8 shadow-soft">
            <p class="section-label-blue">O firmie</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Kim jesteśmy?</h2>
            <p class="mt-4 text-lg leading-8 text-slate-600">
              Nazywam się Serhii Zosyk i prowadzę RN-BUD. Specjalizuję się w kompleksowych pracach
              wykończeniowych: tynkach cementowo-wapiennych, gładziach wapiennych, ociepleniach poddaszy
              oraz sufitach podwieszanych. Działam zarówno na nowych inwestycjach, jak i remontach.
            </p>
            <ul class="mt-6 space-y-2 text-slate-600">
              <li class="flex items-center gap-2"><span style="color:#d4760a;" class="font-bold">✓</span> Wieloletnie doświadczenie w branży budowlanej</li>
              <li class="flex items-center gap-2"><span style="color:#d4760a;" class="font-bold">✓</span> Sprawdzone materiały i nowoczesne technologie</li>
              <li class="flex items-center gap-2"><span style="color:#d4760a;" class="font-bold">✓</span> Czystość i porządek na każdym etapie prac</li>
              <li class="flex items-center gap-2"><span style="color:#d4760a;" class="font-bold">✓</span> Darmowa wycena i indywidualne podejście</li>
            </ul>
            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <div v-for="fact in aboutFacts" :key="fact.label" class="rounded-2xl border border-slate-200 p-5 text-center">
                <p class="text-2xl font-bold text-slate-900" :style="fact.label === 'Ocena' ? 'color:#d4760a' : ''">{{ fact.value }}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{{ fact.label }}</p>
              </div>
            </div>
          </div>

          <div class="grid gap-4 rounded-[2rem] p-8 text-white shadow-soft" style="background:#0f4c81;">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-blue-200">Dane firmy</p>
              <p class="mt-3 text-xl font-bold text-white">RN-BUD Serhii Zosyk</p>
              <p class="mt-2 text-blue-100">ul. Romana Grodeckiego 131, 32-700 Bochnia</p>
            </div>
            <div class="grid gap-3 rounded-2xl p-6" style="background: rgba(0,0,0,0.25);">
              <div v-for="item in companyDetails" :key="item.label" class="py-2 border-b border-white/10 last:border-0">
                <p class="text-xs uppercase tracking-[0.2em] text-blue-200">{{ item.label }}</p>
                <p class="mt-2 font-semibold text-white">{{ item.value }}</p>
              </div>
            </div>
            <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener"
              class="btn rounded-2xl text-center font-semibold"
              style="background:#d4760a; color:white;">
              Profil firmy na Oferteo
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── SERVICES ──────────────────────────────────────────────── -->
    <section id="offers" class="py-16 bg-white">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-amber">Oferta</p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">Najczęściej realizowane usługi</h2>
          <p class="mt-4 text-slate-600">Pracujemy w zakresie tynków, gładzi, adaptacji poddaszy i sufitów podwieszanych. Każdą realizację wykonujemy z dbałością o jakość i porządek.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <article v-for="offer in offers" :key="offer.title"
            class="overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100">
            <div class="overflow-hidden h-52">
              <img :src="offer.image" :alt="offer.title" class="h-52 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-slate-900">{{ offer.title }}</h3>
              <p class="mt-3 text-sm text-slate-600 leading-6">{{ offer.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── PROCESS ───────────────────────────────────────────────── -->
    <section id="process" class="py-16" style="background:#faf9f7;">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-amber">Proces</p>
          <h2 class="mt-3 text-3xl font-semibold text-slate-900">Jak pracujemy</h2>
          <p class="mt-4 text-slate-600">Przejrzysty proces wykonawczy daje klientom pewność, że projekt zostanie zakończony terminowo i w najwyższej jakości.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article v-for="step in processSteps" :key="step.step" class="rounded-[2rem] bg-white p-8 shadow-soft border border-slate-100">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-bold text-white"
              style="background:#d4760a;">{{ step.step }}</div>
            <h3 class="mt-6 text-lg font-semibold text-slate-900">{{ step.title }}</h3>
            <p class="mt-3 text-sm text-slate-600 leading-6">{{ step.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── GALLERY PREVIEW ───────────────────────────────────────── -->
    <section id="gallery" class="py-16 bg-white">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl">
            <p class="section-label-blue">Galeria</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Zdjęcia realizacji</h2>
            <p class="mt-4 text-slate-600">Kliknij kategorię, aby przejść do galerii i obejrzeć zdjęcia w powiększeniu.</p>
          </div>
          <router-link to="/gallery/realizacje" class="btn btn-outline-primary shrink-0">
            Zobacz wszystkie →
          </router-link>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="category in galleryCategories"
            :key="category.id"
            class="overflow-hidden rounded-[2rem] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100"
          >
            <router-link :to="`/gallery/${category.id}`" class="block">
              <div class="overflow-hidden h-72">
                <img :src="category.cover" :alt="category.title" class="h-72 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-slate-900">{{ category.title }}</h3>
                <p class="mt-2 text-sm text-slate-600">{{ category.subtitle }}</p>
                <p class="mt-3 text-sm font-semibold" style="color:#0f4c81;">Otwórz galerię →</p>
              </div>
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <!-- ─── TESTIMONIALS ──────────────────────────────────────────── -->
    <section id="reviews" class="py-16" style="background:#0f4c81;">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="mb-10 max-w-2xl">
          <p class="section-label-amber">Opinie klientów</p>
          <h2 class="mt-3 text-3xl font-semibold text-white">20 opinii — wszystkie na 5 gwiazdek</h2>
          <p class="mt-4 text-blue-200 text-base">Nasze realizacje mówią same za siebie — sprawdź, co mówią klienci po wykonaniu tynków, gładzi i adaptacji poddaszy.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="review in testimonials" :key="review.author"
            class="rounded-[2rem] p-8 flex flex-col justify-between"
            style="background: rgba(0,0,0,0.22);">
            <div>
              <div class="flex gap-1 text-xl" style="color:#d4760a;">
                <span v-for="i in 5" :key="i">★</span>
              </div>
              <p class="mt-4 text-blue-100 leading-7 text-base">"{{ review.quote }}"</p>
            </div>
            <div class="mt-6 border-t pt-5" style="border-color: rgba(255,255,255,0.15);">
              <p class="font-semibold text-white">{{ review.author }}</p>
              <p class="mt-1 text-sm text-blue-300">{{ review.service }} · {{ review.date }}</p>
            </div>
          </article>
        </div>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-accent">
            Wszystkie opinie na Oferteo
          </a>
          <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener"
            class="btn rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold">
            Opinie w Google Maps
          </a>
        </div>
      </div>
    </section>

    <!-- ─── LOCATION ──────────────────────────────────────────────── -->
    <section class="py-16" style="background:#faf9f7;">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
          <div class="rounded-[2rem] bg-white p-8 shadow-soft border border-slate-100">
            <p class="section-label-blue">Lokalizacja</p>
            <h2 class="mt-3 text-3xl font-semibold text-slate-900">Biuro RN-BUD w Bochni</h2>
            <p class="mt-4 text-slate-600">Jeśli mieszkasz w Małopolsce lub Świętokrzyskim, możesz skontaktować się z nami bezpośrednio przez profil Oferteo lub mailowo.</p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl p-5 border border-slate-200">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Adres</p>
                <p class="mt-3 font-semibold text-slate-900">{{ location.address }}</p>
              </div>
              <div class="rounded-2xl p-5 border border-slate-200">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Miasto</p>
                <p class="mt-3 font-semibold text-slate-900">{{ location.city }}</p>
              </div>
              <div class="rounded-2xl p-5 border border-slate-200 sm:col-span-2">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Obszar działania</p>
                <p class="mt-3 font-semibold text-slate-900">Małopolskie, Świętokrzyskie</p>
              </div>
            </div>
          </div>
          <div class="overflow-hidden rounded-[2rem] bg-white shadow-soft border border-slate-100">
            <iframe
              title="RN-BUD location"
              width="100%"
              height="420"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              :src="location.mapUrl"
              class="h-full w-full min-h-[300px]"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CONTACT ───────────────────────────────────────────────── -->
    <section id="contact" class="py-16 bg-white">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="rounded-[2rem] bg-slate-900 p-8 shadow-soft">
          <div class="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div class="space-y-6">
              <p class="section-label-amber">Kontakt</p>
              <h2 class="text-3xl font-semibold text-white">Potrzebujesz wyceny lub masz pytania?</h2>
              <p class="max-w-2xl text-slate-300 text-base leading-7">
                Napisz lub zadzwoń, a przygotujemy szczegółową ofertę dostosowaną do Twoich potrzeb.
                Darmowa wycena po zapytaniu lub wizji lokalnej na terenie Małopolski i Świętokrzyskiego.
              </p>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.07);">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-400">E-mail</p>
                  <p class="mt-3 font-semibold text-white">{{ contact.email }}</p>
                </div>
                <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.07);">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-400">Preferowany kontakt</p>
                  <p class="mt-3 font-semibold text-white capitalize">{{ contact.preferred }}</p>
                </div>
              </div>
              <div class="flex flex-col gap-3 sm:flex-row">
                <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="btn btn-accent">
                  Wyceń na Oferteo
                </a>
                <a :href="contact.googleMapsReview" target="_blank" rel="noreferrer noopener" class="btn btn-outline-primary" style="border-color: rgba(255,255,255,0.3); color:white;">
                  Zostaw opinię w Google Maps
                </a>
              </div>
            </div>

            <div class="grid gap-4">
              <div class="rounded-2xl p-6" style="background: rgba(255,255,255,0.07);">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">Dane rejestrowe</p>
                <div v-for="item in companyDetails" :key="item.label" class="py-3 border-b border-white/10 last:border-0">
                  <p class="text-xs uppercase tracking-[0.15em] text-slate-400">{{ item.label }}</p>
                  <p class="mt-2 text-sm font-medium text-white">{{ item.value }}</p>
                </div>
              </div>
              <div class="rounded-2xl p-5 text-center" style="background: rgba(212,118,10,0.15); border: 1px solid rgba(212,118,10,0.3);">
                <div class="flex justify-center gap-1 text-xl" style="color:#d4760a;">
                  <span v-for="i in 5" :key="i">★</span>
                </div>
                <p class="mt-2 text-2xl font-bold text-white">5.0 / 5</p>
                <p class="mt-1 text-sm text-slate-400">20 potwierdzonych opinii</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
