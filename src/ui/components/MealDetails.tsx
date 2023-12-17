import {StyleSheet, View, Text} from "react-native";
import React from "react";
import {Meal} from "@data/models/Meal";

export interface MealDetailsProps {
  meal: Meal,
  style?: object,
  textStyle?: object,
}

export const MealDetails = (props: MealDetailsProps) => {
  const {meal, style, textStyle} = props
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