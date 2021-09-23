<template>
  <h2>{{ produit.slug }} - {{ produit.libelle }}</h2>
  <hr />
  <p>{{ produit.description }}</p>
  <h4>prix : {{ produit.prix }}€</h4>
  <img
    v-for="plan in produit.plans"
    :src="`http://localhost:1337${plan.url}`"
    :alt="`plan numero ${plan.id}`"
    :key="plan.id"
  />
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      produit: {}
    }
  },
  mounted() {
    const slug = this.$route.params.slug;
    axios.get(`http://localhost:1337/produits/${slug}`)
      .then(res => this.produit = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
td {
  padding: 0.5em;
}
</style>