<template>
    <h1>Lista de posts <button type="submit" class="btn btn-primary">Botoncd</button></h1>
    <ul class="post-list">
        <li v-for="(post) in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<script setup>
    import PostService from '@/services/PostServices';
    import { onMounted } from 'vue';
    const service = new PostService()
    const posts = service.Posts
    onMounted(async () => {
        await service.fetchAll()
    })
</script>

<style scoped lang="scss">
h1{
    width: 30%;
    display: flex;
    margin: auto;
    font-family: sans-serif;
}
.post-list{
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    li{
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        text-align: center;
        font-family: sans-serif;
        color: $red;
    }
    li:hover{
        background-color: darken(#00000030,0);
    }
}
    
</style>