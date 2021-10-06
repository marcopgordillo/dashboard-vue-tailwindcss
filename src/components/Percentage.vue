<template>
    <div>
        <div class="w-full text-right mb-6">
            <a class="inline-block w-6 text-gray-400 hover:text-gray-800" href="#">
                <PencilAltIcon />
            </a>
        </div>
        <div class="relative">
            <div class="flex items-center justify-center w-32 h-32 rounded-full bg-white mx-auto relative">
                <div class="text-blue-800 h-20 w-20 bg-gray-50 rounded-full flex items-center justify-center shadow-lg">
                    <div>
                        <span class="text-2xl font-black">72</span>    
                        <span class="font-bold">%</span>
                    </div>
                </div>
                <div 
                    class="absolute w-32 text-blue-800 scale-115" 
                >
                    <MoonIcon percentage="72" />
                </div>
            </div>
            <div class="text-white bg-blue-800 rounded w-auto absolute top-0 right-0 lg:-right-10 px-3 py-2 text-sm shadow-lg">$10,600</div>
        </div>
    </div>
</template>

<script setup>
import { PencilAltIcon } from '@heroicons/vue/outline'
import { MoonIcon } from '@/components/icons'
</script>