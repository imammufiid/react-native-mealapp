import {Meals} from "@/ui/components/Meals/Meals";
import {MEALS} from "@data/source/dummy-data";
import {Platform, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {Colors} from "@/utils/constants/color";
import {useSelector} from "react-redux";
import {RootState} from "@/store/redux/store";

export const FavoriteScreen = () => {
  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter(meal => {
    return favoriteMealIds.includes(meal.id)
  })

  if (favoriteMeals.length === 0) {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.root}>
      <Meals items={favoriteMeals}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.darkBrown,
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white
  }
})