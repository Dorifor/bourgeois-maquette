<template>
  <h2>Je cherche...</h2>
  <div class="search-container">
    <input
      type="text"
      class="search-bar"
      v-model="keywords"
      placeholder="Une référence, un interlocuteur, une commande..."
      @input="handleSearch"
    />
    <ui-icon class="search-icon" size="36">search</ui-icon>
  </div>

  <ul v-if="source.length > 0">
    <li v-for="produit in source" :key="produit.slug">{{ produit.slug }} : {{ produit.libelle }}</li>
  </ul>
  <hr />
  <router-view></router-view>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      keywords: '',
      source: [],
    }
  },
  methods: {
    handleSearch() {
      if (this.keywords) {
        axios.get(`http://localhost:1337/produits?slug_contains=${this.keywords}`)
          .then(res => this.source = res.data)
          .catch(err => console.log(err));

        this.$router.push(`/search/${this.keywords}`)
      } else {
        this.source = [];
        this.$router.push("/");
      }
    }
  }
}
</script>

<style>
.search-container {
  position: relative;
  width: max-content;
  margin: 0 auto;
}

.search-container .search-icon {
  position: absolute;
  right: 0.75em;
  top: 0.6em;
}

.search-bar {
  width: 50em;
  border-radius: 3em;
  border: none;
  background-color: white !important;
  box-shadow: 0 2px 5px gray;
  height: 3em;
  padding: 1em 3em;
  font-size: 1em;
}

.search-bar::placeholder {
  color: gray;
  font-style: italic;
}

.search-bar:focus-visible {
  outline: none;
}

hr {
  /* width: 80%; */
  margin: 4em 2em 1em;
  color: #75be00;
}
</style>