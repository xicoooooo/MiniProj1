<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import BaseIcon from './BaseIcon.vue'
import { views } from '../data/navigation.js'
import { profile } from '../data/profile.js'
import { dropIn, dropOut } from '../utils/motion.js'

const props = defineProps({
  // id of the view currently shown
  activeView: { type: String, required: true },
})

const isMenuOpen = ref(false)
const menuButton = ref(null)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu({ returnFocus = false } = {}) {
  isMenuOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

// escape closes the mobile menu and gives focus back to the menu button
function onKeydown(event) {
  if (event.key === 'Escape') closeMenu({ returnFocus: true })
}

// only listen to the keyboard while the menu is open
watch(isMenuOpen, (open) => {
  if (open) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
})

// changing view (link click, Back/Forward) always closes the mobile menu
watch(() => props.activeView, () => closeMenu())

onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

function hrefFor(id) {
  return `#/${id}`
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-bg">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
      <!-- brand: also a shortcut back to the initial view -->
      <a
        :href="hrefFor(views[0].id)"
        class="flex items-baseline gap-2 font-semibold tracking-tight text-text"
      >
        <span class="hidden sm:inline">{{ profile.name }}</span>
        <span class="sm:hidden">{{ profile.shortName }}</span>
        <span class="font-mono text-xs font-normal text-muted">/ currículo</span>
      </a>

      <!-- desktop navigation -->
      <nav aria-label="Navegação principal" class="hidden h-full md:block">
        <ul class="flex h-full items-stretch gap-2">
          <li v-for="view in views" :key="view.id">
            <a
              :href="hrefFor(view.id)"
              :aria-current="view.id === activeView ? 'page' : undefined"
              class="relative flex h-full items-center px-3 font-mono text-[0.8125rem] text-muted transition-colors duration-200 after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-500 after:ease-out-expo hover:text-text aria-[current=page]:text-text aria-[current=page]:after:scale-x-100"
            >
              {{ view.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- mobile menu button -->
      <button
        ref="menuButton"
        type="button"
        class="-mr-2 grid size-11 place-items-center rounded-lg text-muted transition-colors hover:bg-raised hover:text-text md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <BaseIcon :name="isMenuOpen ? 'close' : 'menu'" class="size-6" />
      </button>
    </div>

    <!-- mobile navigation panel -->
    <Transition :css="false" @enter="dropIn" @leave="dropOut">
      <nav
        v-if="isMenuOpen"
        id="mobile-menu"
        aria-label="Navegação principal"
        class="absolute inset-x-0 top-full border-b border-line bg-bg px-4 pt-2 pb-4 shadow-[0_16px_32px_-12px_rgb(0_0_0/0.6)] md:hidden"
      >
        <ul class="flex flex-col gap-1">
          <li v-for="view in views" :key="view.id">
            <a
              :href="hrefFor(view.id)"
              :aria-current="view.id === activeView ? 'page' : undefined"
              class="flex min-h-12 items-center rounded-lg px-3 text-lg text-muted transition-colors hover:bg-raised hover:text-text aria-[current=page]:bg-raised aria-[current=page]:font-medium aria-[current=page]:text-accent"
              @click="closeMenu()"
            >
              {{ view.label }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
