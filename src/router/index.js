import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/storage'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { 
        path: '', redirect: '/books' 
      },
      { 
        path: 'books',
        component: () => import('@/pages/books/BooksPage.vue') 
      },
      { 
        path: 'books/create', 
        component: () => import('@/pages/books/CreateBookPage.vue'),
        meta: { requiresAuth: true }
      },
      { 
        path: 'books/:id',
        component: () => import('@/pages/books/BookPage.vue') 
      },
      { 
        path: 'books/:id/edit',
        component: () => import('@/pages/books/EditBookPage.vue'),
        meta: { requiresAuth: true } 
      },
      { 
        path: 'authors',
        component: () => import('@/pages/authors/AuthorsPage.vue') 
      },
      { 
        path: 'authors/create', 
        component: () => import('@/pages/authors/CreateAuthorPage.vue'), 
        meta: { requiresAuth: true } 
      },
      { 
        path: 'authors/:id', 
        component: () => import('@/pages/authors/AuthorPage.vue') 
      },
      { 
        path: 'authors/:id/edit', 
        component: () => import('@/pages/authors/EditAuthorPage.vue'), 
        meta: { requiresAuth: true } 
      },
      { 
        path: 'reports/top-authors', 
        component: () => import('@/pages/reports/TopAuthorsPage.vue') 
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/LoginPage.vue'), meta: { guestOnly: true } }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

router.beforeEach((to) => {
  const authenticated = Boolean(getToken())

  if (to.meta.requiresAuth && !authenticated) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  if (to.meta.guestOnly && authenticated) {
    return '/books'
  }
})

export default router
