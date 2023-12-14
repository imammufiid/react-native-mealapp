import {FlatList, ListRenderItemInfo, SafeAreaView} from "react-native";
import {CATEGORIES} from "@data/dummy-data";
import {Category} from "@models/Category";
import {CategoryGridTile} from "@components/CategoryGridTile";


export const CategoriesScreen = (props: any) => {
  const {navigation} = props
  const renderCategoryItem = (itemData: ListRenderItemInfo<Category>) => {
    const pressHandler = () => {
      navigation.navigate('Detail')
    }

    const {item} = itemData
    return <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={pressHandler}/>
  }


  /**
   * MARK: Add key props if you want to use numColumns props
   * ref: https://stackoverflow.com/questions/63424511/invariant-violation-changing-numcolumns-on-the-fly-is-not-supported-i-do-not-c
   */
  return (
    <SafeAreaView>
      <FlatList
        key={'#'}
        data={CATEGORIES}
        keyExtractor={(item) => `#${item.id}`}
        renderItem={renderCategoryItem}
        numColumns={2}/>
    </SafeAreaView>
  )
}