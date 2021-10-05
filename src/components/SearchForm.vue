<template>
    <form action="/" method="POST">
        <div class="relative">
            <div class="w-4 text-blue-800 absolute top-3 left-3">
                <SearchIcon />
            </div>
            <input type="text" class="pl-10 w-full bg-indigo-50 rounded-md h-10 text-indigo-900 outline-none focus:ring-2 focus:ring-blue-600">
        </div>
    </form>
</template>

<script setup>
import { SearchIcon } from '@heroicons/vue/outline'
</script>