<script setup lang="ts">
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
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#0f4c81] selection:text-white">
    <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div class="mx-auto flex container items-center justify-between px-4 py-4 sm:px-6 lg:px-8 xl:px-10">
        <router-link to="/" class="flex items-center gap-3">
          <img :src="logoUrl" alt="RN-BUD logo" class="h-12 w-12 rounded-full border border-slate-200 object-cover" />
          <div>
            <p class="text-lg font-semibold text-slate-900">RN-BUD</p>
            <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Serhii Zosyk</p>
          </div>
        </router-link>

        <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <router-link v-for="link in navLinks" :key="link.label" :to="link.to"
            class="transition hover:text-slate-900">{{ link.label }}</router-link>
        </nav>

        <a :href="contact.oferteo" class="btn btn-primary" target="_blank" rel="noreferrer noopener">Zobacz profil</a>
      </div>
    </header>

    <main class="overflow-hidden">
      <router-view />
    </main>

    <footer class="border-t border-slate-200 bg-white py-8">
      <div class="mx-auto container px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © 2026 RN-BUD Serhii Zosyk. Tynki cementowo-wapienne, gładzie wapienne, ocieplenia poddaszy i sufity podwieszane.
      </div>
    </footer>
  </div>
</template>
