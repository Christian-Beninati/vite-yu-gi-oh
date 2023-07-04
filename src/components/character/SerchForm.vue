<script>

export default {
    props: {
        types: Array,
    },
    emits: ['type-selected'],

    methods: {
        handleTypeChange(event) {
            const selectedType = event.target.value;

            this.$emit('type-selected', selectedType);
        },
    },
};
</script>

<template>
    <select class="form-select " aria-label="Default select example" @change="handleTypeChange">
        <option selected>Search...</option>
        <option v-for="typeName in types" :key="typeName">{{ typeName }}</option>

    </select>
</template>

<style scoped>
.form-select {
    width: 300px;
}
</style>
