<template>
<div class="flex h-full">
  <div class="fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10">
    <div class="w-full lg:w-24 h-full bg-blue-800 relative">
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

    <div class="overflow-hidden">
      <div class="lg:transform-none transition-transform duration-300" :class="showSidebar ? '-translate-x-full' : ''">
        <div class="flex mt-4 lg:mt-10 lg:space-x-10">
          <div class="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">
            <div class="flex space-x-4 lg:space-x-10">
              <div class="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                <div class="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto">
                  <ChartBarIcon class="w-8 mx-auto" />
                </div>
                <div>
                  <span class="block text-center uppercase text-xs text-gray-400 tracking-wider font-semibold mx-auto">Visitors</span>
                  <span class="text-xl lg:text-2xl font-semibold block text-center">10,320</span>
                </div>
              </div>
              <div class="w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                <div class="bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto">
                  <ChartPieIcon class="w-8 mx-auto" />
                </div>
                <div>
                  <span class="block text-center uppercase text-xs text-gray-400 tracking-wider font-semibold">Customers</span>
                  <span class="text-xl lg:text-2xl font-semibold block text-center">4,628</span>
                </div>
              </div>
              <div class="w-1/3 bg-red-500 shadow-lg border border-red-500 rounded-xl flex flex-col lg:flex-row items-center px-3 py-5 lg:p-5 space-x-0 lg:space-x-5">
                <div class="bg-red-700 p-2 rounded-lg text-white w-full lg:w-auto">
                  <CashIcon class="w-8 mx-auto" />
                </div>
                <div>
                  <span class="block text-center uppercase text-xs text-red-200 tracking-wider font-semibold">Orders</span>
                  <span class="text-xl lg:text-2xl font-semibold text-white block text-center">2,980</span>
                </div>
              </div>
            </div>

            <div class="bg-gray-300 rounded-xl h-28 mt-4 lg:mt-10 w-full"></div>

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
import { ChartBarIcon, ChartPieIcon, CashIcon } from '@heroicons/vue/outline'
import MainNav from '@/components/MainNav.vue'
import Tools from '@/components/Tools.vue'
import Blog from '@/components/Blog.vue'

let showSidebar = ref(false)
</script>