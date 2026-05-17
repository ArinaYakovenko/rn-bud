<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { galleryCategories } from '../data/gallery'

const activeImage = ref<{ src: string; alt: string } | null>(null)
const loadingImages = ref(true)
const allowedFolders = ['tynki', 'gładzie', 'ocieplenie']
const allImages = galleryCategories[0]?.images.filter(img => allowedFolders.includes(img.folder))

const folderTabs = allowedFolders.map(f => ({
  key: f,
  label: f.charAt(0).toUpperCase() + f.slice(1)
}))

const selectedFolder = ref(folderTabs[0]?.key)
const route = useRoute()

onMounted(() => {
  const folderFromQuery = route.query.folder
  if (typeof folderFromQuery === 'string' && allowedFolders.includes(folderFromQuery)) {
    selectedFolder.value = folderFromQuery
  }
})

const filteredImages = computed(() =>
  allImages?.filter(img => img.folder === selectedFolder.value)
)

// Watch for folder change to trigger loading state
watch(selectedFolder, () => {
  loadingImages.value = true
})

const formatFolderTitle = (folder: string) => {
  if (folder === 'gładzie') return 'Gładzie'
  if (folder === 'ocieplenie') return 'Ocieplenie'
  if (folder === 'tynki') return 'Tynki'
  return folder.replace(/[-_]+/g, ' ')
}

const openImage = (image: { src: string; alt: string }) => {
  activeImage.value = image
}
const closeImage = () => {
  activeImage.value = null
}
</script>

<template>
  <div class="py-16">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8">
      <div
        class="mb-10 flex flex-col gap-4 rounded-4xl bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div v-if="selectedFolder">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0a3357]">Galeria</p>
          <h1 class="mt-3 text-3xl font-semibold text-slate-900">{{ formatFolderTitle(selectedFolder) }}</h1>
          <p class="mt-4 max-w-3xl text-slate-600">
            Galeria zdjęć kategorii: {{ formatFolderTitle(selectedFolder) }}
          </p>
        </div>
        <router-link to="/#offers" class="btn btn-secondary w-full text-center sm:w-auto">Powrót do naszych usług</router-link>
      </div>

      <div class="mb-8 flex gap-3 flex-wrap">
        <button
          v-for="tab in folderTabs"
          :key="tab.key"
          @click="selectedFolder = tab.key"
          :class="['px-5 py-2 rounded-full text-sm font-semibold border transition', selectedFolder === tab.key ? 'bg-[#0a3357] text-white border-[#0a3357]' : 'bg-white text-[#0a3357] border-slate-200 hover:bg-slate-100']"
        >
          {{ formatFolderTitle(tab.key) }}
        </button>
      </div>


      <div v-if="filteredImages && filteredImages.length" class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div v-for="image in filteredImages" :key="image.src" class="overflow-hidden rounded-4xl bg-white shadow-soft relative">
          <div v-if="loadingImages" class="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse z-10">
            <div class="w-3/4 h-2/3 bg-slate-200 rounded-2xl"></div>
          </div>
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            @click="openImage(image)"
            @load="() => { loadingImages = false }"
            style="z-index:1;"
          />
        </div>
      </div>
      <div v-else class="rounded-4xl bg-white p-10 text-center text-slate-600 shadow-soft">
        Brak zdjęć w tej kategorii.
      </div>

      <div v-if="activeImage" @click.self="closeImage"
        class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 text-white">
        <div class="relative max-h-full w-full max-w-5xl overflow-hidden rounded-4xl bg-slate-900 shadow-2xl">
          <button type="button" @click="closeImage"
            class="absolute right-4 top-4 flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/90 text-white transition hover:bg-slate-700"
            aria-label="Zamknij podgląd obrazu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L16 16M16 8L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <img :src="activeImage.src" :alt="activeImage.alt" class="h-[80vh] w-full object-contain bg-slate-950" />
        </div>
      </div>
    </div>
  </div>
</template>
