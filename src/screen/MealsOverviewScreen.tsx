import {FlatList, ListRenderItemInfo, StyleSheet, Text, View} from "react-native";
import {Category} from "@models/Category";
import {MEALS} from "@data/dummy-data";
import {Meal} from "@models/Meal";
import {MealItem} from "@components/MealItem";

export interface MealsOverviewScreenParam {
  category: Category
}

export const MealsOverviewScreen = (props: any) => {
  const {route} = props
  const params = route.params as MealsOverviewScreenParam
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0
  })

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={itemData.item}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})