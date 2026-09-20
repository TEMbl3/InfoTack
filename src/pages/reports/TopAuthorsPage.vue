<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Топ авторов</h1>
        <p>Авторы, выпустившие больше всего книг за выбранный год</p>
      </div>
    </div>

    <div class="report-toolbar">
      <div>
        <span class="field-label">Год выпуска</span>
        <select v-model="year" @change="fetchReport">
          <option v-for="item in years" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="report-year">{{ year }}</div>
    </div>

    <AppLoader v-if="loading" />

    <div v-else-if="error" class="state-card state-card--error">
      <strong>Не удалось получить отчёт</strong>
      <span>{{ error }}</span>
      <AppButton variant="secondary" @click="fetchReport">Повторить</AppButton>
    </div>

    <template v-else>
      <TopAuthorsTable v-if="items.length" :items="items" />

      <div v-else class="state-card">
        <strong>Нет данных за {{ year }} год</strong>
        <span>Попробуйте другой год.</span>
      </div>
    </template>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getTopAuthors } from '@/api/reports'
import { mockTopAuthors } from '@/mocks/mockApi'
import TopAuthorsTable from '@/components/reports/TopAuthorsTable.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

const currentYear = new Date().getFullYear()
const year = ref(currentYear)
const items = ref([])
const loading = ref(false)
const error = ref('')

const years = Array.from({ length: 100 }, (_, index) => currentYear - index)

async function fetchReport() {
  loading.value = true
  error.value = ''

  try {
    const response = import.meta.env.USE_MOCK !== 'false'
      ? await mockTopAuthors(year.value)
      : await getTopAuthors(year.value)

    items.value = response.data.items
  } catch (err) {
    error.value = err.response?.data?.errors?.[0]?.message || err.message || 'Ошибка отчёта'
  } finally {
    loading.value = false
  }
}

onMounted(fetchReport)
</script>
