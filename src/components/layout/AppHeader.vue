<template>
  <header class="app-header">
    <div class="header-inner">
      <RouterLink to="/books" class="brand">
        <span class="brand-mark">Б</span>
        <span>
          <strong>Библиотека</strong>
        </span>
      </RouterLink>

      <nav class="main-nav">
        <RouterLink to="/books">Книги</RouterLink>
        <RouterLink to="/authors">Авторы</RouterLink>
        <RouterLink to="/reports/top-authors">Отчёт</RouterLink>
      </nav>

      <div class="header-actions">
        <template v-if="auth.isAuthenticated">
          <button class="user-chip">
            <span class="avatar">{{ initials }}</span>
            <span class="logout-icon" @click="auth.logout()">Выйти</span>
          </button>
        </template>
        <RouterLink v-else to="/login" class="header-login">Войти</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();
const initials = computed(() => auth.user?.username?.slice(0, 2).toUpperCase() || "U");
</script>
