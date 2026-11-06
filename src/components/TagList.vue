<script setup>
defineProps({
  tags: { type: Array, required: true },
  // show only the first N tags, followed by "+X"
  limit: { type: Number, default: Infinity },
})
</script>

<template>
  <ul class="flex flex-wrap gap-1.5">
    <li
      v-for="tag in tags.slice(0, limit)"
      :key="tag"
      class="rounded-md border border-line bg-raised px-2 py-0.5 font-mono text-xs text-muted"
    >
      {{ tag }}
    </li>
    <li v-if="tags.length > limit" class="px-1 py-0.5 font-mono text-xs text-muted">
      +{{ tags.length - limit }}
    </li>
  </ul>
</template>
