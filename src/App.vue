<script>
import AppMain from './/components/AppMain.vue';

export default {
    data() {
        return {

        }
    },
    components: { AppMain }
}
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
