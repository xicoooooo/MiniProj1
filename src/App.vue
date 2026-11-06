<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { views, defaultViewId } from './data/navigation.js'

// temporary: a fixed view. phase 3 replaces this with useHashRoute(), which keeps activeView in sync with the URL fragment (#/…)
const activeView = ref(defaultViewId)
const mainContent = ref(null)
const activeLabel = views.find((view) => view.id === activeView.value).label
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <!-- skip link: moves focus with JS so it never changes the #/ route in the URL -->
    <a
      href="#main-content"
      class="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      @click.prevent="mainContent.focus()"
    >
      Saltar para o conteúdo
    </a>

    <AppHeader :active-view="activeView" />

    <main ref="mainContent" id="main-content" tabindex="-1" class="mx-auto outline-none w-full max-w-6xl flex-1 px-4 py-12 sm:px-8 sm:py-16">
      <!-- placeholder until the views are built (Phase 4) -->
      <h1 class="text-3xl font-semibold text-text sm:text-4xl">{{ activeLabel }}</h1>
      <p class="mt-4 max-w-prose text-muted">Conteúdo da vista em construção.</p>
    </main>

    <AppFooter />
  </div>
</template>
