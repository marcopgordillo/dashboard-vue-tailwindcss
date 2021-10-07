<template>
    <div class="flex justify-between">
        <h3 class="text-lg font-semibold text-gray-700">Cards</h3>
        <a href="#" class="inline-block w-6 text-gray-400 hover:text-gray-800">

        </a>
    </div>
    <div class="mt-4">
        <div class="relative w-full bg-blue-800 rounded-lg overflow-hidden pt-3/5">
           <div class="absolute top-0 -right-1/2 w-full pt-3/5 -rotate-12 bg-blue-200 rounded-3xl"></div> 
           <div class="absolute top-3/4 left-0 w-full pt-3/5 rotate-45 bg-yellow-300 rounded-3xl"></div> 

           <div class="absolute inset-0 py-6 px-4 flex flex-col justify-between">
               <div class="flex justify-between items-center">
                   <div class="block w-12 h-8 bg-white bg-opacity-80 rounded"></div>
                   <div class="w-12 text-white">
                       <VisaLogo />
                   </div>
               </div>

               <div class="flex items-center justify-between space-x-4">
                   <div class="w-1/4 h-2 bg-white bg-opacity-80 rounded-full"></div>
                   <div class="w-1/4 h-2 bg-white bg-opacity-80 rounded-full"></div>
                   <div class="w-1/4 h-2 bg-white bg-opacity-80 rounded-full"></div>
                   <div class="w-1/4 text-lg text-center tracking-widest text-white">6789</div>
               </div>

               <div class="flex justify-between font-semibold text-white">
                   <span>Alex Smith</span>
                   <span>07/24</span>
               </div>
           </div>
        </div>
    </div>
</template>

<script setup>
import { VisaLogo } from '@/components/icons'
</script>