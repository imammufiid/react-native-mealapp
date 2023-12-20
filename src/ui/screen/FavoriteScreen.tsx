import {Text, View} from "react-native";
import {useContext, useEffect} from "react";
import {FavoriteContext} from "@/store/context/favorite-context";

export const FavoriteScreen = () => {
  const favoriteMealContext = useContext(FavoriteContext)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>{favoriteMealContext?.ids.join(', ')}</Text>
    </View>
  )
}