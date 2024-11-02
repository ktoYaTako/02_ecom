import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from '../graphql/generated';

interface FavoritesState {
  items: Car[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Car>) {
      state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<Car>) {
      state.items = state.items.filter(car => car.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
