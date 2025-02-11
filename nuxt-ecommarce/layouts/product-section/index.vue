<template>
  <div>
    <h1 class="m-10 mt-10 text-2xl"><slot /></h1>
    <div class="products-section">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    <p class="ml-328 text-blue-400 cursor-pointer mb-5 addition_product">
      See all
    </p>
  </div>
</template>

<style>
.products-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 100px;
}
@media screen and (max-width: 750px) {
  .products-section {
    padding-left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .addition_product {
    display: none;
  }
}
</style>
