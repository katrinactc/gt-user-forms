<template>
    <DynamicForm id="user-form" :fields="fields" :validation-schema="validationSchema" @submit="handleSubmitForm" />
</template>

<script setup lang="ts">
import DynamicForm from '@/components/form/DynamicForm.vue'
import router, { RouteName } from "@/router";
import { useToastStore } from '@/stores/toast';
import { useUserStore } from '@/stores/users';

const userStore = useUserStore();
const { createUser } = userStore;

const toastStore = useToastStore();
const { displayError } = toastStore;

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
    const result: any = await createUser({
        name: formValues.name,
        email: formValues.email,
        dateOfBirth: formValues.dateOfBirth,
        phoneNumber: formValues.phoneNumber,
    });
    if (result.insertedId) {
        router.push({ name: RouteName.userForms });
    } else {
        displayError({ title: "Failed to submit user form", message: result.response?.data?.message })
    }
}
</script>
