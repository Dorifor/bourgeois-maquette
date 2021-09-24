<template>
  <section class="grid-accueil">
    <section class="card-state">
      <h3>Etat</h3>
      <p>
        <strong>Stock</strong>
        <span class="stock">{{ currentStock }} / {{ maxStock }}</span>
      </p>
      <div class="vestuste">
        <p>
          <strong>Vétusté</strong>
        </p>
        <figure>
          <ui-progress class="progress-bar" label="Vétusté" progress="0.4" buffer="1"></ui-progress>
        </figure>
      </div>
    </section>
    <section class="card-price">
      <h3>Prix</h3>
      <p>Tonne du plastique</p>
      <hr />
      <h3>Délai</h3>
      <p>2 semaines</p>
    </section>
    <section class="card-declare">
      <div class="declare-input">
        <h3>Je déclare</h3>
        <ui-select :options="declareOptions" v-model="selected"></ui-select>
      </div>
      <ui-button unelevated icon="check">Valider</ui-button>
    </section>
    <section class="card-history">
      <h3>Historique</h3>
      <div class="command" v-for="i in 3" :key="i">
        <h5>Commande {{ i }}</h5>
        <ui-icon size="12" class="arrow-icon">arrow_forward</ui-icon>
        <p>
          <span class="hour">8:30</span>
          <span class="date">10 mai 2021</span>
        </p>
        <hr />
      </div>
      <ui-button unelevated>Historique Complet</ui-button>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentStock: 152,
      maxStock: 2000,
      declareOptions: [
        {
          label: "Arrivée de stock",
          value: "gotStock"
        },
        {
          label: "Plus de stock",
          value: "noStock"
        },
        {
          label: "Erreur de réception",
          value: "receptionError"
        },
        {
          label: "Oui",
          value: "yes"
        },
      ]
    }
  }
}

</script>

<style>
.grid-accueil {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "state price history"
    "state price history"
    "declare declare history";
  gap: 2em;
  padding: 2em;
  transition: opacity 0.4s ease;
}

.grid-accueil section {
  text-align: left;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0 3px 4px rgba(128, 128, 128, 0.445);
}

.grid-accueil section figure {
  margin-left: 0;
}

.grid-accueil section p {
  display: flex;
  justify-content: space-between;
}

.grid-accueil section h3 {
  margin: 0;
}

.grid-accueil section hr {
  margin: 0.8em 0;
}
.card-state {
  grid-area: state;
  background: #e8eedc;
}

.card-state p,
.card-state .progress-bar {
  margin-left: 2em;
}

.card-price {
  grid-area: price;
  background: #e8eedc;
}

.card-price hr {
  color: white;
  background-color: white;
  border: white 1px solid;
}

.card-declare {
  grid-area: declare;
  background-color: white;
  gap: 1em;
}

.card-declare button {
  width: auto;
  margin: 0 auto;
  padding: 0 4em;
  color: white !important;
  border-radius: 20px;
  overflow: hidden;
}

.card-declare .declare-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
}

.card-declare .declare-input:last-child {
  flex: 1;
}

.card-history {
  grid-area: history;
  color: gray;
  background: white;
  line-height: 0.8;
}

.card-history .command {
  transition: 0.2s;
  border-radius: 5px;
  padding: 1em;
  position: relative;
}

.card-history .command .arrow-icon {
  position: absolute;
  color: #75be00;
  top: 0.5em;
  right: 1em;
}

.card-history .command h5 {
  margin-top: 0;
}

.card-history .command:hover {
  cursor: pointer;
  background: #75be0020;
  transition: 0.3s;
}

.card-history h3 {
  color: black;
  margin-bottom: 1em !important;
}

.card-history button {
  background: gray !important;
  color: white !important;
  width: max-content;
  margin: 1em auto;
}

.card-history hr {
  color: gray;
}

.progress-bar {
  text-align: left;
  margin: 0 0;
  transform: scaleY(2.5);
  border-radius: 10px;
  /* width: 80%; */
}

.progress-bar span {
  border-color: gray !important;
  background-color: white !important;
}

.mdc-linear-progress__buffer-bar {
  background: white;
}

.mdc-select {
  flex: 1;
}
</style>