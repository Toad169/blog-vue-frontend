<script setup>
  import { ref, onMounted } from 'vue'
  import api from '@/js/axios'

  import './main.css'

  const posts = ref([])

  onMounted(async () => {
    const res = await api.get('/posts')
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
