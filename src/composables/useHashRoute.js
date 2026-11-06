import { ref, onMounted, onBeforeUnmount } from 'vue'
import { views, defaultViewId } from '../data/navigation.js'

const validViewIds = new Set(views.map((view) => view.id))

// '#/o-que-faco' → 'o-que-faco'; returns null for an empty or unknown fragment
function readViewFromHash() {
  const id = window.location.hash.replace(/^#\/?/, '')
  return validViewIds.has(id) ? id : null
}

// keeps the active view in sync with the URL fragment (#/…)
// the nav links are plain <a href="#/id">: the browser changes the hash and adds a history entry,
// and the 'hashchange' event (also fired by Back/Forward) tells us which view to show
export function useHashRoute() {
  const activeView = ref(readViewFromHash() ?? defaultViewId)

  function syncFromHash() {
    const id = readViewFromHash()

    if (id) {
      activeView.value = id
      return
    }

    // empty or unknown fragment: show the default view and fix the URL without adding a history entry
    activeView.value = defaultViewId
    history.replaceState(null, '', `#/${defaultViewId}`)
  }

  onMounted(() => {
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
  })

  onBeforeUnmount(() => window.removeEventListener('hashchange', syncFromHash))

  return { activeView }
}
