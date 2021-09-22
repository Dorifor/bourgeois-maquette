<template>
  <h2>Je cherche...</h2>
  <ui-autocomplete
    withTrailingIcon="true search"
    class="search-bar"
    v-model="keywords"
    :source="source"
    placeholder="Une référence, un interlocuteur, une commande"
  ></ui-autocomplete>

  <hr />

  <section class="grid-accueil">
    <section class="card-state">
      <h4>Etat</h4>
      <p>
        Stock
        <span class="stock">{{ currentStock }} / {{ maxStock }}</span>
      </p>
      <p>Vétusté</p>
      <figure>
        <ui-progress class="progress-bar" label="Vétusté" progress="0.4" buffer="1"></ui-progress>
      </figure>
    </section>
    <section class="card-price">
      <h4>Prix</h4>
      <p>Tonne du plastique</p>
      <hr />
      <h4>Délai</h4>
      <p>2 semaines</p>
    </section>
    <section class="card-declare">
      <h2>Je déclare</h2>
      <ui-select :options="declareOptions" v-model="selected"></ui-select>
      <ui-button icon="validate">Valider</ui-button>
    </section>
    <section class="card-history">
      <h4>Historique</h4>
      <div class="command" v-for="i in 3" :key="i">
        <h6>Commande {{ i }}</h6>
        <p>
          <span class="hour">8:30</span>
          <span class="date">10 mai 2021</span>
        </p>
        <hr />
      </div>
      <ui-button outlined>Historique Complet</ui-button>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      source: [
        "AAA001",
        "ABB002",
        "ACC003",
        "ADD004",
        "ADD005",
        "ADE006",
        "ACE007",
        "EGE008"
      ],
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
}

.grid-accueil section {
  text-align: left;
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 0 3px 4px rgba(128, 128, 128, 0.445);
}

.grid-accueil section h4 {
  margin: 0;
}

.grid-accueil section hr {
  margin: 0.8em;
}
.card-state {
  grid-area: state;
  background: #e8eedc;
}

.card-price {
  grid-area: price;
  background: #e8eedc;
}

.card-declare {
  grid-area: declare;
  background-color: white;
}

.card-history {
  grid-area: history;
  color: gray;
  background: white;
}

.search-bar {
  width: 50em;
  border-radius: 30px;
  border: none;
  background-color: white !important;
  box-shadow: 0 2px 5px gray;
}

.progress-bar {
  text-align: left;
  margin: 0 0;
  /* width: 80%; */
}

hr {
  /* width: 80%; */
  margin: 4em 2em 1em;
  color: #75be00;
}

.mdc-text-field__ripple,
.mdc-line-ripple {
  display: none;
}

.mdc-autocomplete__list {
  border: none;
  margin: 0 2em;
  box-shadow: 0 3px 3px gray;
  border-radius: 0 0 10px 10px;
  /* transition: .2s; */
}
</style>