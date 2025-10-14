import { Product } from '~/models/products.model'
const getNewProducts = (products: Product[]) => {
  return products.filter(c => c.label.toLowerCase() === 'new').splice(0, 4)
}

export default defineEventHandler(async event => {
  const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
  return getNewProducts(products)
})
