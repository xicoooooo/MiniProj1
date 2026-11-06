<script setup>
import { ref, watch, nextTick } from 'vue'
import BaseIcon from './BaseIcon.vue'
import TagList from './TagList.vue'
import { modalIn, modalOut } from '../utils/motion.js'

// one modal for both projects ("O que faço?") and hobbies ("Hobbies"): the content comes from `item`
const props = defineProps({
  open: { type: Boolean, default: false },
  item: { type: Object, default: null },
})

const emit = defineEmits(['close'])

const dialog = ref(null)
let opener = null // element that had focus before opening (the card's button)
let pressStartedOnBackdrop = false

// the native <dialog> with showModal() already traps focus inside it and makes the page behind inert
watch(
  () => props.open,
  async (open) => {
    const el = dialog.value

    if (open) {
      opener = document.activeElement
      await nextTick() // render the selected item before showing it
      el.showModal()
      document.documentElement.classList.add('overflow-hidden') // no page scroll behind the modal
      modalIn(el)
    } else if (el.open) {
      el.setAttribute('data-closing', '')
      await modalOut(el)
      el.close() // fires the 'close' event → cleanUp()
    }
  },
)

// runs after every close, whatever closed it
function cleanUp() {
  const el = dialog.value
  el.removeAttribute('data-closing')
  el.style.opacity = ''
  el.style.transform = ''
  document.documentElement.classList.remove('overflow-hidden')
  opener?.focus()

  // the browser can close the dialog on its own (e.g. pressing Esc twice): keep the parent state in sync
  if (props.open) emit('close')
}

// Esc: cancel the instant native close and let the parent close it with the exit animation
function onCancel(event) {
  event.preventDefault()
  emit('close')
}

// a click outside the panel lands on the <dialog> element itself (its ::backdrop)
// both press and release must happen there, so selecting text and releasing outside does not close it
function onPointerDown(event) {
  pressStartedOnBackdrop = event.target === dialog.value
}

function onClick(event) {
  if (pressStartedOnBackdrop && event.target === dialog.value) emit('close')
}
</script>

<template>
  <dialog
    ref="dialog"
    aria-labelledby="detail-title"
    class="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-hidden rounded-2xl border border-line bg-surface p-0 text-text shadow-[0_24px_64px_-16px_rgb(0_0_0/0.75)]"
    @cancel="onCancel"
    @close="cleanUp"
    @pointerdown="onPointerDown"
    @click="onClick"
  >
    <div v-if="item" class="flex max-h-[inherit] flex-col">
      <header class="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6 sm:py-5">
        <div class="min-w-0 pt-1">
          <h2 id="detail-title" class="text-xl font-semibold text-text sm:text-2xl wrap-anywhere">{{ item.title }}</h2>
          <p v-if="item.meta" class="mt-1 font-mono text-xs text-muted">{{ item.meta }}</p>
        </div>
        <button
          type="button"
          aria-label="Fechar detalhe"
          class="-mr-2 grid size-11 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-raised hover:text-text"
          @click="emit('close')"
        >
          <BaseIcon name="close" class="size-5" />
        </button>
      </header>

      <!-- only this middle part scrolls when the content is taller than the screen -->
      <div class="overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
        <div class="space-y-3 text-text wrap-anywhere">
          <p v-for="(paragraph, index) in item.details.length ? item.details : [item.summary]" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <section v-if="item.tags.length" class="mt-6" aria-labelledby="detail-tags-title">
          <h3 id="detail-tags-title" class="text-sm font-medium text-muted">{{ item.tagsLabel ?? 'Tecnologias' }}</h3>
          <TagList :tags="item.tags" class="mt-2.5" />
        </section>

        <ul v-if="item.links.length" class="mt-6 flex flex-wrap gap-2">
          <li v-for="link in item.links" :key="link.url" class="max-w-full">
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-line bg-raised px-3.5 py-2 text-sm wrap-anywhere text-text transition-colors hover:border-accent/50 hover:text-accent"
            >
              <BaseIcon :name="link.icon" class="size-4.5 shrink-0" />
              {{ link.label }}
              <span class="sr-only">(abre numa nova janela)</span>
            </a>
          </li>
        </ul>

        <p v-if="item.privateRepo" class="mt-6 flex items-center gap-2 text-sm text-muted">
          <BaseIcon name="lock" class="size-4" />
          Repositório privado
        </p>
      </div>

      <footer class="flex justify-end border-t border-line px-5 py-4 sm:px-6">
        <button
          type="button"
          class="min-h-11 rounded-lg bg-accent px-5 font-medium text-on-accent transition-[filter,scale] duration-150 hover:brightness-110 active:scale-[0.97]"
          @click="emit('close')"
        >
          Fechar
        </button>
      </footer>
    </div>
  </dialog>
</template>
