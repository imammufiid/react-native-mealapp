import {StyleSheet, Text, View} from "react-native";

interface ListProps {
  data: string[]
}

export const List = (props: ListProps) => {
  return props.data.map(item => {
    return (
      <View key={item} style={styles.listItem}>
        <Text style={styles.itemColor}>{item}</Text>
      </View>
    )
  })
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: '#E2B497'
  },
  itemColor: {
    color: '#351401',
    textAlign: 'center'
  }
})