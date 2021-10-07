<template>
    <div class="md:flex space-y-5 md:space-y-0 md:space-x-5 lg:space-x-10 mt-4 lg:mt-10">
        <div class="w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5">
            <div class="flex items-center">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                        class="w-10 h-10 object-cover"
                        src="@/assets/sarah-dayan.jpg" alt="">
                </div>
                <div>
                    <span class="block leading-3">Lilly Donovan</span>
                    <span class="text-gray-400 text-xs">Bussiness trainer</span>
                </div>
            </div>

            <h3 class="text-lg font-semibold">
                <a href="#" class="hover:text-blue-800">
                    How to properly manage your personal budget?
                </a>
            </h3>

            <div class="flex items-center space-x-8">
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-blue-800">
                        <PlayIcon />
                    </div>
                    <span class="text-sm text-gray-600">Video</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-blue-300">
                        <ClockIcon />
                    </div>
                    <span class="text-sm text-gray-600">15 min</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-red-500">
                        <StarIcon />
                    </div>
                    <span class="text-sm text-gray-600">112 likes</span>
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div class="text-gray-600 font-semibold">5 days ago</div>
                <a href="#" class="bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex items-center space-x-3">
                    <span>Connect</span>
                    <div class="w-4 h-4">
                        <ChevronRightIcon />
                    </div>
                </a>
            </div>
        </div>
        <div class="w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5">
            <div class="flex items-center">
                <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img
                        class="w-10 h-10 object-cover"
                        src="@/assets/sarah-dayan.jpg" alt="">
                </div>
                <div>
                    <span class="block leading-3">Lilly Donovan</span>
                    <span class="text-gray-400 text-xs">Bussiness trainer</span>
                </div>
            </div>

            <h3 class="text-lg font-semibold">
                <a href="#" class="hover:text-blue-800">
                    How to properly manage your personal budget?
                </a>
            </h3>

            <div class="flex items-center space-x-8">
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-blue-800">
                        <PlayIcon />
                    </div>
                    <span class="text-sm text-gray-600">Video</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-blue-300">
                        <ClockIcon />
                    </div>
                    <span class="text-sm text-gray-600">15 min</span>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="w-6 text-red-500">
                        <StarIcon />
                    </div>
                    <span class="text-sm text-gray-600">112 likes</span>
                </div>
            </div>

            <div class="flex justify-between items-center">
                <div class="text-gray-600 font-semibold">5 days ago</div>
                <a href="#" class="bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex items-center space-x-3">
                    <span>Connect</span>
                    <div class="w-4 h-4">
                        <ChevronRightIcon />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ClockIcon, StarIcon, ChevronRightIcon } from '@heroicons/vue/solid'
import { PlayIcon } from '@/components/icons'
</script>