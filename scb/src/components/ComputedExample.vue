<template>
    <div>
        <label v-custom-font.xxl.blue for="">Subtotal:</label>
        <input  type="number" v-model="subtotal">
        <h3 v-custom-font.red.lg >Total impuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    
    const vat  = 21
    let subtotal = ref(0)

    const totalVat = computed(()=> (vat * subtotal.value / 100))

    /*
    100------------------------subtotal
    21-------------------------- x

    x = (21 * subtotal) / 100
    */

</script>

<style scoped>
 input{
    background-color: blue;
    color: white;
    margin: 10px;
 }
</style>