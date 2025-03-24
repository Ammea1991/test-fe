<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '../stores/productStore'
import ProductCard from '../components/ProductCard.vue'

const productStore = useProductStore()
const { products } = storeToRefs(productStore) // Ora TypeScript riconosce `description`

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <v-container>
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :description="product.description"
      :thumbnail="product.thumbnail"
      :price="product.price"
    />
  </v-container>
</template>
