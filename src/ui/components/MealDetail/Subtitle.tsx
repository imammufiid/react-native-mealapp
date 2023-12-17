import {View, Text, StyleSheet} from "react-native";
import {Colors} from "@/utils/constants/color";

interface SubtitleProps {
  title: string,
  subtitleContainerStyle?: object,
  subtitleStyle?: object,
}

export const Subtitle = (props: SubtitleProps) => {
  return (
    <View style={[styles.subtitleContainer, props.subtitleContainerStyle]}>
      <Text style={[styles.subtitle, props.subtitleStyle]}>
        {props.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.lightBrown,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    margin: 4,
    borderBottomColor: Colors.lightBrown,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    padding: 6,
  }
})