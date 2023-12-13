import { StyleSheet, View, Text } from "react-native";
import LottieView from 'lottie-react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        style={{
          height: 250,
        }}
        source={require('../../assets/animation.json')}
      />
      <Text style={styles.intro}>
        Ini merupakan sebuah aplikasi yang berisi mengenai hooks yang ada pada
        react native berbasis Functional Component
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  intro: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 25
  },
});
