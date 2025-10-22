<script setup>
  import axios from 'axios'
  import { ref, onMounted } from 'vue'

  const posts = ref([])

  onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`)
    posts.value = res.data
  })
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<style scoped></style>
