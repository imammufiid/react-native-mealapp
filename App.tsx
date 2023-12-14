import {CategoriesScreen} from "./src/screen/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "./src/screen/MealsOverviewScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style={'dark'}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Categories'
            component={CategoriesScreen}/>
          <Stack.Screen
            name='Detail'
            component={MealsOverviewScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
