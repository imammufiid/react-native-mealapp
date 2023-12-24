import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MealItemProps} from "@/ui/components/MealItem";
import {MealDetails} from "@/ui/components/MealDetails";
import {Subtitle} from "@/ui/components/MealDetail/Subtitle";
import {List} from "@/ui/components/MealDetail/List";
import {useLayoutEffect} from "react";
import {IconButton} from "@/ui/components/IconButton";
import {Colors} from "@/utils/constants/color";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, FavoriteActionPayload, removeFavorite} from "@/store/redux/favorite";
import {RootState} from "@/store/redux/store";

export const MealDetailScreen = (props: any) => {
  const {route, navigation} = props
  const {meal} = route.params as MealItemProps

  const favoriteMealIds = useSelector((state: RootState) => state.favoriteMeals.ids)
  const mealIsFavorite = favoriteMealIds.includes(meal.id) ?? false
  const dispatch = useDispatch()

  const headerButtonPressedHandler = () => {
    const payload: FavoriteActionPayload = {
      id: meal.id
    }

    if (mealIsFavorite) {
      dispatch(removeFavorite(payload))
      return
    }
    dispatch(addFavorite(payload))
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          onPress={headerButtonPressedHandler}/>
      )
    })
  }, [navigation, headerButtonPressedHandler])

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: meal.imageUrl}}
          style={styles.image}/>
      </View>
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        meal={meal}
        textStyle={styles.detailStyle}/>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients"/>
          <List data={meal.ingredients}/>
          <Subtitle title="Step"/>
          <List data={meal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 32
  },
  imageContainer: {
    margin: 12,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: Colors.white
  },
  detailStyle: {
    color: Colors.white
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '90%',
  }
})