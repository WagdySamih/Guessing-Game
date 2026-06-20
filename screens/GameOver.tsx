import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";

type Props = {
  number: number;
};

const GameOver: React.FC<Props> = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Game Over</Text>
      <Text style={styles.text}>Your number is {number}</Text>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    margin: "auto",
    padding: 16,
    borderRadius: 8,
    borderColor: COLORS.primary500,
  },
  text: {
    fontSize: 30,
    color: COLORS.primary500,
    fontWeight: "condensed",
  },
});
