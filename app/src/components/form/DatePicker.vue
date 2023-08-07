<template>
    <VueDatePicker v-model="date" :enable-time-picker="false"></VueDatePicker>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

</script>

