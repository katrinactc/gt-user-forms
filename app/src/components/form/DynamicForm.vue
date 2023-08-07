<template>
    <Form ref="formRef" :validation-schema="validationSchema" @submit="onSubmit">
        <div v-for="{ as, name, label, } in fields" :key="name" class="my-4">
            <InputField :as="as" :name="name" :label="label" @field-change="handleFieldValueChange" />
        </div>
        <button class="primary m mt-5">Submit</button>
    </Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate';
import type { FormField } from '@/types/form'
import InputField from './InputFIeld.vue'
import { ref } from 'vue';

defineProps<{
    fields: FormField[];
    validationSchema: Record<string, string>;
}>();

const emit = defineEmits(["submit"]);

function onSubmit(formValues: Record<string, any>) {
    emit("submit", formValues);
}

const formRef = ref();

function handleFieldValueChange(changes: { name: string; values: string | boolean }) {
    formRef.value.setFieldValue(changes.name, changes.values);
}
</script>
