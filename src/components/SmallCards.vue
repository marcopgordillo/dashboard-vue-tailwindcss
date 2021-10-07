<template>
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
</template>

<script setup>
import { ChartBarIcon, ChartPieIcon, CashIcon } from '@heroicons/vue/outline'
</script>