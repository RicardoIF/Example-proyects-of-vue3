<template>
 <div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <input type="text" v-model="message"/>
    <button @click="handleClick">Di hola</button>
 </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
    const props = defineProps({
        title :{ 
            require: true 
        },
        content:{
            require: false,
            default: 'Default'
        }
    })
    const emit = defineEmits('sayHi')
    const handleClick = () =>{
        emit("sayHi", message.value)
    }
    let message = ref("")
</script>

<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>