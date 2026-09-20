import { mockAuthors, mockBooks } from './data'

const delay = (value, ms = 220) =>
  new Promise((resolve) => setTimeout(() => resolve(structuredClone(value)), ms))

let books = structuredClone(mockBooks)
let authors = structuredClone(mockAuthors)

const listResponse = (items, page = 1, perPage = 20) => ({
  success: true,
  data: {
    items,
    pagination: {
      total: items.length,
      page,
      per_page: perPage,
      total_pages: Math.max(1, Math.ceil(items.length / perPage))
    }
  }
})

export async function mockLogin({ username, password }) {
  if (username !== 'Artem' || password !== 'Artem') {
    const error = new Error('Неверный логин или пароль')
    error.response = { status: 401, data: { success: false, errors: [{ field: 'login', message: 'Неверный логин или пароль' }] } }
    throw error
  }

  return delay({
    success: true,
    data: {
      token: 'mock-jwt-token',
      expires_at: new Date(Date.now() + 86400000).toISOString(),
      user: { id: 1, username: 'Artem', role: 'user' }
    }
  })
}

export async function mockGetBooks(params = {}) {
  let result = [...books]
  const search = String(params.search || '').trim().toLowerCase()

  if (search) {
    result = result.filter((book) =>
      book.title.toLowerCase().includes(search) ||
      book.authors.some((author) => author.full_name.toLowerCase().includes(search))
    )
  }

  if (params.author_id) {
    result = result.filter((book) => book.authors.some((author) => author.id === Number(params.author_id)))
  }

  if (params.year) {
    result = result.filter((book) => book.year === Number(params.year))
  }

  const page = Number(params.page || 1)
  const perPage = Number(params['per-page'] || 20)
  const start = (page - 1) * perPage

  return delay(listResponse(result.slice(start, start + perPage), page, perPage))
}

export async function mockGetBook(id) {
  const book = books.find((item) => item.id === Number(id))
  if (!book) throw createError(404, 'Книга не найдена')
  return delay({ success: true, data: book })
}

export async function mockCreateBook(payload) {
  if (payload instanceof FormData) {
    payload = {
      title: payload.get('title'),
      year: payload.get('year'),
      description: payload.get('description'),
      isbn: payload.get('isbn'),
      author_ids: payload.getAll('author_ids[]'),
      cover: payload.get('cover'),
    }
  }

  const newBook = normalizeBookPayload(
    payload,
    Math.max(...books.map((b) => b.id)) + 1
  )

  books.unshift(newBook)

  return delay({
    success: true,
    data: newBook,
  })
}

export async function mockUpdateBook(id, payload) {
  const index = books.findIndex((item) => item.id === Number(id))

  if (index === -1) {
    throw createError(404, 'Книга не найдена')
  }

  const data = {
    title: payload.get('title'),
    year: payload.get('year'),
    description: payload.get('description'),
    isbn: payload.get('isbn'),
    author_ids: payload.getAll('author_ids[]'),
    cover: payload.get('cover'),
  }

  books[index] = {
    ...books[index],
    ...normalizeBookPayload(data, books[index].id),
  }

  return delay({
    success: true,
    data: books[index],
  })
}

export async function mockDeleteBook(id) {
  const index = books.findIndex((item) => item.id === Number(id))
  if (index === -1) throw createError(404, 'Книга не найдена')
  books.splice(index, 1)
  return delay(null)
}

export async function mockGetAuthors(params = {}) {
  let result = [...authors]
  const search = String(params.search || '').trim().toLowerCase()

  if (search) result = result.filter((author) => author.full_name.toLowerCase().includes(search))

  const page = Number(params.page || 1)
  const perPage = Number(params['per-page'] || 20)
  const start = (page - 1) * perPage

  return delay(listResponse(result.slice(start, start + perPage), page, perPage))
}

export async function mockGetAuthor(id) {
  const author = authors.find((item) => item.id === Number(id))
  if (!author) throw createError(404, 'Автор не найден')

  const full = {
    ...author,
    books: books.filter((book) => book.authors.some((item) => item.id === author.id)).map(({ id, title, year }) => ({ id, title, year }))
  }

  return delay({ success: true, data: full })
}

export async function mockCreateAuthor(payload) {
  const author = { id: Math.max(...authors.map((a) => a.id)) + 1, full_name: payload.full_name }
  authors.push(author)
  return delay({ success: true, data: author })
}

export async function mockUpdateAuthor(id, payload) {
  const index = authors.findIndex((item) => item.id === Number(id))
  if (index === -1) throw createError(404, 'Автор не найден')
  authors[index] = { ...authors[index], full_name: payload.full_name }
  return delay({ success: true, data: authors[index] })
}

export async function mockDeleteAuthor(id) {
  const index = authors.findIndex((item) => item.id === Number(id))
  if (index === -1) throw createError(404, 'Автор не найден')
  authors.splice(index, 1)
  return delay(null)
}

export async function mockTopAuthors(year) {
  const counts = authors.map((author) => ({
    author_id: author.id,
    full_name: author.full_name,
    books_count: books.filter((book) => book.year === Number(year) && book.authors.some((a) => a.id === author.id)).length
  })).filter((item) => item.books_count > 0).sort((a, b) => b.books_count - a.books_count)

  return delay({
    success: true,
    data: {
      year: Number(year),
      items: counts.slice(0, 10).map((item, index) => ({ ...item, rank: index + 1 }))
    }
  })
}

function normalizeBookPayload(payload, id) {
  const authorIds = Array.isArray(payload.author_ids) ? payload.author_ids.map(Number) : []
  return {
    id,
    title: payload.title,
    year: Number(payload.year),
    description: payload.description || '',
    isbn: payload.isbn || '',
    cover_url: payload.cover_url || books.find((b) => b.id === id)?.cover_url || '',
    authors: authorIds.map((authorId) => authors.find((a) => a.id === authorId)).filter(Boolean)
  }
}

function createError(status, message) {
  const error = new Error(message)
  error.response = { status, data: { success: false, errors: [{ field: '', message }] } }
  return error
}
