<template>
    <svg viewBox="0 0 36 36" stroke="currentColor">
        <path
            style="
                fill: none;
                stroke-width: 0.8;
                stroke-linecap: round;
            "
            :stroke-dasharray="`${percentage}, 100`"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
    </svg>
</template>

<script setup>
defineProps({
    percentage: Number,
})
</script>