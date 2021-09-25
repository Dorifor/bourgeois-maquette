<template>
  <transition name="fade" mode="out-in">
    <main class="search-grid" :key="$props.keywords">
      <section
        v-for="produit in $props.produitsListe"
        class="produit"
        :key="produit.slug"
        tag="div"
        @click="handleClickProduit(produit.slug)"
      >
        <img :src="`https://bourgeois-eu.herokuapp.com${produit.plans[0].url}`" :alt="produit.plans[0].name" />
        <div class="produit-content">
          <h4>{{ produit.slug }} - {{ produit.libelle }}</h4>
          <p>{{ produit.description.slice(0, 120) }}...</p>
        </div>
        <ui-icon size="12" class="arrow-icon">arrow_forward</ui-icon>
      </section>
    </main>
  </transition>
</template>

<script>
export default {
  props: {
    produitsListe: Array,
    keywords: String
  },
  methods: {
    handleClickProduit(slug) {
      this.$router.push(`/produit/${slug}`);
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.search-grid {
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: space-around;
  transition: opacity 0.2s ease;
  margin-bottom: 5em;
}

.produit {
  background-color: white;
  box-shadow: 0 3px 4px rgba(128, 128, 128, 0.445);
  width: min-content;
  margin-bottom: 2em;
  transition: opacity 0.2s ease;
  transition: background-color 0.3s ease;
  position: relative;
}

.produit:hover {
  cursor: pointer;
  background-color: #75be0020;
  transition: background-color 0.3s ease;
}

.produit-content {
  padding: 1em 1.5em;
}

.produit img {
  width: 400px;
  max-width: 80vw;
}

.produit .arrow-icon {
  position: absolute;
  bottom: .5em;
  right: .5em;
  color: #75be00;
}
</style>