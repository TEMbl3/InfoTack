import api from './axios'

export const getBooks = (params = {}) => api.get('/books', { params })
export const getBook = (id) => api.get(`/books/${id}`)
export const createBook = (formData) => api.post('/books', formData)
export const updateBook = (id, formData) => api.put(`/books/${id}`, formData)
export const deleteBook = (id) => api.delete(`/books/${id}`)
