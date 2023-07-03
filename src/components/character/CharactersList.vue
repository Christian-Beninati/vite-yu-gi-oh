<script>
//  Import CharacterCard
import CharacterCard from './CharacterCard.vue';

// Import Store  precedentemente esportato da store.js
import { store } from '../../data/store'

export default {
    components: { CharacterCard },
    data() {
        // Prendo i dati da STORE e li metto in data per poterli stampare in tamplate
        return { store }
    }

};
</script>

<template>
    <section id="characters" class="container">
        <div class="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-5 mt-3">

            <!-- Per il v-for uso STORE.characters -->
            <div class="col" v-for="character in store.characters" :key="character.id">
                <CharacterCard :image="character.imageUrl" :number="character.number" :name="character.name"
                    :type="character.type1" />

            </div>
        </div>

    </section>
</template>

<style scoped ></style>
