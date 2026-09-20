import api from './axios'

export const getTopAuthors = (year) => api.get('/reports/top-authors', {
  params: { year }
})
