<script setup>
import { ref } from "vue";
const activeNav = ref(null);
const secondActiveNav = ref(null);

const setActive = (className) => {
  activeNav.value = className;
};

const addElement = (event, className) => {
  if (activeNav.value === className) {
    return;
  } else {
    secondActiveNav.value = className;
    event.target.classList.add("active_nav");
  }
};

const removeElement = (event, className) => {
  if (activeNav.value === className) {
    return;
  } else event.target.classList.remove("active_nav");
};
</script>

<template>
  <div class="w-full max-w-screen overflow-hidden">
    <nav class="navigation flex justify-between bg-gray-800 h-15">
      <ul class="logo text-white ml-3 mt-4">
        <li>
          <nuxt-link class="text-2xl" to="/">E-COMMARCE</nuxt-link>
        </li>
      </ul>
      <div class="search h-10 mt-3 relative" style="width: 50%">
        <input
          type="text"
          placeholder="Search for something..."
          class="bg-white rounded-2xl pl-4 h-10"
          style="width: 100%"
        />
        <img
          src="/search.png"
          alt="search button"
          class="w-7 absolute top-2 bottom-0"
          style="right: 2%; cursor: pointer"
          v-on:click="console.log('search')"
        />
      </div>
      <ul class="registration flex space-x-2 text-white mt-4">
        <li>
          <nuxt-link to="/login">LOGIN</nuxt-link>
        </li>
        <li>/</li>
        <li>
          <nuxt-link to="/submit">SUBMIT</nuxt-link>
        </li>
      </ul>
      <div class="responsive-menu">
        <img
          src="/menu.png"
          alt="search button"
          class="w-7 absolute top-4 bottom-0"
          style="right: 4%; cursor: pointer"
          v-on:click="console.log('menu bar')"
        />
      </div>
    </nav>
    <div
      class="responsive-search h-7 mt-2 ml-10 mb-5 relative"
      style="width: 100%"
    >
      <input
        type="text"
        placeholder="Search for something..."
        class="bg-white rounded-2xl pl-4 h-10"
        style="width: 80%; color: black"
      />
      <img
        src="/search.png"
        alt="search button"
        class="w-7 absolute top-2 bottom-0"
        style="right: 22%; cursor: pointer"
        v-on:click="console.log('search')"
      />
    </div>
    <div class="second-nav bg-white mt-2 flex space-x-10 justify-between">
      <div class="flex space-x-10" style="width: 50%">
        <div
          class="second-nav-option-1 ml-10 cursor-pointer"
          @mouseenter="addElement($event, 'second-nav-option-1')"
          @mouseleave="removeElement($event, 'second-nav-option-1')"
          @click="setActive('second-nav-option-1')"
          :class="{ active_nav: activeNav === 'second-nav-option-1' }"
        >
          <p class="font-semibold text-1xl">FASHION</p>
        </div>
        <div
          class="cursor-pointer second-nav-option-2"
          @mouseenter="addElement($event, 'second-nav-option-2')"
          @mouseleave="removeElement($event, 'second-nav-option-2')"
          @click="setActive('second-nav-option-2')"
          :class="{ active_nav: activeNav === 'second-nav-option-2' }"
        >
          <p class="font-semibold text-1xl">TECH</p>
        </div>
        <div
          class="cursor-pointer second-nav-option-3"
          @mouseenter="addElement($event, 'second-nav-option-3')"
          @mouseleave="removeElement($event, 'second-nav-option-3')"
          @click="setActive('second-nav-option-3')"
          :class="{ active_nav: activeNav === 'second-nav-option-3' }"
        >
          <p class="font-semibold text-1xl">GROCERY</p>
        </div>
        <div
          class="cursor-pointer second-nav-option-4"
          @mouseenter="addElement($event, 'second-nav-option-4')"
          @mouseleave="removeElement($event, 'second-nav-option-4')"
          @click="setActive('second-nav-option-4')"
          :class="{ active_nav: activeNav === 'second-nav-option-4' }"
        >
          <p class="font-semibold text-1xl">ELECTRICS</p>
        </div>

        <div
          class="cursor-pointer second-nav-option-5"
          @mouseenter="addElement($event, 'second-nav-option-5')"
          @mouseleave="removeElement($event, 'second-nav-option-5')"
          @click="setActive('second-nav-option-5')"
          :class="{ active_nav: activeNav === 'second-nav-option-5' }"
        >
          <p class="font-semibold text-1xl">FURNITURE</p>
        </div>

        <div
          class="cursor-pointer second-nav-option-6"
          @mouseenter="addElement($event, 'second-nav-option-6')"
          @mouseleave="removeElement($event, 'second-nav-option-6')"
          @click="setActive('second-nav-option-6')"
          :class="{ active_nav: activeNav === 'second-nav-option-6' }"
        >
          <p class="font-semibold text-1xl">MORE</p>
        </div>
      </div>

      <div class="mr-5">
        <div class="flex space-x-1 cursor-pointer">
          <img src="/shopping-bag.png" alt="cart" class="w-7" />
          <p class="font-bold text-1xl">(0)</p>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.active_nav {
  display: block;
  position: relative;
}

.active_nav::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0px;
  height: 3px;
  background-color: rgb(3, 54, 54);
}

.navigation {
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: rgba(5, 0, 42, 0.837); /* Light transparent background */
  backdrop-filter: blur(10px); /* Blur effect */
}
.second-nav {
  width: 100%;
  margin-top: 80px;
}
.navigation .logo {
  width: 20%;
  white-space: nowrap;
}
.responsive-search {
  display: none;
}
.search {
  border: none;
}
.search input:focus {
  outline: none;
}
.registration {
  width: 10%;
}

.registration li {
  position: relative;
}
.responsive-menu {
  display: none;
}

@media screen and (max-width: 1500px) {
  .registration {
    margin-right: 50px;
  }
}

@media screen and (min-width: 1500px) {
  .search {
    margin-right: 200px;
  }
}

@media screen and (max-width: 750px) {
  .navigation {
    width: 100%;
    margin: 0;
    padding: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: none;
  }
  .search {
    display: none;
  }
  .responsive-search {
    display: block;
    margin-top: 80px;
  }
  .responsive-search input {
    border: solid 1px gray;
    position: relative;
  }
  .responsive-search input:focus {
    outline: none;
  }
  .navigation .registration {
    display: none;
  }
  .responsive-menu {
    display: block;
  }
  .second-nav {
    display: none;
  }
}
</style>
