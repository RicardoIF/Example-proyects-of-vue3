<template>
    <!-- <p v-bind:class="{'danger' : hasError}">Mensaje se ha enviado!</p> -->
    <!-- <p v-bind:style="{
        backgroundColor : 'blue',
        color : 'white'
    }">Mensaje se ha enviado!</p> -->
    <p :style="{backgroundColor: 'black', color:c}">Mensaje se ha enviado!</p>
    <button v-on:click="handleClick">Cambiar Color</button>
</template>

<script setup>
import {ref} from 'vue'
    let c = ref('white');
    const handleClick = ()=>{c.value = '#ff0000'}
</script>

<style scoped>
    p{
        font-family: sans-serif;
    }
    .danger{
        color: red;
    }
</style>