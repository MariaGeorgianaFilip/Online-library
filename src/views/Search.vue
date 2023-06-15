<template>
  <div class="search-view">
    <h2>Search</h2>
    <div class="search-form">
      <input type="text" v-model="searchTerm" placeholder="Search term" required/>
      <button @click="search">Search</button>
    </div>
    <div class="search-results">
      <div v-if="searchResults.length === 0 && searchPerformed">
        <p>No results</p>
      </div>
      <div v-else>
        <div v-for="book in searchResults" :key="book.id" class="book-card">
          <img :src="book.cover" alt="Book Cover" class="book-cover" />
          <div class="book-details">
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <button @click="borrowBook(book)" :disabled="!book.available">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchTerm: '',
      searchPerformed: false, 
    }
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    }
  },
  methods: {
    search() {
      this.$store.dispatch('searchBooks', this.searchTerm);
      this.searchPerformed = true; 
    },
    borrowBook(book) {
    if (!book.available) {
      alert('This book is already borrowed.');
      return;
    }
    const isAlreadyBorrowed = this.$store.state.borrowedBooks.some(
      borrowedBook => borrowedBook.id === book.id
    );
    if (isAlreadyBorrowed) {
      alert('You have already borrowed this book.');
      return;
    }
    this.$store.dispatch('borrowBook', book);
    }
  }
}
</script>

<style>
.search-view {
  padding: 20px;
}
.search-form {
  margin-bottom: 20px;
}
.search-form input {
  padding: 10px;
  width: 200px;
  margin-right: 10px;
}
.search-form button {
  padding: 10px 20px;
  background-color: #0E2954;
  color: #fff;
  border: none;
  cursor: pointer;
}
.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}
.book-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
}
.book-cover {
  max-width: 100%;
  height: auto;
}
</style>
