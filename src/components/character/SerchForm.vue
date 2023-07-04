<script>

export default {
    data() {
        return {

        }
    },
    emits: ['option-change']
};
</script>

<template>
    <select class="form-select " aria-label="Default select example" @change="$emit('option-change', serchTerm)">
        <option selected>Search...</option>

    </select>
</template>

<style scoped>
.form-select {
    width: 300px;
}
</style>
