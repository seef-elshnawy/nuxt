<script setup>
const route = useRoute();
definePageMeta({
  layout: "page",
});
</script>

<template>
  <h1>hello man your id is: {{ route.params.id }}</h1>
  
</template>
