<template>
  <header class="bg-gray-800 text-white p-4">
    <nav>
      <router-link to="/" class="mr-4">Inicio</router-link>
      <router-link to="/dislexia" class="mr-4">Dislexia</router-link>
      <router-link to="/daltonismo" class="mr-4">Daltonismo</router-link>
      <router-link to="/problemas-cognitivos">Problemas Cognitivos</router-link>
    </nav>
  </header>
  <RouterView/>
</template>

<script setup>

</script>
