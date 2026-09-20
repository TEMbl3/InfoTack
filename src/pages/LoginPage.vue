<template>
  <main class="login-page">
    <div class="login-decoration">
      <span class="deco-word">READ</span>
      <span class="deco-line"></span>
      <span class="deco-caption">A good book stays<br />with you.</span>
    </div>

    <section class="login-card">
      <RouterLink to="/books" class="brand brand--dark">
        <span class="brand-mark">Б</span>
        <span><strong>Библиотека</strong></span>
      </RouterLink>

      <div class="login-copy">
        <h1>С возвращением :)</h1>
        <p>Войди, чтобы управлять каталогом книг.</p>
      </div>

      <form @submit.prevent="submit">
        <AppInput v-model="username" label="Логин" placeholder="Artem" />
        <AppInput v-model="password" label="Пароль" type="password" placeholder="••••••" />

        <div v-if="auth.error" class="inline-error">{{ auth.error }}</div>

        <AppButton type="submit" class="login-submit" :loading="auth.loading">Войти</AppButton>
      </form>

      <p class="demo-hint">Для демонстрации: <b>Artem / Artem</b></p>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/ui/AppInput.vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()
const username = ref('Artem')
const password = ref('Artem')

async function submit() {
  try {
    await auth.login({ username: username.value, password: password.value })
    router.push(route.query.redirect || '/books')
  } catch {}
}
</script>
