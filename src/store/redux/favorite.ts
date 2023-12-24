import {createSlice} from "@reduxjs/toolkit";

interface FavoriteState {
  ids: string[]
}

const initialState: FavoriteState = {
  ids: []
}

const favoriteSlice = createSlice({
  initialState: initialState,
  name: 'favorite',
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
})

export const favoriteAction = favoriteSlice.actions
export default favoriteSlice.reducer