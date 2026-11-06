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
  mail: ['M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10', 'M3 7l9 6l9 -6'],
  phone: ['M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'],
  world: [
    'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0',
    'M3.6 9h16.8',
    'M3.6 15h16.8',
    'M11.5 3a17 17 0 0 0 0 18',
    'M12.5 3a17 17 0 0 1 0 18',
  ],
  'arrow-up-right': ['M17 7l-10 10', 'M8 7l9 0l0 9'],
  lock: [
    'M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6',
    'M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0',
    'M8 11v-4a4 4 0 1 1 8 0v4',
  ],
  code: ['M7 8l-4 4l4 4', 'M17 8l4 4l-4 4', 'M14 4l-4 16'],
  bulb: [
    'M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7',
    'M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3',
    'M9.7 17l4.6 0',
  ],
  'ball-tennis': ['M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', 'M6 5.3a9 9 0 0 1 0 13.4', 'M18 5.3a9 9 0 0 0 0 13.4'],
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
