<script>

export default {
    props: {
        types: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template>
    <select class="form-select " aria-label="Default select example">
        <option selected>Search...</option>
        <option v-for="typeName in types" :key="typeName">{{ typeName }}</option>

    </select>
</template>

<style scoped>
.form-select {
    width: 300px;
}
</style>
