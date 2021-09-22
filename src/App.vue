<template>
  <!-- <ui-top-app-bar class="top-bar" :nav-icon="false">Platea</ui-top-app-bar> -->
  <div class="info">
    <ui-icon>information</ui-icon>
  </div>
  <nav class="top-nav">
    <h2>LOGO PLATEA</h2>
  </nav>
  <nav class="side-nav">
    <div class="nav-content">
      <div class="nav-item">
        <router-link to="/">
          <ui-icon>search</ui-icon>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/inventory">
          <ui-icon>inventory_2</ui-icon>
        </router-link>
      </div>
      <div class="nav-item" to="/settings">
        <router-link to="/settings">
          <ui-icon>settings</ui-icon>
        </router-link>
      </div>
      <div class="nav-item" to="/summary">
        <router-link to="/summary">
          <ui-icon>summarize</ui-icon>
        </router-link>
      </div>
    </div>
  </nav>
  <main>
    <!-- Content -> Router View -->
    <router-view />
  </main>
</template>

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

.info .material-icons {
  margin: auto;
  font-size: 3em;
  color: #75be00;
}

main {
  padding: 4em;
  /* height: 100%; */
  grid-area: content;
  background: #f4f4f4;
  overflow: hidden;
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
    "side-nav content";
  height: 100%;
}

nav.side-nav {
  grid-area: side-nav;
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

.nav-content {
  display: flex;
  padding-top: 3em;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3em;
  height: 100%;
  /* flex: 1; */
}

nav .material-icons {
  font-size: 3em;
}

a {
  font-weight: bold;
  color: #75be00;
}

a.router-link-exact-active {
  color: #75be00;
}
</style>
