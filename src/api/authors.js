import api from './axios'

export const getAuthors = (params = {}) => api.get('/authors', { params })
export const getAuthor = (id) => api.get(`/authors/${id}`)
export const createAuthor = (payload) => api.post('/authors', payload)
export const updateAuthor = (id, payload) => api.put(`/authors/${id}`, payload)
export const deleteAuthor = (id) => api.delete(`/authors/${id}`)
