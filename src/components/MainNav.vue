<template>
    <div class="flex lg:flex-col items-center justify-center h-full space-x-4 lg:space-x-0 lg:space-y-4 py-2 lg:py-4">
        <a href="#" class="group">
            <div class="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-white text-red-500 -translate-y-8 lg:-translate-y-0 lg:translate-x-8 duration-300 shadow-xl">
                <HomeIcon class="w-6 h-6" />
            </div>
        </a>
        <a href="#" class="group">
            <div class="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
                <ChartPieIcon class="w-6 h-6" />
            </div>
        </a>
        <a href="#" class="group">
            <div class="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
                <ChatAltIcon class="w-6 h-6" />
            </div>
        </a>
        <a href="#" class="group">
            <div class="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-blue-800 group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
                <CreditCardIcon class="w-6 h-6" />
            </div>
        </a>
    </div>
</template>

<script setup>
import { HomeIcon, ChartPieIcon, ChatAltIcon, CreditCardIcon } from '@heroicons/vue/solid'
</script>