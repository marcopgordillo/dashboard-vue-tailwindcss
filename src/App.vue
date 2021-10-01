<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <section class="container w-90vw max-w-md bg-white rounded-3xl overflow-hidden text-center flex flex-col justify-center items-center shadow-xl">
    <div>
      <img class="w-full block object-cover" src="@/assets/illustration-hero.svg" alt="">
    </div>
    <div class="p-8">
      <h1 class="font-black text-2xl sm:text-3xl mb-4 text-pale-blue-600 tracking-wider">Order Summary</h1>
      <p class="font-medium tracking-wider mb-6 text-pale-blue-500 leading-normal text-sm sm:text-base">You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!</p>
      <div class="flex flex-row justify-between items-center bg-pale-blue-400 p-4 rounded-xl mb-6">
        <div class="flex flex-row">
          <img class="w-12 h-12" src="@/assets/icon-music.svg" alt="">
          <div class="ml-4">
            <p class="font-medium tracking-wider mb-0 text-left text-pale-blue-500 leading-normal text-sm sm:text-base">
              <strong class="text-black">Annual Plan</strong>
            </p>
            <p class="font-medium tracking-wider mb-0 text-left text-pale-blue-500 leading-normal text-sm sm:text-base">$59.99/year</p>
          </div>
        </div>
        <a class="text-pale-blue-200 hover:text-pale-blue-300 transition duration-500 ease-in-out font-bold text-xs sm:text-sm tracking-wide no-underline" href="#">Change</a>
      </div>
      <button class="cursor-pointer block rounded-xl border-transparent bg-pale-blue-200 hover:bg-pale-blue-300 focus:bg-pale-blue-300 text-white shadow-xl w-full py-4 px-16 mb-6 font-bold text-base transition duration-500 ease-in-out">Proceed to Payment</button>
      <button class="cursor-pointer block rounded-xl border-transparent bg-none text-pale-blue-500 hover:text-pale-blue-600 focus:text-pale-blue-600 shadow-xl w-full py-4 px-16 mb-0 font-bold text-base transition duration-500 ease-in-out">Cancel Order</button>
    </div>
  </section>
  <div class="my-4 mx-0 text-xs text-center">
    Challenge by <a class="text-pale-blue-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Marco Gordillo</a>.
  </div>
</template>