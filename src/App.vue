<script setup>
import { ref, computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { views } from './data/navigation.js'
import { profile } from './data/profile.js'
import { useHashRoute } from './composables/useHashRoute.js'
import { viewIn, viewOut } from './utils/motion.js'

// activeView follows the URL fragment (#/…), including Back/Forward
const { activeView } = useHashRoute()
const mainContent = ref(null)

const activeLabel = computed(() => views.find((view) => view.id === activeView.value).label)

// the tab title (and the browser history list) names the current view
watch(
  activeView,
  () => {
    document.title = `${activeLabel.value} | ${profile.name}`
  },
  { immediate: true },
)

// a new view starts at the top of the page
watch(activeView, () => window.scrollTo({ top: 0 }))

// AC-03: when a new view enters, focus moves to its title so keyboard and screen reader users land on the new content
// (vue does not run this on the first render, so the initial page load keeps the default focus)
function onViewEnter(el, done) {
  el.querySelector('h1')?.focus({ preventScroll: true })
  viewIn(el, done)
}
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
      <!-- only the central area changes; mode out-in: the old view leaves before the new one enters -->
      <Transition mode="out-in" :css="false" @enter="onViewEnter" @leave="viewOut">
        <!-- placeholder until the views are built (Phase 4); each view's h1 needs tabindex="-1" to receive focus -->
        <section :key="activeView">
          <h1 tabindex="-1" class="text-3xl font-semibold text-text outline-none sm:text-4xl">{{ activeLabel }}</h1>
          <p class="mt-4 max-w-prose text-muted">Conteúdo da vista em construção.</p>
        </section>
      </Transition>
    </main>

    <AppFooter />
  </div>
</template>
