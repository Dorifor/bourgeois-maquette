<template>
  <section v-for="produit in produits" class="produit" :key="produit.slug">
    <h4>{{ produit.slug }} : {{ produit.libelle }}</h4>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      produits: []
    }
  },
  props: ['keywords'],
  watch: {
    keywords(word) {
      if (word) {
        this.fetchProduits(word);
      }
    }
  },
  methods: {
    fetchProduits(filter) {
      axios.get(`http://localhost:1337/produits?slug_contains=${filter}`)
        .then(res => this.produits = res.data)
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchProduits(this.$props.keywords);
  }
}
</script>