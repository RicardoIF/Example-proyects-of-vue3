<template>
    <h1>Post view del elemento {{ postId }}</h1>

</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
    let postId = ref('')
    onMounted(() => {
        const rute = useRoute()
        postId.value = rute.params.id
    })
</script>