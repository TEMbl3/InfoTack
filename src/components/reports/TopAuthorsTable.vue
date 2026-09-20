<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th class="table-rank">#</th>
          <th>Автор</th>
          <th>Выпущено книг</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.author_id">
          <td><span class="rank">{{ item.rank }}</span></td>
          <td>
            <RouterLink :to="`/authors/${item.author_id}`" class="table-author">{{ item.full_name }}</RouterLink>
          </td>
          <td><strong>{{ item.books_count }}</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({ 
  items: { type: Array, default: () => [] } 
})
</script>
