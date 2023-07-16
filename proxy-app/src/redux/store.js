import { configureStore } from '@reduxjs/toolkit';
// Importajte ostale reducer-e koje koristite
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    // Dodajte ostale reducere ovdje
  },
});

export default store;