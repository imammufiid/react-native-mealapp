import {StyleSheet, View, Text} from "react-native";
import React from "react";
import {Meal} from "@models/Meal";

export interface MealDetailsParam {
  meal: Meal,
  style?: object,
  textStyle?: object,
}

export const MealDetails = (param: MealDetailsParam) => {
  const {meal, style, textStyle} = param
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.duration}m
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {meal.affordability.toUpperCase()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
})