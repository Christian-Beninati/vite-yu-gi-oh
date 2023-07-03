<script>
// Import axios
import axios from 'axios';
// Endpoint
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

// Import Store precedentemente esportato da store.js
import { store } from './data/store.js'

// Import AppMain
import AppMain from './/components/AppMain.vue';


export default {
    components: { AppMain, },

    // Alla chiamata Created prendiamo i dati e li pasiamo al file STORE.js
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
    }
};
</script>

<template>
    <!-- Header -->
    <header>
        <h1 class="text-center mt-4">Pokévuex</h1>
    </header>


    <!-- AppMain -->
    <AppMain />
</template>

<style lang="scss">
@use './assets//scss/style.scss'
</style>
