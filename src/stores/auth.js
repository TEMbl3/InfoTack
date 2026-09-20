import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { loginRequest } from '@/api/auth'
import { clearAuth, getToken, getUser, setAuth } from '@/utils/storage'
import { mockLogin } from '@/mocks/mockApi'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(getToken())
  const user = ref(getUser())
  const loading = ref(false)
  const error = ref('')

  const isAuthenticated = computed(() => Boolean(token.value))

  async function login(credentials) {
    loading.value = true
    error.value = ''

    try {
      const useMock = import.meta.env.USE_MOCK !== 'false'
      const response = useMock
        ? await mockLogin(credentials)
        : await loginRequest(credentials)

      token.value = response.data.token
      user.value = response.data.user
      setAuth(token.value, user.value)

      return response
    } catch (err) {
      error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Не удалось войти'
      throw err
    } finally {
      loading.value = false
    }
  }

  function logout() {
    token.value = null
    user.value = null
    clearAuth()
  }

  return { token, user, loading, error, isAuthenticated, login, logout }
})
