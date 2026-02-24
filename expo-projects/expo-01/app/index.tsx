import { Text, View } from "react-native";
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({ photo: {
    width: 66,
    height: 58,
  },})

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.photo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>Hola, yo soy Hallason Matias!</Text>
    </View>
  );
}
