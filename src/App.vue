<script>
// Import axios
import axios from 'axios';
// Endpoint
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

// Import Store precedentemente esportato da store.js
import { store } from './data/store.js'

// Import AppMain
import AppMain from './/components/AppMain.vue';

// import SerchForm
import SerchForm from './/components/character/SerchForm.vue';

export default {
    components: { AppMain, SerchForm },
    data() {
        return {
            types:
                ["Bug", "Dark", "Dragon", "Electric", "Fairy", "Fighting", "Fire", "Flying", "Ghost", "Grass", "Ground", "Ice", "Normal", "Poison", "Psychic", "Rock", "Steel", "Water"],
            selectedType: null,
        }
    },
    // Alla chiamata Created prendo i dati e li paso al file STORE.js
    created() {
        // loading true (da Store)
        store.isLoading = true;

        axios.get(endpoint).then(res => {
            store.characters = res.data.docs;
            // loading error
        }).catch(err => {
            console.error(err.message);
            // loading false (da Store)
        }).then(() => {
            store.isLoading = false;
        })
    },

    methods: {
        handleTypeSelected(selectedType) {
            this.selectedType = selectedType;

            // Effettuo la chiamata API con il tipo selezionato come parametro di query
            axios.get(`${endpoint}?eq[type1]=${selectedType}`)
                .then(res => {
                    // Aggiorno i dati nel componente AppMain con i risultati della chiamata API
                    store.characters = res.data.docs;
                })
                .catch(err => {
                    console.error(err.message);
                });
        },

        handleReset() {
            this.selectedType = null;

            // Effettuo la chiamata API per ottenere tutti i personaggi
            axios.get(endpoint)
                .then(res => {
                    // Aggiorno i dati nel componente AppMain con i risultati della chiamata API
                    store.characters = res.data.docs;
                })
                .catch(err => {
                    console.error(err.message);
                });
        },

    },

};
</script>

<template>
    <!-- Header -->
    <header class="container">
        <h1 class="text-center mt-4">Pokévuex</h1>

        <!-- SerchForrm -->
        <SerchForm :types="types" @type-selected="handleTypeSelected" @type-reset="handleReset" />
    </header>


    <!-- AppMain -->
    <AppMain />
</template>

<style lang="scss">
@use './assets//scss/style.scss'
</style>
