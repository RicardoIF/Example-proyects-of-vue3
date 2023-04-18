<template>
<div class="post-card">
    <h3>
        Titulo
    </h3>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe laboriosam assumenda possimus velit veniam impedit tempore, pariatur ducimus id voluptas eum molestias vitae obcaecati, magni, consequatur quaerat vero harum?
    </p>
    <PostBtn></PostBtn>
</div>
</template>

<script setup>
    import PostBtn from './PostBtn.vue'
</script>

<style scoped>
    .post-card{
        border-radius: 15px;
        padding: 10px;
        margin: 10px;
        border: 1px solid #ccc;
    }
</style>