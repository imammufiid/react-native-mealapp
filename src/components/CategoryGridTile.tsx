import {Text, TouchableOpacity, View} from "react-native";

interface CategoryGridTileProps {
  title: string
  color: string
}

export const CategoryGridTile = (props: CategoryGridTileProps) => {
  const {title, color} = props

  return (
    <View>
      <TouchableOpacity
        onPress={() => null}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}