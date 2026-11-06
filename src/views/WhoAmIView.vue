<script setup>
import BaseIcon from '../components/BaseIcon.vue'
import { profile, contacts } from '../data/profile.js'
import { about } from '../data/cv.js'
import { findImage } from '../data/images.js'

const photo = findImage('profile')
</script>

<template>
  <section aria-labelledby="who-am-i-title" class="grid items-start gap-10 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-14 lg:gap-20">
    <!-- photo with a dot-grid plate offset behind it -->
    <div class="relative mx-auto w-full max-w-64 md:max-w-none">
      <div
        aria-hidden="true"
        class="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-[radial-gradient(var(--color-line)_1px,transparent_1px)] bg-size-[14px_14px]"
      ></div>
      <img
        v-if="photo"
        :src="photo"
        :alt="`Fotografia de ${profile.name}`"
        class="relative aspect-square w-full rounded-2xl border border-line object-cover"
      />
      <!-- fallback until the photo file exists -->
      <div
        v-else
        role="img"
        :aria-label="`Fotografia de ${profile.name} (por adicionar)`"
        class="relative grid aspect-square w-full place-items-center rounded-2xl border border-line bg-surface font-mono text-5xl text-muted"
      >
        FD
      </div>
    </div>

    <div class="min-w-0">
      <h1 id="who-am-i-title" tabindex="-1" class="text-4xl font-semibold text-text outline-none sm:text-5xl">
        Quem sou eu?
      </h1>
      <p class="mt-4 text-xl font-medium text-text">{{ profile.name }}</p>
      <p class="mt-1 text-muted">{{ profile.role }}</p>

      <div class="mt-8 max-w-prose space-y-4 text-text">
        <p>{{ about.intro }}</p>
        <p>{{ about.body }}</p>
        <p>{{ about.current }}</p>
      </div>

      <dl class="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <dt class="text-sm font-medium text-muted">Interesses</dt>
          <dd class="mt-3">
            <ul class="flex flex-wrap gap-2">
              <li
                v-for="interest in about.interests"
                :key="interest"
                class="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm text-accent"
              >
                {{ interest }}
              </li>
            </ul>
          </dd>
        </div>

        <div>
          <dt class="text-sm font-medium text-muted">Línguas</dt>
          <dd class="mt-3">
            <ul class="space-y-1.5">
              <li v-for="language in about.languages" :key="language.name">
                <span class="text-text">{{ language.name }}</span>
                <span class="text-muted"> · {{ language.level }}</span>
              </li>
            </ul>
          </dd>
        </div>

        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-muted">Contactos</dt>
          <dd class="mt-3">
            <ul class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li v-for="contact in contacts" :key="contact.id">
                <a
                  :href="contact.url"
                  :target="contact.external ? '_blank' : undefined"
                  :rel="contact.external ? 'noopener noreferrer' : undefined"
                  class="group inline-flex min-h-11 items-center gap-2.5 text-text transition-colors hover:text-accent"
                >
                  <BaseIcon :name="contact.icon" class="size-5 text-muted transition-colors group-hover:text-accent" />
                  <span class="underline decoration-line underline-offset-4 group-hover:decoration-accent">{{ contact.label }}</span>
                  <span v-if="contact.external" class="sr-only">(abre numa nova janela)</span>
                </a>
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>
