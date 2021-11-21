import Home from './views/Home.vue'
import About from './views/About.vue'
import Front from './views/Front.vue'
import Invoice from './views/Invoice.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Front, meta: { title: 'Home' } },
  { path: '/about', component: About },
  { path: '/:path(.*)', component: NotFound },
  { path: '/front', component: Front},
  { path: '/invoice', component: Invoice},
]
