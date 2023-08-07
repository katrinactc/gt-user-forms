import { ToastDuration, ToastType } from "@/const/toast";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toast", () => {
  const type = ref();
  const title = ref();
  const message = ref();
  const isDisplay = ref(false);

  function display({
    message: msg,
    title: t,
    type: tp,
  }: {
    message?: string;
    title: string;
    type: ToastType;
  }) {
    isDisplay.value = true;
    title.value = t ?? "";
    message.value = msg ?? "";
    type.value = tp;
    setTimeout(() => dismiss(), ToastDuration);
  }

  function displayError({
    title,
    message,
  }: {
    title: string;
    message?: string;
  }) {
    display({ message, title, type: ToastType.error });
  }

  function displayInfo({
    title,
    message,
  }: {
    title: string;
    message?: string;
  }) {
    display({ message, title, type: ToastType.info });
  }

  function displaySuccess({
    title,
    message,
  }: {
    title: string;
    message?: string;
  }) {
    display({ message, title, type: ToastType.success });
  }

  function displayWarning({
    title,
    message,
  }: {
    title: string;
    message?: string;
  }) {
    display({ message, title, type: ToastType.warning });
  }

  function dismiss() {
    isDisplay.value = false;
    title.value = undefined;
    message.value = undefined;
    type.value = undefined;
  }

  return {
    type,
    title,
    message,
    isDisplay,
    displayError,
    displayInfo,
    displaySuccess,
    displayWarning,
    dismiss,
  };
});
