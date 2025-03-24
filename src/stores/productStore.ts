import { defineStore } from 'pinia'
import { ref } from 'vue'

// Definiamo il tipo del prodotto
interface Product {
  id: number
  title: string
  description: string
  thumbnail: string
  price: number
}

export const useProductStore = defineStore('productStore', () => {
  const products = ref<Product[]>([]) // Array tipizzato
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Funzione per recuperare i prodotti
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await fetch('https://dummyjson.com/products')
      if (!response.ok) throw new Error('Errore nel caricamento')
      const data = await response.json()
      products.value = data.products // Ora TypeScript riconosce i campi
    } catch (err) {
      error.value = (err as Error).message
    } finally {
      loading.value = false
    }
  }

  return { products, loading, error, fetchProducts }
})
