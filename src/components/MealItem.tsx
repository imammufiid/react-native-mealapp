import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {Meal} from "@models/Meal";
import {useNavigation} from '@react-navigation/native';
import {ParamList, StackNavigation} from "@/navigation/Utils";
import ROUTES_NAMED from "@/navigation/Routes";

export interface MealItemParam extends ParamList {
  meal: Meal
}

export const MealItem = (props: MealItemParam) => {
  const {meal} = props
  const navigation = useNavigation<StackNavigation>()
  const onPressHandler = () => {
    const param: MealItemParam = {
      meal: meal
    };

    navigation.navigate(ROUTES_NAMED.MEAL_DETAIL, param)
  }

  return (
    <View style={styles.melItem}>
      <Pressable
        android_ripple={{color: '#CCC'}}
        style={({pressed}) =>
          pressed ? styles.buttonPressed : null
        }
        onPress={onPressHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{uri: meal.imageUrl}}
              style={styles.image}/>
            <Text
              style={styles.title}>
              {meal.title}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{meal.duration}m</Text>
            <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{meal.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  melItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 9
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
  buttonPressed: {
    opacity: 0.5
  }
})