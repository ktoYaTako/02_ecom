import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favoritesSlice';
import { loadFavoritesFromLocalStorage, saveFavoritesToLocalStorage } from '../utils/localStorageUtils';

const preloadedState = {
  favorites: {
    items: loadFavoritesFromLocalStorage() || [],
  },
};

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState, 
});

store.subscribe(() => {
  saveFavoritesToLocalStorage(store.getState().favorites.items);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
