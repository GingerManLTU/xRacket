<script setup>
import { ref } from 'vue'
import axios from 'axios'

const city = ref('')
const emit = defineEmits(['results'])

const getResults = async () => {
  try {
    const results = await axios.get('/api/weather', { params: { city: city.value } })
    console.log(results.data)
    emit('results', results.data)
  } catch (error) {
    emit('results', { error: error.response.data.error, type: error.value })
  }
}
</script>

<template>
  <div class="main">
    <h1 class="title">Best weather page</h1>
    <input class="input" v-model="city" @keyup.enter="getResults" placeholder="Type your city" />
    <button class="button" @click="getResults">Search</button>
  </div>
</template>

<style scoped>
.main {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.title {
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
}

.search {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.input {
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.input:focus {
  border-color: #007bff;
}

.button {
  padding: 10px 18px;
  margin: 14px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #0056b3;
}
</style>
