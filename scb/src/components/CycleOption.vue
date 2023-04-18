<template>
 <div>Hola Mundo</div>
</template>

<script setup>
import { onMounted, onUpdated} from 'vue'
onMounted(() => {
    console.log('Mounted');
})
onUpdated(() => {
    console.log('Update')
})
</script>

<style scoped>

</style>