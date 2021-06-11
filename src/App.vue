<template>
  <div id="app" class="container">
    <div id="nav">
      <Menu></Menu><br>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Menu from './views/MenuSuperior.vue';
  export default{
  components: { Menu }
  }
</script>

<style>

</style>
