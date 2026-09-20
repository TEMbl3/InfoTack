import { ref } from 'vue'
import {
  createAuthor as apiCreateAuthor,
  deleteAuthor as apiDeleteAuthor,
  getAuthor as apiGetAuthor,
  getAuthors as apiGetAuthors,
  updateAuthor as apiUpdateAuthor
} from '@/api/authors'
import {
  mockCreateAuthor,
  mockDeleteAuthor,
  mockGetAuthor,
  mockGetAuthors,
  mockUpdateAuthor
} from '@/mocks/mockApi'

const useMock = () => import.meta.env.USE_MOCK !== 'false'

export function useAuthors() {
  const authors = ref([])
  const author = ref(null)
  const pagination = ref({ total: 0, page: 1, per_page: 20, total_pages: 1 })
  const loading = ref(false)
  const error = ref('')

  async function fetchAuthors(params = {}) {
    loading.value = true
    error.value = ''
    try {
      const response = useMock() ? await mockGetAuthors(params) : await apiGetAuthors(params)
      authors.value = response.data.items
      pagination.value = response.data.pagination
    } catch (err) {
      error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Ошибка загрузки авторов'
    } finally {
      loading.value = false
    }
  }

  async function fetchAuthor(id) {
    loading.value = true
    error.value = ''
    try {
      const response = useMock() ? await mockGetAuthor(id) : await apiGetAuthor(id)
      author.value = response.data
      return author.value
    } catch (err) {
      error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Ошибка загрузки автора'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function createAuthor(data) {
    return useMock() ? mockCreateAuthor(data) : apiCreateAuthor(data)
  }

  async function updateAuthor(id, data) {
    return useMock() ? mockUpdateAuthor(id, data) : apiUpdateAuthor(id, data)
  }

  async function deleteAuthor(id) {
    return useMock() ? mockDeleteAuthor(id) : apiDeleteAuthor(id)
  }

  return { authors, author, pagination, loading, error, fetchAuthors, fetchAuthor, createAuthor, updateAuthor, deleteAuthor }
}
