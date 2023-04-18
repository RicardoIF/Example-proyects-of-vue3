<template>
  <div>
    <nav>
      <router-link class="router-link" to="/">Home</router-link> |
      <router-link class="router-link" to="/about">About</router-link> |
      <router-link class="router-link" to="/services">Services</router-link> | 
      <router-link class="router-link" to="/contact">Contact</router-link> | 
      <router-link class="router-link" to="/blog">Blog</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app{
  text-align: center;
}
.router-link{
  box-shadow: 3.5px 3px 0px 0px;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  text-decoration: none;
  background-color: lightgreen;
  color: green;  
}
.router-link-exact-active{
  margin: 5px;
  box-shadow: 3.5px 3px 0px 0px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  background-color: lightgreen;
  color: green;
}
</style>
