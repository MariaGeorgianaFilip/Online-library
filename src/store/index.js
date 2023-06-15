import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    borrowedBooks: [],
    searchResults: [],
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    SET_SEARCH_RESULTS(state, results) {
      state.searchResults = results;
    },
    ADD_BORROWED_BOOK(state, book) {
      state.borrowedBooks.push(book);
    },
  },
  actions: {
    fetchBooks({ commit }) {
      fetch('https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=20&_cacheBust=' + Date.now())
        .then(response => response.json())
        .then(data => {
          const books = data.items.map(item => ({
            cover: item.volumeInfo.imageLinks?.thumbnail || null,
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
            description: item.volumeInfo.description || 'No description available',
            available: true,
          }));
          commit('SET_BOOKS', books);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    },
    searchBooks({ commit, state }, searchTerm) {
      const results = state.books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      commit('SET_SEARCH_RESULTS', results);
    },
    borrowBook({ commit }, book) {
    commit('ADD_BORROWED_BOOK', book);
    }
  }
})
 