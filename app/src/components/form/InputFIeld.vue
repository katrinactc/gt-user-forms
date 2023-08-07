<template>
    <label :for="name">{{ label }}</label>
    <!-- date picker -->
    <Field v-if="as == `datePicker`" :id="name" :name="name">
        <DatePicker :name="name" format="dd/MM/yyyy" @update:model-value="(values) => onChange(values, name)" />
    </Field>
    <!-- other fields -->
    <Field v-else :as="as" :id="name" :name="name" />
    <ErrorMessage :name="name" class="text-red-400 text-sm mt-1" as="div" />
</template>

<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate';
import DatePicker from './DatePicker.vue';

defineProps<{
    label: string;
    name: string;
    as: string;
}>();

const emit = defineEmits(['field-change'])

function onChange(values: string, name: string) {
    emit('field-change', { name, values })
}
</script>
