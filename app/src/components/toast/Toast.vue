<template>
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <transition enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-show="isDisplay"
          class="pointer-events-auto w-full max-w-lg overflow-scroll rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <component :is="icon" :class="['h-6 w-6', iconColor]" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ title }}
                </p>
                <p class="mt-1 text-sm text-gray-500 whitespace-pre-wrap max-h-[80vh]">
                  {{ message }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0 sticky top-4">
                <button type="button" @click="dismiss()"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useToastStore } from "@/stores/toast";
import { storeToRefs } from "pinia";
import { ToastType } from "@/const/toast";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

const toastStore = useToastStore();
const { isDisplay, title, message, type } = storeToRefs(toastStore);
const { dismiss } = toastStore;


const icon = computed(() => {
  switch (type.value) {
    case ToastType.success:
      return CheckCircleIcon;
    case ToastType.warning:
      return ExclamationTriangleIcon;
    case ToastType.error:
      return XCircleIcon;
    default:
      return InformationCircleIcon;
  }
});

const iconColor = computed(() => {
  switch (type.value) {
    case ToastType.success:
      return "text-green-400";
    case ToastType.warning:
      return "text-yellow-400";
    case ToastType.error:
      return "text-red-500";
    default:
      return "text-gray-500";
  }
});

</script>
