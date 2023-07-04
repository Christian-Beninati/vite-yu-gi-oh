<script>

export default {
    props: {
        types: Array,
    },
    emits: ['type-selected', 'type-reset'],

    methods: {
        handleTypeChange(event) {
            const selectedType = event.target.value;

            this.$emit('type-selected', selectedType);
        },
        handleReset() {
            this.$emit('type-reset');
        },
    },

};
</script>

<template>
    <div class="d-flex">
        <select class="form-select me-3 " aria-label="Default select example" @change="handleTypeChange">
            <option selected>Search...</option>
            <option v-for="typeName in types" :key="typeName">{{ typeName }}</option>
        </select>
        <button type="button" class="btn btn-outline-warning" @click="handleReset">Reset</button>
    </div>
</template>

<style scoped>
.form-select {
    width: 300px;
}
</style>
