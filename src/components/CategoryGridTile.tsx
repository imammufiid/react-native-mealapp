import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface CategoryGridTileProps {
  title: string
  color: string
}

export const CategoryGridTile = (props: CategoryGridTileProps) => {
  const {title, color} = props

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={() => null}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
})