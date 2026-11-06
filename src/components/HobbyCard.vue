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
    class="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-200 hover:border-muted/50 hover:bg-raised has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
  >
    <img v-if="image" :src="image" alt="" class="aspect-[16/9] w-full border-b border-line object-cover" />

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <span
        v-if="!image"
        aria-hidden="true"
        class="grid size-11 place-items-center rounded-lg border border-line bg-raised text-accent transition-colors group-hover:border-accent/40"
      >
        <BaseIcon :name="hobby.icon" class="size-5.5" />
      </span>

      <h2 class="text-lg font-semibold text-text" :class="image ? 'mt-0' : 'mt-5'">{{ hobby.title }}</h2>
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
