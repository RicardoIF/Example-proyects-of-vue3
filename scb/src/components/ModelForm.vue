<template>
    <form action="">
        <input type="text" v-model="inputText" name="" id="">
        <input type="checkbox" v-model="agree" name="" id=""> Terminos y condiciones
        <select v-model="country" name="" id="">
            <!-- <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option> -->
            <option>Spain</option>
            <option>UK</option>
            <option>France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>
    
<script setup>
    import {ref} from 'vue'
    let inputText = ref('');
    let agree = null;
    let country = ''

</script>

<style scoped>
</style>