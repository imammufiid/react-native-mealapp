import {View, Text, StyleSheet} from "react-native";

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
    color: '#E2B497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    margin: 4,
    borderBottomColor: '#E2B497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    padding: 6,
  }
})