<template>
    <main>
        <div id="section-user-forms" class="max-w-4xl m-6">
            <div class="flex flex-row items-center">
                <ChevronLeftIcon class="h-5 w-5 mr-5 cursor-pointer" aria-hidden="true" @click="navigateBack()" />
                <h1>[GT] User Forms</h1>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                <div v-for="user in users" :key="user.id"
                    class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                    <div class="truncate text-sm text-gray-500">
                        <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
                        <p>{{ user.email }}</p>
                        <p>{{ user.phoneNumber }}</p>
                        <p>{{ dob(user.dateOfBirth) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/users';
import { storeToRefs } from "pinia";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import router, { RouteName } from "@/router";

const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { getUsers } = userStore;

getUsers();


function dob(dateOfBirth: string) {
    const date = new Date(dateOfBirth);
    return date.toLocaleDateString();
}

function navigateBack() {
    router.push({ name: RouteName.home })
}
</script>
