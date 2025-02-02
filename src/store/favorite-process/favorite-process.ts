import {OffersDataType} from '../types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../namespace.ts';
import {changeFavoriteStatus, fetchFavoritesList} from '../api-actions.ts';

type FavoritesType = {
  favoriteOffers: OffersDataType[];
};

const initialState: FavoritesType = {
  favoriteOffers: [],
};

export const favoriteProcess = createSlice({
  name: Namespace.Favorites,
  initialState,
  reducers: {
    setFavoritesList(state, { payload }: PayloadAction<OffersDataType[]>) {
      state.favoriteOffers = payload;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchFavoritesList.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, {payload}: PayloadAction<OffersDataType>) => {
        if (payload.isFavorite) {
          state.favoriteOffers = [...state.favoriteOffers, payload];
        } else {
          state.favoriteOffers.filter(((item) => item.id !== payload.id));
        }
      });
  }
});

export const {setFavoritesList} = favoriteProcess.actions;
