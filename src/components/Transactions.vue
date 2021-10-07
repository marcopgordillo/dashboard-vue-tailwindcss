<template>
    <div>
        <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold text-gray-700">Transactions</h3>
            <a href="#" class="block w-6 h-6 bg-red-500 text-white rounded-lg">
                <PlusSmIcon />
            </a>
        </div>

        <div class="space-y-5 mt-6">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="flex items-center justify-center bg-white text-red-500 rounded-xl w-10 h-10 mr-4">
                        <TruckIcon class="w-6" />
                    </div>

                    <div>
                        <span class="block leading-3">Taxi</span>
                        <span class="text-xs text-gray-400">01:21 PM</span>
                    </div>
                </div>
                <div>-$9.20</div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="flex items-center justify-center bg-white text-red-500 rounded-xl w-10 h-10 mr-4">
                        <DesktopComputerIcon class="w-6" />
                    </div>

                    <div>
                        <span class="block leading-3">Netflix</span>
                        <span class="text-xs text-gray-400">11:15 PM</span>
                    </div>
                </div>
                <div>-$24.99</div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div class="flex items-center justify-center bg-white text-red-500 rounded-xl w-10 h-10 mr-4">
                        <ShoppingBagIcon class="w-6" />
                    </div>

                    <div>
                        <span class="block leading-3">Shopping</span>
                        <span class="text-xs text-gray-400">Jan 10, 2020</span>
                    </div>
                </div>
                <div>-$142.00</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PlusSmIcon } from '@heroicons/vue/solid'
import { TruckIcon, ShoppingBagIcon, DesktopComputerIcon } from '@heroicons/vue/outline'
</script>