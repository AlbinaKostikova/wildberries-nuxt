<template>
  <header class="container header px-4 px-md-0">
    <div class="row justify-content-between align-items-center">
      <div class="col-lg-2 col-6">
        <NuxtLink to='/' class="logo-link">
          <img width="128" src="/images/logo.svg" alt="logo: Willberries" class="logo-image" />
        </NuxtLink>
      </div>
      <div class="col-lg-6 d-none d-lg-block">
        <nav>
          <ul class="navigation d-flex justify-content-around">
            <li class="navigation-item" v-for="link in links" :key="link.id">
              <NuxtLink :to='link.route' class="navigation-link">
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-2 d-none d-lg-block">
        <div class="form-control search-block">
          <input v-model="searchQuery" type="text" class="form-control" placeholder="Search"
            aria-label="Search products" @keyup.enter="handleSearch()" />
          <button class="btn btn-outline-secondary" type="button" @click="handleSearch()">
            <img src="/images/search.png" alt="search" />
          </button>
        </div>
      </div>
      <div class="col-lg-2 col-6 d-flex justify-content-end">
        <button class="button button-cart" @click="openCart()">
          <img class="button-icon" src="/images/cart.svg" alt="icon: cart" />
          <span class="button-text">Cart</span>
          <span class="button-text cart-count"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const viewCart = useViewCart()
const searchQuery = ref('')

let links = ref([
  { id: 0, route: { path: '/products', query: { field: 'gender', name: 'Womens' } }, text: 'Womens' },
  { id: 1, route: { path: '/products', query: { field: 'gender', name: 'Mens' } }, text: 'Mens' },
  { id: 2, route: { path: '/products', query: { field: 'category', name: 'Clothing' } }, text: 'Clothing' },
  { id: 3, route: { path: '/products', query: { field: 'category', name: 'Accessories' } }, text: 'Accessories' },
  { id: 4, route: { path: '/products', query: { field: 'category', name: 'Shoes' } }, text: 'Shoes' },
  { id: 5, route: { path: '/products' }, text: 'All' },
])

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/products',
      query: { search: searchQuery.value }
    })
  }
}

const openCart = () => {
  viewCart.value = true
}
</script>