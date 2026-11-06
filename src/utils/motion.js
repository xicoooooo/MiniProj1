// motion/mini: tiny build of Motion's animate() (uses the browser's web animations API)
import { animate } from 'motion/mini'

// exponential ease-out: fast start, soft landing
const easeOutExpo = [0.16, 1, 0.3, 1]

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// helpers for vue's <Transition :css="false" @enter="…" @leave="…">
// vue passes the element and a `done` callback that must be called when the animation ends

export function dropIn(el, done) {
  if (prefersReducedMotion()) return done()
  animate(
    el,
    { opacity: [0, 1], transform: ['translateY(-8px)', 'translateY(0)'] },
    { duration: 0.28, ease: easeOutExpo },
  ).then(done)
}

export function dropOut(el, done) {
  if (prefersReducedMotion()) return done()
  animate(
    el,
    { opacity: [1, 0], transform: ['translateY(0)', 'translateY(-6px)'] },
    { duration: 0.16, ease: 'easeIn' },
  ).then(done)
}
