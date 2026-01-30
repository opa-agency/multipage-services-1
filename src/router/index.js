import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/quickstart',
    name: 'Quickstart',
    component: () => import('../pages/Quickstart.vue')
  },
  {
    path: '/sdks',
    name: 'SDKs',
    component: () => import('../pages/SDKs.vue')
  },
  {
    path: '/authentication',
    name: 'Authentication',
    component: () => import('../pages/Authentication.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import('../pages/Pagination.vue')
  },
  {
    path: '/errors',
    name: 'Errors',
    component: () => import('../pages/Errors.vue')
  },
  {
    path: '/webhooks',
    name: 'Webhooks',
    component: () => import('../pages/Webhooks.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../pages/Contacts.vue')
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: () => import('../pages/Conversations.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import('../pages/Messages.vue')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('../pages/Groups.vue')
  },
  {
    path: '/attachments',
    name: 'Attachments',
    component: () => import('../pages/Attachments.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
