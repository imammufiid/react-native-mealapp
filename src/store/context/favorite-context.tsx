import {createContext, useState} from "react";

export type FavoriteContextType = {
  ids: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

export const FavoriteContext = createContext<FavoriteContextType | null>(null)

export const FavoriteProvider = (props: any) => {
  const {children} = props
  const [favoriteMealIds, setFavoriteMealIds] = useState<number[]>([])

  const addFavorite = (id: number) => {
    setFavoriteMealIds((prevState) => [...prevState, id])
  }
  const removeFavorite = (id: number) => {
    setFavoriteMealIds((prevState) =>
      prevState.filter(mealId => mealId !== id)
    )
  }

  const value: FavoriteContextType = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }


  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}