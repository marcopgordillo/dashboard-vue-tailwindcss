<template>
<div class="flex h-full">
  <div class="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
    <div class="w-full lg:fixed lg:w-24 h-full bg-blue-800 relative">
      <a href="#" class="hidden absolute top-10 left-1/2 -translate-x-1/2 lg:flex lg:justify-center lg:items-center w-14 h-14 rounded-xl hover:bg-white hover:bg-opacity-50">
          <CubeIcon class="h-8 w-8 text-white" />
      </a>
      <MainNav />
    </div>
  </div>
  <div class="w-full p-4 lg:p-10">
    <Tools />
    <div class="bg-gray-300 rounded-xl mt-4 p-2 lg:hidden">
      <button 
        class="block w-32 h-10 bg-blue-600 mx-auto" @click="showSidebar = !showSidebar"
      >
        Toggle sidebar
      </button>
    </div>

    <div class="overflow-hidden lg:overflow-visible pb-24 lg:pb-0">
      <div class="lg:transform-none transition-transform duration-300" :class="showSidebar ? '-translate-x-full' : ''">
        <div class="flex mt-4 lg:mt-10 lg:space-x-10">
          <div class="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">
            
            <SmallCards />

            <Candlesticks />

            <Blog />
          </div>
          <div class="w-full flex-shrink-0 lg:w-1/4 lg:flex-shrink bg-gray-300 rounded-xl h-52">sidebar</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { CubeIcon } from '@heroicons/vue/solid'
import MainNav from '@/components/MainNav.vue'
import Tools from '@/components/Tools.vue'
import Blog from '@/components/Blog.vue'
import SmallCards from '@/components/SmallCards.vue'
import Candlesticks from '@/components/Candlesticks.vue'

let showSidebar = ref(false)
</script>