import {Image, Platform, Pressable, StyleSheet, Text, View} from "react-native";
import {Meal} from "@data/models/Meal";
import {useNavigation} from '@react-navigation/native';
import {BaseProps, StackNavigation} from "@/navigation/Utils";
import ROUTES_NAMED from "@/navigation/Routes";
import {MealDetails} from "@/ui/components/MealDetails";
import {Colors} from "@/utils/constants/color";

export interface MealItemProps extends BaseProps {
  meal: Meal
}

export const MealItem = (props: MealItemProps) => {
  const {meal} = props
  const navigation = useNavigation<StackNavigation>()
  const onPressHandler = () => {
    const param: MealItemProps = {
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
          <MealDetails meal={meal}/>
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
    backgroundColor: Colors.white,
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
  buttonPressed: {
    opacity: 0.5
  }
})