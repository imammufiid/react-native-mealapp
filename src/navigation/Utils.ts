import {NavigationProp} from "@react-navigation/native";
import ROUTES_NAMED from "@/navigation/Routes";

export type ScreenNames = [ROUTES_NAMED.CATEGORIES, ROUTES_NAMED.MEAL_OVERVIEW, ROUTES_NAMED.MEAL_DETAIL] // type these manually
export type RootStackParamList = Record<ScreenNames[number], BaseProps>;
export type StackNavigation = NavigationProp<RootStackParamList>;

export interface BaseProps {
}