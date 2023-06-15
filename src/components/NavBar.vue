<template>
  <div class="header">
    <h1>ONLINE LIBRARY</h1>
    <div class="cart" @click="toggleCart">
      <i class="fa fa-shopping-cart"></i>
      <span class="cart-count" v-if="borrowedBooks.length > 0">{{ borrowedBooks.length }}</span>
    </div>
    <nav class="main-nav">
      <router-link :to="{ name:'Homeview'}">Home</router-link>
      <router-link :to="{ name:'About'}">About</router-link>
      <router-link :to="{ name:'Search'}">Search</router-link>
    </nav>
    <div v-show="isCartVisible" class="cart-dropdown">
      <ul>
        <li v-for="(book, index) in borrowedBooks.slice(0, 3)" :key="book.id">
          {{ book.title }} - {{ book.author }}
        </li>
        <li v-if="borrowedBooks.length > 3">and more...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    borrowedBooks() {
      return this.$store.state.borrowedBooks;
    },
  },
  data() {
    return {
      isCartVisible: false,
    };
  },
  methods: {
    toggleCart() {
      this.isCartVisible = !this.isCartVisible;
    }
  }
};

</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #ECF8F9;
}
h1 {
  font-size: 40px;
  margin: 0;
  color: #0E2954;
}
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 60px;
  font-size: 20px;
  color: black;
}
.cart {
  position: relative;
  cursor: pointer;
}
.cart i {
  font-size: 24px;
}
.cart-count {
  position: absolute;
  top: -16px;
  right: -715px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color:#0E2954;
  color: white;
  font-size: 12px;
  font-weight: bold; 
}
.cart-dropdown {
  background-color: #f2f2f2; 
  padding: 10px;
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cart-dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.cart-dropdown li {
  margin-bottom: 8px;
}
.cart-dropdown li:last-child {
  margin-bottom: 0;
}
.cart-dropdown li.and-more {
  font-weight: bold;
  color: #888;
}
</style>
