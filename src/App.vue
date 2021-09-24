<template>
  <!-- <ui-top-app-bar class="top-bar" :nav-icon="false">Platea</ui-top-app-bar> -->
  <div class="info">
    <ui-icon :size="iconSize">information</ui-icon>
  </div>
  <nav class="top-nav">
    <!-- <h2>LOGO PLATEA</h2> -->
    <img src="https://github.com/Dorifor/bourgeois-maquette/raw/master/public/logo%20platea.png" alt="logo platea">
  </nav>
  <nav class="main-nav">
    <div class="nav-content">
      <div class="nav-item">
        <router-link
          to="/"
        >
          <ui-icon :size="iconSize">search</ui-icon>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link exact to="/inventory">
          <ui-icon :size="iconSize">inventory_2</ui-icon>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link exact to="/settings">
          <ui-icon :size="iconSize">settings</ui-icon>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link exact to="/summary">
          <ui-icon :size="iconSize">summarize</ui-icon>
        </router-link>
      </div>
    </div>
  </nav>
  <main>
    <!-- Content -> Router View -->
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      iconSize: 36
    }
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  /* background: red; */
}

.info {
  grid-area: info;
  background: white;
  margin: auto;
  height: 50%;
  width: 50%;
}

.material-icons {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
}

.info .material-icons {
  margin: auto;
  color: #75be00;
}

nav .material-icons {
  padding: 0.3em;
  border-radius: 10px;
}

main {
  padding: 4em 4em 0 4em;
  /* height: 100%; */
  grid-area: content;
  background: #f4f4f4;
  /* overflow: hidden; */
}

ui-grid {
  padding: 0 !important;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  /* margin-top: 60px; */
  display: grid;
  grid-template-columns: 5em 1fr;
  grid-template-rows: 5em 1fr;
  grid-template-areas:
    "info top-nav"
    "main-nav content";
  height: 100%;
}

nav.main-nav {
  grid-area: main-nav;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 5em;
  background: #e8eedc;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  /* background: #e8eedc; */
}

nav.top-nav {
  grid-area: top-nav;
  /* padding: 1em; */
  height: 100%;
  background: white;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  text-align: left;
  padding-left: 1em;
}

nav.top-nav img {
  height: 5em;
  /* margin: auto; */
}

.nav-content {
  display: flex;
  padding-top: 3em;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3em;
  height: auto;
  /* flex: 1; */
}

a {
  font-weight: bold;
  color: #75be00;
  transition: 0.2s;
}

a.router-link-exact-active .material-icons {
  background: white;
  box-shadow: 0 2px 2px rgba(128, 128, 128, 0.25);
  transition: 0.2s;
}

@media screen and (max-width: 400px) {
  #app {
    grid-template-areas: 
      "info top-nav"
      "content content"
    ;
    margin-bottom: ;
  }

  nav.main-nav {
    position: fixed;
    bottom: 0;
    flex-direction: row;
    gap: unset;
    height: auto;
    width: 100%;
  }

  .nav-content {
    flex-direction: row;
    gap: unset;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 4em;
    padding: .2em 0;
  }
}
</style>
