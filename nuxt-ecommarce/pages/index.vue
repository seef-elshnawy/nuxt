<script setup>
import { counterStore } from "~/stores/myStore";
import { storeToRefs } from "pinia";
import { NuxtLayout } from "#components";

definePageMeta({
  layout: "page",
});

// const { sayHello } = useUtils();
// sayHello();

const counter = counterStore();
const { count } = storeToRefs(counterStore());
console.log(count);
</script>

<template>
  <div>
    <NuxtLayout name="product-section"> TOP PRODUCTS </NuxtLayout>
    <NuxtLayout name="product-section"> BEST OFFERS </NuxtLayout>
    <NuxtLayout name="product-section"> RECENTLY ADDED </NuxtLayout>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
