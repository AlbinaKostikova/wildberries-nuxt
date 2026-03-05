<template>
  <section class="long-goods d-block">
    <div class="container">
      <div class="row align-items-center mb-4">
        <div class="col-12">
          <h2 class="section-title">Category</h2>
        </div>
      </div>
      <div class="row long-goods-list">
        <div class="col-lg-3 col-sm-6" v-for="card in data" :key="card.id">
          <div class="goods-card">
            <span class="label" v-if="card.label">{{ titleFormat(card.label) }}</span>
            <img :src="card.img" alt="image: Hoodie" class="goods-image" />
            <h3 class="goods-title">{{ card.name }}</h3>
            <p class="goods-description">{{ card.description }}</p>
            <button class="button goods-card-btn add-to-cart" @click="addToCart(card)">
              <span class="button-price">${{ card.price }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CartItem } from '~/models/cart-item.model'
import type { Product } from '~/models/products.model'

const route = useRoute()
const field = computed(() => route.query.field || '')
const name = computed(() => route.query.name || '')
const search = computed(() => route.query.search || '')
const cartItems = useCart()

const { data } = await useAsyncData('filtered-products', () => {
  if (search.value) {
    return $fetch(`/api/filtered-products?search=${search.value}`)
  }
  return $fetch(`/api/filtered-products?field=${field.value}&name=${name.value}`)
}, { watch: [field, name, search] })



const addToCart = (product: Product) => {
  const findItem = cartItems.value.find(c => c.id === product.id)

  if (findItem) {
    findItem.count++
  } else {
    const newCartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: parseInt(product.price),
      count: 1
    }

    cartItems.value.push(newCartItem)
  }
}

</script>