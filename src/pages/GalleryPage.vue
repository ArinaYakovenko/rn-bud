<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { galleryCategories } from '../data/gallery'

const route = useRoute()
const router = useRouter()
const activeImage = ref<{ src: string; alt: string } | null>(null)

const categoryId = computed(() => route.params.id as string)
const category = computed(() => galleryCategories.find((item) => item.id === categoryId.value))

watch(category, (value) => {
  if (!value) {
    router.replace('/')
  }
})

watch(route, () => {
  activeImage.value = null
})

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
      <div class="mb-10 flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[#0f4c81]">Galeria</p>
          <h1 class="mt-3 text-3xl font-semibold text-slate-900">{{ category?.title }}</h1>
          <p class="mt-4 max-w-3xl text-slate-600">{{ category?.subtitle }}</p>
        </div>
        <router-link to="/" class="btn btn-secondary w-full text-center sm:w-auto">Powrót na stronę główną</router-link>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="image in category?.images"
          :key="image.src"
          class="overflow-hidden rounded-[2rem] bg-white shadow-soft"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            @click="openImage(image)"
          />
          <div class="p-5">
            <p class="text-slate-700">{{ image.alt }}</p>
          </div>
        </div>
      </div>

      <div v-if="activeImage" @click.self="closeImage" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 text-white">
        <div class="relative max-h-full w-full max-w-5xl overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
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
