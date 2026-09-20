import { ref } from 'vue'
import {
  createBook as apiCreateBook,
  deleteBook as apiDeleteBook,
  getBook as apiGetBook,
  getBooks as apiGetBooks,
  updateBook as apiUpdateBook
} from '@/api/books'
import {
  mockCreateBook,
  mockDeleteBook,
  mockGetBook,
  mockGetBooks,
  mockUpdateBook
} from '@/mocks/mockApi'

const useMock = () => import.meta.env.USE_MOCK !== 'false'

export function useBooks() {
  const books = ref([])

  const book = ref(null)
  const pagination = ref({ total: 0, page: 1, per_page: 20, total_pages: 1 })
  const loading = ref(false)
  const error = ref('')

  async function fetchBooks(params = {}) {
    loading.value = true
    error.value = ''

    try {
      const response = useMock() ? await mockGetBooks(params) : await apiGetBooks(params)
      books.value = response.data.items
      pagination.value = response.data.pagination
    } catch (err) {
      error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Ошибка загрузки книг'
    } finally {
      loading.value = false
    }
  }

  async function fetchBook(id) {
    loading.value = true
    error.value = ''
    try {
      const response = useMock() ? await mockGetBook(id) : await apiGetBook(id)
      book.value = response.data
      return book.value
    } catch (err) {
      error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Ошибка загрузки книги'
      throw err
    } finally {
      loading.value = false
    }
  }

  async function createBook(data) {
    return useMock() ? mockCreateBook(data) : apiCreateBook(data)
  }

  async function updateBook(id, data) {
    return useMock() ? mockUpdateBook(id, data) : apiUpdateBook(id, data)
  }

  async function deleteBook(id) {
    return useMock() ? mockDeleteBook(id) : apiDeleteBook(id)
  }

  return { books, book, pagination, loading, error, fetchBooks, fetchBook, createBook, updateBook, deleteBook }
}
