<template>
  <h2>Je cherche...</h2>
  <div class="search-container">
    <input
      type="text"
      class="search-bar"
      v-model="keywords"
      placeholder="Une référence (A001, B002, ...), un interlocuteur, une commande..."
      @input="handleSearch"
    />
    <ui-icon class="search-icon" size="36">search</ui-icon>
  </div>
  <hr />
  <!-- <router-view :keywords="keywords"></router-view> -->
  <transition name="fade" mode="out-in">
    <component :is="keywords ? 'AccueilSearch' : 'AccueilBase'" :produits-liste="fetchedProduits" :keywords="keywords"></component>
  </transition>
</template>

<script>
import axios from 'axios';
import AccueilBase from '../views/accueil/AccueilBase.vue';
import AccueilSearch from "../views/accueil/AccueilSearch.vue";

export default {
  components: {
    AccueilBase,
    AccueilSearch
  },
  data() {
    return {
      keywords: '',
      fetchedProduits: []
    }
  },
  methods: {
    handleSearch() {
      if (this.keywords) {
        // console.log(this.keywords)
        this.fetchProduits(this.keywords)
      } else {
        this.fetchedProduits = [];
      }
    },
    fetchProduits(filter) {
      axios.get(`https://bourgeois-eu.herokuapp.com/produits?slug_contains=${filter}`)
        .then(res => {
          console.log(res.data)
          this.fetchedProduits = res.data
        }
        )
        .catch(err => console.log(err));
    }
  },
}

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

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