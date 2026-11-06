<script setup>
import BaseIcon from './BaseIcon.vue'
import { profile, socialLinks } from '../data/profile.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line">
    <div
      class="mx-auto flex max-w-6xl flex-col-reverse items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between sm:px-8"
    >
      <p class="text-sm text-muted">© {{ currentYear }} {{ profile.name }}</p>

      <ul class="flex items-center gap-1" aria-label="Redes sociais">
        <li v-for="link in socialLinks" :key="link.id">
          <a
            v-if="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            :title="link.label"
            class="grid size-11 place-items-center rounded-lg text-muted transition-colors duration-200 hover:bg-raised hover:text-accent"
          >
            <BaseIcon :name="link.icon" class="size-5" />
            <span class="sr-only">{{ link.label }} (abre numa nova janela)</span>
          </a>
          <!-- IF link not confirmed yet: shown dimmed, not clickable -->
          <span
            v-else
            :title="`${link.label}: link por confirmar`"
            class="grid size-11 cursor-not-allowed place-items-center rounded-lg text-muted/40"
          >
            <BaseIcon :name="link.icon" class="size-5" />
            <span class="sr-only">{{ link.label }} (link por confirmar)</span>
          </span>
        </li>
      </ul>
    </div>
  </footer>
</template>
