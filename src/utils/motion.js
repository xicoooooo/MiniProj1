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

// view change: the new view rises gently into place, the old one just fades (exit faster than enter)

export function viewIn(el, done) {
  if (prefersReducedMotion()) return done()
  animate(
    el,
    { opacity: [0, 1], transform: ['translateY(8px)', 'translateY(0)'] },
    { duration: 0.32, ease: easeOutExpo },
  ).then(done)
}

// modal: opens with a small rise and scale, closes faster (the backdrop fade lives in main.css)

export function modalIn(el) {
  if (prefersReducedMotion()) return
  animate(
    el,
    { opacity: [0, 1], transform: ['translateY(8px) scale(0.97)', 'translateY(0) scale(1)'] },
    { duration: 0.26, ease: easeOutExpo },
  )
}

// returns a promise so the caller can wait before actually closing the <dialog>
export function modalOut(el) {
  if (prefersReducedMotion()) return Promise.resolve()
  const animation = animate(
    el,
    { opacity: [1, 0], transform: ['scale(1)', 'scale(0.98)'] },
    { duration: 0.14, ease: 'easeIn' },
  )
  // safety net: browsers pause animations in hidden tabs, and closing must never depend on one finishing
  // (if time runs out, cancel it so it cannot apply its final opacity: 0 after the dialog is closed)
  const timeout = new Promise((resolve) => setTimeout(() => resolve('timeout'), 250))
  return Promise.race([animation, timeout]).then((result) => {
    if (result === 'timeout') animation.cancel()
  })
}

export function viewOut(el, done) {
  if (prefersReducedMotion()) return done()
  animate(el, { opacity: [1, 0] }, { duration: 0.12, ease: 'easeIn' }).then(done)
}
