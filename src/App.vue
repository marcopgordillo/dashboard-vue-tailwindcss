<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="lg:container lg:mx-auto bg-green-400">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="font-sans bg-yellow-300 w-full h-40 text-center text-xl md:col-span-2">
        Grid Col 1
      </div>
      <div class="font-sans bg-yellow-300 w-full h-40 text-center text-xl">
        Grid Col 2
      </div>
      <div class="font-sans bg-yellow-300 w-full h-40 text-center text-xl">
        Grid Col 3
      </div>
    </div>
  </div>
</template>