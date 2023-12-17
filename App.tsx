import {CategoriesScreen} from "@/ui/screen/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "@/ui/screen/MealsOverviewScreen";
import {MealDetailScreen} from "@/ui/screen/MealDetailScreen";
import {RootStackParamList} from "@/navigation/Utils";
import ROUTES_NAMED from "@/navigation/Routes";
import {Colors} from "@/utils/constants/color";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style={'light'}/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.darknessBrown},
            headerTintColor: Colors.white,
            contentStyle: {
              backgroundColor: Colors.darkBrown
            }
          }}>
          <Stack.Screen
            name={ROUTES_NAMED.CATEGORIES}
            options={{
              title: 'Categories',
            }}
            component={CategoriesScreen}/>
          <Stack.Screen
            name={ROUTES_NAMED.MEAL_OVERVIEW}
            component={MealsOverviewScreen}/>
          <Stack.Screen
            name={ROUTES_NAMED.MEAL_DETAIL}
            options={{
              title: 'Meal Detail',
            }}
            component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
