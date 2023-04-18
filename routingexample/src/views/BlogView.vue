<template>
    <h1>Blog</h1>
    <ul>
        <li><router-link :to="{name: 'post', params: {id: 1}}" > Primer post </router-link></li>
        <li><router-link :to="{name: 'post', params: {id: 2}}"> Segundo post </router-link></li>
        <li><router-link :to="{name: 'post', params: {id: 3}}"> Tercero post </router-link></li>
    </ul>
</template>

<style scoped lang="scss">
    
</style>