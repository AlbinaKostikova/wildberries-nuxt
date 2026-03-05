import { Product } from '~/models/products.model'

export interface Query {
  field?: keyof Product
  name?: string
  search?: string
}
const getFilteredProducts = (products: Product[], query: Query) => {
  if (query.search) {
    const searchTerm = query.search.toLowerCase()
    return products.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm),
    )
  }

  if (query.field && query.name) {
    return products.filter(c => {
      const key = c[query.field!]

      if (typeof key === 'string') {
        return key.toLowerCase() === query.name!.toLowerCase()
      } else {
        return c[query.field!] === query.name
      }
    })
  } else {
    return products
  }
}

export default defineEventHandler(async event => {
  const query: Query = getQuery(event)
  const products: Product[] = await $fetch('https://wb-nuxt-default-rtdb.firebaseio.com/data.json')
  return getFilteredProducts(products, query)
})
