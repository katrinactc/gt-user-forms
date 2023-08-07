<template>
    <DynamicForm id="user-form" :fields="fields" :validation-schema="validationSchema" @submit="handleSubmitForm" />
</template>

<script setup lang="ts">
import DynamicForm from '@/components/form/DynamicForm.vue'

const fields = [
    {
        label: 'Your name',
        name: 'name',
        as: 'input',
    },
    {
        label: 'Your date of birth (dd/MM/yyyy)',
        name: 'dateOfBirth',
        as: 'datePicker',
    },
    {
        label: 'Your email',
        name: 'email',
        as: 'input',
    },
    {
        label: 'Your phone number',
        name: 'phoneNumber',
        as: 'input',
    },
];

const validationSchema = {
    name: "required",
    email: "required|email",
    dateOfBirth: "required|minAge:18",
}

async function handleSubmitForm(formValues: Record<string, any>) {
    console.log(formValues)
}
</script>
