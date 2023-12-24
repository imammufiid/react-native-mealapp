import {useContext} from "react";
import {FavoriteContext} from "@/store/context/favorite-context";
import {Meals} from "@/ui/components/Meals/Meals";
import {MEALS} from "@data/source/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "@/utils/constants/color";

export const FavoriteScreen = () => {
  const favoriteMealContext = useContext(FavoriteContext)

  const favoriteMeals = MEALS.filter(meal => {
    if (favoriteMealContext === null) return false
    return favoriteMealContext.ids.includes(meal.id)
  })

  if (favoriteMealContext === null || favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }

  return <Meals items={favoriteMeals}/>
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white
  }
})