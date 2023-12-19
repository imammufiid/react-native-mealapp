import {CategoriesScreen} from "@/ui/screen/CategoriesScreen";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealsOverviewScreen} from "@/ui/screen/MealsOverviewScreen";
import {MealDetailScreen} from "@/ui/screen/MealDetailScreen";
import {RootStackParamList} from "@/navigation/Utils";
import ROUTES_NAMED from "@/navigation/Routes";
import {Colors} from "@/utils/constants/color";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import {FavoriteScreen} from "@/ui/screen/FavoriteScreen";
import {Platform} from "react-native";


const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTabs = createBottomTabNavigator()

const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: Colors.darknessBrown,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 8 : 26
        },
      }}>
      <BottomTabs.Screen
        name={ROUTES_NAMED.CATEGORIES}
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="list" color={color} size={size}/>
          )
        }}
        component={CategoriesScreen}/>
      <BottomTabs.Screen
        name={ROUTES_NAMED.FAVORITE}
        options={{
          title: 'Favorite',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size}/>
          )
        }}
        component={FavoriteScreen}/>
    </BottomTabs.Navigator>
  )
}

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
            name={ROUTES_NAMED.BOTTOM_TABS}
            options={{
              title: 'Bottom Tabs',
              headerShown: false
            }}
            component={BottomTabsNavigator}/>
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
