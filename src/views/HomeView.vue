<template>
<div class="home-view">
    <h2>Available books this week:</h2>
    <div class="book-grid">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img :src="book.cover" alt="Book Cover" class="book-cover" />
        <div class="book-details">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}</p>
          <button @click="borrowBook(book)" :disabled="!book.available">Borrow</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    books() {
      return this.$store.state.books;
    }
  },
  created() {
    this.$store.dispatch('fetchBooks');
  },
  methods: {
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
.book-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin: 40px;
}

.book-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px; 
}
.book-cover {
  max-width: 150px;
  max-height: 200px;
  object-fit: cover;
}
.book-details {
  flex-grow: 1;
}
button {
  margin-top: 10px;
  color: white;
  background-color: #0E2954;
  border: 0;
  padding: 8px;
  border-radius: 10%;
  cursor: pointer;
}
</style>
