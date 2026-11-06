<script setup>
import BaseIcon from './BaseIcon.vue'
import TagList from './TagList.vue'
import { findImage } from '../data/images.js'

const props = defineProps({
  project: { type: Object, required: true },
})

defineEmits(['select'])

const image = findImage(`projects/${props.project.id}`)
</script>

<template>
  <!-- the whole card is clickable: the button's ::after covers the card (stretched button pattern) -->
  <article
    class="group relative flex gap-4 rounded-xl border border-line bg-surface p-4 transition-colors duration-200 hover:border-muted/50 hover:bg-raised has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent sm:p-5"
  >
    <img
      v-if="image"
      :src="image"
      alt=""
      class="hidden size-20 shrink-0 rounded-lg border border-line object-cover sm:block"
    />

    <div class="min-w-0 flex-1">
      <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 class="font-semibold text-text">{{ project.title }}</h3>
        <p v-if="project.meta" class="font-mono text-xs text-muted">{{ project.meta }}</p>
      </div>
      <p class="mt-1.5 text-sm text-muted">{{ project.summary }}</p>

      <div class="mt-4 flex flex-wrap items-end justify-between gap-3">
        <TagList :tags="project.tags" :limit="4" />
        <button
          type="button"
          class="inline-flex items-center gap-1 font-mono text-xs text-accent focus-visible:outline-none after:absolute after:inset-0 after:rounded-xl after:content-['']"
          @click="$emit('select', project)"
        >
          Ver detalhe
          <span class="sr-only">de {{ project.title }}</span>
          <BaseIcon name="arrow-up-right" class="size-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </article>
</template>
