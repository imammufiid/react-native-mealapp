import {FlatList, ListRenderItemInfo} from "react-native";
import {CATEGORIES} from "@data/dummy-data";
import {Category} from "@models/Category";
import {CategoryGridTile} from "@components/CategoryGridTile";

const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
  const {item} = itemData
  return <CategoryGridTile title={item.title} color={item.color}/>
}

export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}/>
  )
}