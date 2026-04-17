<script setup lang="ts">
import { ref } from 'vue'

const logoUrl = 'https://static.oferteo.pl/images/portfolio/5433282/256px_s/1749159033614-1749159033526_avatar.jpg'

const navLinks = [
  { to: { path: '/', hash: '#offers' }, label: 'Usługi' },
  { to: { path: '/', hash: '#process' }, label: 'Jak działamy' },
  { to: { path: '/gallery/realizacje' }, label: 'Galeria' },
  { to: { path: '/', hash: '#contact' }, label: 'Kontakt' },
]

const contact = {
  oferteo: 'https://www.oferteo.pl/rn-bud-serhii-zosyk/firma/5433282',
}

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-[#faf9f7] text-slate-900 selection:bg-[#0a3357] selection:text-white">

    <!-- Header -->
    <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex container items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3" @click="closeMenu">
          <img :src="logoUrl" alt="RN-BUD logo" class="h-11 w-11 rounded-full border-2 object-cover" style="border-color: #0a3357;" />
          <div>
            <p class="text-lg font-bold text-slate-900 leading-tight">RN-BUD</p>
            <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Serhii Zosyk</p>
          </div>
        </router-link>

        <!-- Desktop nav -->
        <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="transition hover:text-slate-900"
          >{{ link.label }}</router-link>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:block">
          <a :href="contact.oferteo" class="btn btn-primary text-sm" target="_blank" rel="noreferrer noopener">Wycena na Oferteo</a>
        </div>

        <!-- Mobile: hamburger -->
        <button
          type="button"
          class="flex items-center justify-center rounded-xl p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          :aria-label="mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'"
          @click="toggleMenu"
        >
          <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu dropdown -->
      <div v-if="mobileMenuOpen" class="border-t border-slate-100 bg-white md:hidden">
        <nav class="mx-auto container flex flex-col px-4 py-4 gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.label"
            :to="link.to"
            class="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
            @click="closeMenu"
          >{{ link.label }}</router-link>
          <a
            :href="contact.oferteo"
            target="_blank"
            rel="noreferrer noopener"
            class="btn btn-primary mt-3 w-full text-center"
            @click="closeMenu"
          >Wycena na Oferteo</a>
        </nav>
      </div>
    </header>

    <main class="overflow-hidden">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="mx-auto container px-4 sm:px-6 lg:px-8">
        <div class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Brand -->
          <div class="sm:col-span-2 lg:col-span-1">
            <div class="flex items-center gap-3">
              <img :src="logoUrl" alt="RN-BUD" class="h-10 w-10 rounded-full border-2 object-cover" style="border-color: #0a3357;" />
              <div>
                <p class="font-bold text-slate-900">RN-BUD</p>
                <p class="text-xs text-slate-500">Serhii Zosyk</p>
              </div>
            </div>
            <p class="mt-4 text-sm text-slate-500 leading-6">
              Profesjonalne tynki, gładzie i adaptacje poddaszy w Małopolsce i Świętokrzyskim.
            </p>
          </div>

          <!-- Services -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Usługi</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              <li>Tynki cementowo-wapienne</li>
              <li>Gładzie wapienne</li>
              <li>Ocieplenie poddaszy</li>
              <li>Sufity podwieszane</li>
              <li>Zabudowa GK</li>
            </ul>
          </div>

          <!-- Navigation -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Nawigacja</p>
            <ul class="mt-4 space-y-2">
              <li v-for="link in navLinks" :key="link.label">
                <router-link :to="link.to" class="text-sm text-slate-600 hover:text-slate-900">{{ link.label }}</router-link>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Kontakt</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span class="block text-xs uppercase tracking-wide text-slate-400">Adres</span>
                ul. Romana Grodeckiego 131<br />32-700 Bochnia
              </li>
              <li>
                <span class="block text-xs uppercase tracking-wide text-slate-400">E-mail</span>
                kontakt@rn-bud.com
              </li>
              <li>
                <a :href="contact.oferteo" target="_blank" rel="noreferrer noopener" class="inline-flex items-center gap-1 font-medium hover:opacity-80" style="color: #0a3357;">
                  Profil na Oferteo →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-100 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <p>© 2026 RN-BUD Serhii Zosyk. NIP: 8681988843 · REGON: 524615233</p>
          <p>Bochnia, Małopolskie · Obsługa: Małopolska, Świętokrzyskie</p>
        </div>
      </div>
    </footer>

  </div>
</template>
