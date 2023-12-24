import {StyleSheet} from "react-native";
import {Category} from "@data/models/Category";
import {MEALS} from "@data/source/dummy-data";
import {useLayoutEffect} from "react";
import {BaseProps} from "@/navigation/Utils";
import {Meals} from "@/ui/components/Meals/Meals";

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

  return <Meals items={displayedMeals}/>
}