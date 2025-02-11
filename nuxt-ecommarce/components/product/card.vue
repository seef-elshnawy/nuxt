<template>
  <div class="product m-10 mt-0 rounded-1xl flex">
    <div class="product-image"></div>
    <div class="product-information flex space-x-12">
      <div class="product-name ml-0.5 cursor-pointer">
        <nuxt-link to="/product/:type/:id"> sweet shirt </nuxt-link>
      </div>
      <div class="product-price">60$</div>
    </div>
  </div>
</template>

<style scoped>
.product {
  width: 180px;
  height: 250px;
  border-radius: 5%;
  flex-direction: column;
}
.product-image {
  flex-direction: row;
  width: 100%;
  height: 70%;
  background-color: #d9d9d9;
}
.product-information {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  border-radius: 5%;
}

.product-name {
  width: 100px;
  font-size: 15px;
  font-weight: 600;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.product-name:hover {
  color: rgb(98, 8, 8);
}
.product-price {
  font-size: 15px;
  font-weight: 600;
  float: right;
}
</style>
