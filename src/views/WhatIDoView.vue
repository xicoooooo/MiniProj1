<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects, skills, education, certificates } from '../data/cv.js'

// a selected project is passed up to App, which opens the reusable modal
defineEmits(['select'])
</script>

<template>
  <section aria-labelledby="what-i-do-title">
    <h1 id="what-i-do-title" tabindex="-1" class="text-4xl font-semibold text-text outline-none sm:text-5xl">
      O que faço?
    </h1>
    <p class="mt-3 text-lg text-muted">Projetos, competências e formação.</p>

    <!-- desktop: two columns; mobile: stacked in reading order -->
    <div class="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
      <section aria-labelledby="projects-title">
        <h2 id="projects-title" class="text-xl font-semibold text-text">Projetos</h2>
        <ul class="mt-5 space-y-3">
          <li v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" @select="$emit('select', $event)" />
          </li>
        </ul>
      </section>

      <div class="space-y-12">
        <section aria-labelledby="skills-title">
          <h2 id="skills-title" class="text-xl font-semibold text-text">Competências</h2>
          <dl class="mt-5 divide-y divide-line border-y border-line">
            <div v-for="skill in skills" :key="skill.group" class="grid gap-2 py-3.5 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-4">
              <dt class="text-sm text-muted">{{ skill.group }}</dt>
              <dd class="text-sm text-text">{{ skill.items.join(' · ') }}</dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby="education-title">
          <h2 id="education-title" class="text-xl font-semibold text-text">Formação</h2>
          <ol class="mt-5 space-y-5 border-l border-line pl-5">
            <li v-for="item in education" :key="item.degree" class="relative">
              <span aria-hidden="true" class="absolute top-2 -left-[1.4rem] size-2 rounded-full bg-accent"></span>
              <p class="font-mono text-xs text-muted">{{ item.period }}</p>
              <p class="mt-1 font-medium text-text [overflow-wrap:anywhere]">{{ item.degree }}</p>
              <p class="text-sm text-muted">{{ item.school }}</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="certificates-title">
          <h2 id="certificates-title" class="text-xl font-semibold text-text">Certificados</h2>
          <ul class="mt-5 space-y-3">
            <li v-for="certificate in certificates" :key="certificate.name" class="text-sm">
              <p class="text-text">{{ certificate.name }}</p>
              <p class="text-muted">{{ certificate.issuer }}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
