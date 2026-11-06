<script setup>
import BaseIcon from './BaseIcon.vue'
import { findImage } from '../data/images.js'

const props = defineProps({
  hobby: { type: Object, required: true },
})

defineEmits(['select'])

const image = findImage(`hobbies/${props.hobby.id}`)
</script>

<template>
  <!-- same stretched button pattern as ProjectCard: the whole card opens the detail -->
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 hover:border-muted/50 hover:bg-raised active:bg-raised has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
  >
    <img v-if="image" :src="image" alt="" class="aspect-video w-full border-b border-line object-cover" />

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex items-start justify-between gap-4">
        <h2 class="min-w-0 text-lg font-semibold text-text wrap-anywhere">{{ hobby.title }}</h2>
        <BaseIcon
          v-if="!image"
          :name="hobby.icon"
          class="mt-0.5 size-6 shrink-0 text-accent transition-transform duration-500 ease-out-expo group-hover:-rotate-6"
        />
      </div>
      <p class="mt-2 flex-1 text-muted">{{ hobby.summary }}</p>

      <button
        type="button"
        class="mt-6 inline-flex items-center gap-1 self-start font-mono text-xs text-accent focus-visible:outline-none after:absolute after:inset-0 after:content-['']"
        @click="$emit('select', hobby)"
      >
        Ver detalhe
        <span class="sr-only">de {{ hobby.title }}</span>
        <BaseIcon name="arrow-up-right" class="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  </article>
</template>
