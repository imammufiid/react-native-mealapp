import {FlatList, ListRenderItemInfo, StyleSheet, View} from "react-native";
import {Meal} from "@data/models/Meal";
import {MealItem} from "@/ui/components/MealItem";

interface MealsProps {
  items: Meal[],
}

export const Meals = (props: MealsProps) => {
  const {items} = props

  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
    return <MealItem meal={itemData.item}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  }
})