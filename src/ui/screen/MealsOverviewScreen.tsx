import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";
import {Category} from "@data/models/Category";
import {MEALS} from "@data/source/dummy-data";
import {Meal} from "@data/models/Meal";
import {MealItem} from "@/ui/components/MealItem";
import {useLayoutEffect} from "react";
import {BaseProps} from "@/navigation/Utils";

export interface MealsOverviewScreenParam extends BaseProps {
  category: Category
}

export const MealsOverviewScreen = (props: any) => {
  const {route, navigation} = props
  const params = route.params as MealsOverviewScreenParam
  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params.category.id) >= 0
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.category.title
    })
  }, [params, navigation])

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