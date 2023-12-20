import {createContext, useState} from "react";

export type FavoriteContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<FavoriteContextType | null>(null)

export const FavoriteProvider = (props: any) => {
  const {children} = props
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([])

  const addFavorite = (id: string) => {
    setFavoriteMealIds((prevState) => [...prevState, id])
  }
  const removeFavorite = (id: string) => {
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