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
  <hr />
  <router-view :keywords="keywords"></router-view>
</template>

<script>
export default {
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    handleSearch() {
      if (this.keywords) {
        this.$router.push(`search`)
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