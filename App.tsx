import {CategoriesScreen} from "@/screen/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "@/screen/MealsOverviewScreen";
import {MealDetailScreen} from "@/screen/MealDetailScreen";
import {RootStackParamList} from "@/navigation/Utils";
import ROUTES_NAMED from "@/navigation/Routes";

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style={'light'}/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3F2F25'
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
            component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
