import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {MealItemParam} from "@components/MealItem";
import {MealDetails} from "@components/MealDetails";
import {Subtitle} from "@components/MealDetail/Subtitle";
import {List} from "@components/MealDetail/List";
import {useLayoutEffect} from "react";
import {IconButton} from "@components/IconButton";

export const MealDetailScreen = (props: any) => {
  const {route, navigation} = props
  const {meal} = route.params as MealItemParam

  const headerButtonPressedHandler = () => {
    console.info('Pressed')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="star"
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
    color: 'white'
  },
  detailStyle: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '90%',
  }
})