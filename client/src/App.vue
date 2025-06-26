<script setup>
import { ref } from 'vue'
import SearchBar from './components/SearchBar.vue'
import ResultsLog from './components/ResultsLog.vue'

const weather = ref()

const Results = (res) => {
  weather.value = res
}
</script>

<template>
  <main>
    <SearchBar @results="Results" />
    <ResultsLog :weather="weather" />
  </main>
</template>

<style scoped></style>
