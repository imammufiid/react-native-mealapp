import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[]
}

const initialState: FavoriteState = {
  ids: []
}

export interface FavoriteActionPayload {
  id: string
}

const favoriteSlice = createSlice({
  initialState: initialState,
  name: 'favorite',
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteActionPayload>) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action: PayloadAction<FavoriteActionPayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
})

export const {addFavorite, removeFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer