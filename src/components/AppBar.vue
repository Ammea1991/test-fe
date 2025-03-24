<script setup lang="ts">
import { ref, watch } from 'vue'

const items = [
  {
    title: 'Home',
    icon: 'mdi-home-outline',
    value: '/',
  },
]

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>

<template>
  <v-app-bar>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <div class="pa-2">
      <div v-for="item in items" :key="item.value" :value="item.value" :title="item.title">
        <v-btn :ripple="false" :prepend-icon="item.icon" :to="item.value" variant="text">
          {{ item.title }}
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
