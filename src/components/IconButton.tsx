import {TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

interface IconButtonProps {
  icon: any,
  color?: string,
  onPress: () => void,
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name={props.icon} size={24} color={props.color ?? 'white'}/>
    </TouchableOpacity>
  )
}