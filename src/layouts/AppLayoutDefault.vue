<script lang="ts">
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'AppLayoutDefault',
  components: {
    AppBar,
  },
}
</script>

<template>
  <div>
    <v-layout>
      <v-main>
        <AppBar />
        <slot></slot>
      </v-main>
    </v-layout>
  </div>
</template>
