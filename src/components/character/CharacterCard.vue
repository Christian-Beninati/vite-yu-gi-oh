<script>
export default {
    props: {
        image: String,
        number: 0,
        name: String,
        type: String,
    }
}
</script>

<template>
    <div class="card text-center">
        <img :src="image" :alt="name" class="img-fluid rounded-circle mb-3 ">
        <h5>{{ number }}</h5>
        <h5 class="fw-bold">{{ name }}</h5>
        <h5>{{ type }}</h5>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.card {
    background-color: $yellow;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

img {
    width: 150px;
    height: 150px;
    margin: 10px auto;
}
</style>