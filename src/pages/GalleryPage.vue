<script setup lang="ts">
import { computed, ref } from 'vue'
import { galleryCategories } from '../data/gallery'

const activeImage = ref<{ src: string; alt: string } | null>(null)

const category = computed(() => galleryCategories[0])

const gallerySections = computed(() => {
  const images = category.value?.images ?? []
  const grouped = images.reduce<Record<string, typeof images>>((sections, image) => {
    if (!sections[image.folder]) {
      sections[image.folder] = []
    }

    sections[image.folder].push(image)
    return sections
  }, {})

  return Object.entries(grouped).map(([folder, folderImages]) => ({
    folder,
    title: folder.replace(/[-_]+/g, ' '),
    images: folderImages,
  }))
})

const totalImages = computed(() => category.value?.images.length ?? 0)

const formatFolderTitle = (folder: string) => {
  if (folder === 'gładzie') {
    return 'Gładzie'
  }

  if (folder === 'ocieplenie') {
    return 'Ocieplenie'
  }

  if (folder === 'sufity') {
    return 'Sufity'
  }

  if (folder === 'tynki') {
    return 'Tynki'
  }

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
      <div class="mb-10 flex flex-col gap-4 rounded-4xl bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Galeria</p>
          <h1 class="mt-3 text-3xl font-semibold text-slate-900">{{ category?.title }}</h1>
          <p class="mt-4 max-w-3xl text-slate-600">{{ category?.subtitle }}</p>
        </div>
        <router-link to="/" class="btn btn-secondary w-full text-center sm:w-auto">Powrót na stronę główną</router-link>
      </div>

      <div v-if="gallerySections.length" class="space-y-12">
        <section v-for="section in gallerySections" :key="section.folder" class="space-y-5">
          <div class="flex items-center justify-between gap-4">
            <h2 class="text-2xl font-semibold text-slate-900">{{ formatFolderTitle(section.folder) }}</h2>
            <p class="text-sm uppercase tracking-[0.22em] text-slate-500">{{ section.images.length }} zdjęć</p>
          </div>

          <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="image in section.images"
              :key="image.src"
              class="overflow-hidden rounded-4xl bg-white shadow-soft"
            >
              <img
                :src="image.src"
                :alt="image.alt"
                class="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
                @click="openImage(image)"
              />
              <div class="p-5">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f4c81]">{{ formatFolderTitle(section.folder) }}</p>
                <p class="mt-2 text-slate-700">{{ image.alt }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div v-else class="rounded-4xl bg-white p-10 text-center text-slate-600 shadow-soft">
        Brak zdjęć w folderach galerii.
      </div>

      <div v-if="activeImage" @click.self="closeImage" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 text-white">
        <div class="relative max-h-full w-full max-w-5xl overflow-hidden rounded-4xl bg-slate-900 shadow-2xl">
          <button
            type="button"
            @click="closeImage"
            class="absolute right-4 top-4 rounded-full bg-slate-800/90 p-3 text-xl text-white transition hover:bg-slate-700"
            aria-label="Zamknij podgląd obrazu"
          >
            &times;
          </button>
          <img
            :src="activeImage.src"
            :alt="activeImage.alt"
            class="h-[80vh] w-full object-contain bg-slate-950"
          />
          <div class="border-t border-slate-700 bg-slate-900 p-5 text-sm text-slate-300">
            {{ activeImage.alt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
