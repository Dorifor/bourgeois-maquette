import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Inventory from '@/views/Inventory.vue';
import Settings from '@/views/Settings.vue';
import Summary from '@/views/Summary.vue';
// import Produit from '@/views/Produit.vue';
import AccueilBase from '@/views/accueil/AccueilBase.vue';
import AccueilSearch from '@/views/accueil/AccueilSearch.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    children: [
      {
        path: "",
        component: AccueilBase
      },
      {
        path: 'search',
        component: AccueilSearch
      }
    ]
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/summary',
    name: 'Summary',
    component: Summary
  },
  // {
  //   path: '/produit/:slug',
  //   name: 'Produit',
  //   components: {
  //     default: Accueil,
  //     accueilBottom: Produit
  //   }
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
