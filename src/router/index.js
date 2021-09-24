import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from "@/views/Accueil.vue";
import Inventory from "@/views/Inventory.vue";
import Settings from "@/views/Settings.vue";
import Summary from "@/views/Summary.vue";
import Produit from "@/views/Produit.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
  {
    path: "/produit/:slug",
    name: "Produit",
    component: Produit,
  },
  {
    path: "*",
    name: "catchAll",
    component: Accueil,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
