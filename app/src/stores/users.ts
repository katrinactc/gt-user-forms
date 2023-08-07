import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { CreateUserInput } from '@/types/user'

export const useUserStore = defineStore('user', () => {
  const users = ref();

  async function createUser(createUserInput: CreateUserInput) {
    try {
      const response = await axios.post("/users", createUserInput)
      if (response.data) {
        return response.data
      }
    } catch (error) {
      return error;
    }
  }

  async function getUsers() {
    try {
      const response = await axios.get("/users")
      if (response.data) {
        users.value = response.data
      }
    } catch (error) {
      return error;
    }
  }

  return { users, createUser, getUsers }
})
