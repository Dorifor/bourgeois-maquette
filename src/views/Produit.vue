<template>
  <main>
    <section class="content">
      <h2>{{ produit.slug }} - {{ produit.libelle }}</h2>
      <hr />
      <p>{{ produit.description }}</p>
      <h3>prix : {{ produit.prix }}€</h3>
      <!-- <iframe
        id="d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c"
        src="https://www.vectary.com/viewer/v1/?model=d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c&turntable=-2"
        frameborder="0"
        width="100%"
        height="480"
      ></iframe>-->
      <model-viewer
        :src="`${publicPath}drill.glb`"
        alt="A 3D model of an astronaut"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
        orientation="0 0 180"
      ></model-viewer>
    </section>
    <section class="documents">
      <h4>Plans</h4>
      <hr class="divider" />
      <img
        v-for="plan in produit.plans"
        :src="`https://bourgeois-eu.herokuapp.com${plan.url}`"
        :alt="`plan numero ${plan.id}`"
        :key="plan.id"
      />
      <h4>Cahier des charges</h4>
      <hr class="divider" />
      <div class="cdc-container">
        <section class="file" v-for="file in cdc" :key="file.id" @click="handleClickFile(file.url)">
          <p>{{ file.name }}</p>
          <ui-icon>attachment</ui-icon>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      produit: {},
      cdc: [],
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {
    const slug = this.$route.params.slug;
    axios.get(`https://bourgeois-eu.herokuapp.com/produits?slug=${slug}`)
      .then(res => {
        this.produit = res.data[0];
        this.cdc = this.produit.cahier_des_charges;
      })
      .catch(err => console.log(err));
  },
  methods: {
    handleClickFile(url) {
      window.open(`https://bourgeois-eu.herokuapp.com${url}`)
    }
  }
}
</script>

<style scoped>
.cdc-container {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 1em;
}

.file {
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: solid 2px #75be00;
  transition: 0.3s;
  padding: 0.5em;
}

.file p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5em;
}

.file:hover {
  cursor: pointer;
  background: #75be0020;
  transition: 0.3s;
}

main {
  padding: 0;
  padding-top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 3em;
}

img {
  height: 200px;
}

hr {
  margin-top: 1em;
}

hr.divider {
  margin-left: 0;
  width: 30%;
  text-align: center;
}

.documents {
  text-align: left;
}

.documents h4 {
  margin-top: 3em;
}

model-viewer {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 400px) {
  main {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    max-width: 100vw;
    margin-bottom: 6em;
    gap: unset;
  }

  model-viewer {
    height: 400px;
  }

  .documents {
    margin: 1em;
  }

  p {
    margin: 1em;
  }
}
</style>