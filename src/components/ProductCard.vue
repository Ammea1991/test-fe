<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  thumbnail?: string
  price?: number
}>()
</script>

<template>
  <v-card class="pa-2">
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      <v-row align="center">
        <v-col cols="12">
          <v-img :width="300" aspect-ratio="16/9" :src="thumbnail"></v-img>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="text-h7" cols="12">
          {{ description }}
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col class="text-h7" cols="12"> ${{ price }} </v-col>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-btn variant="outlined" color="primary">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.v-card {
  min-height: 500px !important;
}
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
