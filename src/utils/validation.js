export function validateBook(form) {
  const errors = {}

  if (!form.title?.trim()) errors.title = 'Введите название'
  if (!form.year || Number(form.year) < 1) errors.year = 'Укажите год'
  if (!form.author_ids?.length) errors.author_ids = 'Выберите хотя бы одного автора'

  return errors
}

export function validateAuthor(form) {
  const errors = {}
  if (!form.full_name?.trim()) errors.full_name = 'Введите ФИО автора'
  return errors
}
