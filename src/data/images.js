// optional images: drop a file in src/assets/images/ and it is picked up automatically
// (Vite inlines them into the single index.html at build time)
//   profile photo → src/assets/images/profile.jpg
//   project image → src/assets/images/projects/<project-id>.jpg
//   hobby image   → src/assets/images/hobbies/<hobby-id>.jpg
const files = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' })

// findImage('profile') or findImage('projects/banca') → image URL, or null if the file does not exist
export function findImage(name) {
  const match = Object.keys(files).find((path) => path.replace(/\.\w+$/, '').endsWith(`/images/${name}`))
  return match ? files[match] : null
}
