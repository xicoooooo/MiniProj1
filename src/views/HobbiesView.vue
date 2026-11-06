<script setup>
import HobbyCard from '../components/HobbyCard.vue'
import { hobbies } from '../data/cv.js'

// a selected hobby is passed up to App, which opens the same reusable modal as the projects
defineEmits(['select'])
</script>

<template>
  <section aria-labelledby="hobbies-title">
    <h1 id="hobbies-title" tabindex="-1" class="text-4xl font-semibold text-text outline-none sm:text-5xl">Hobbies</h1>
    <p class="mt-3 text-lg text-muted">Tecnologia, projetos pessoais e padel.</p>

    <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="hobby in hobbies" :key="hobby.id">
        <HobbyCard :hobby="hobby" @select="$emit('select', $event)" />
      </li>
    </ul>
  </section>
</template>
