<script setup>
// outline icons from Tabler Icons (MIT licence, https://tabler.io/icons), inlined as SVG paths so the app needs no icon font or extra request
const icons = {
  instagram: [
    'M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10',
    'M8.5 12a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0 -7 0',
    'M17 7v.01',
  ],
  github: [
    'M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5',
  ],
  linkedin: [
    'M8 11v5',
    'M8 8v.01',
    'M12 16v-5',
    'M16 16v-3a2 2 0 1 0 -4 0',
    'M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10',
  ],
  'x-brand': ['M4 4l11.733 16h4.267l-11.733 -16l-4.267 0', 'M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772'],
  menu: ['M4 6l16 0', 'M4 12l16 0', 'M4 18l16 0'],
  close: ['M18 6l-12 12', 'M6 6l12 12'],
}

defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <!-- decorative: the parent element always provides the accessible name. -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path v-for="(path, index) in icons[name]" :key="index" :d="path" />
  </svg>
</template>
