<template>
    <ul>
        <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
    </ul>
</template>

<script setup>
import { ref } from "vue";
    let countries = ref([ {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: "UK"
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'IT',
        name: 'Italy'
    }
    ])
</script>

<style scoped>
</style>