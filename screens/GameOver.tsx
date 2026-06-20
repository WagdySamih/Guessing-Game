import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

type Props = {
  number: number;
  onGameStart: () => void;
};

const GameOver: React.FC<Props> = ({ number, onGameStart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Game Over</Text>
        <Text style={styles.text}>Your number is {number}</Text>
      </View>

      <Button text="Start New Game" onPress={onGameStart} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",

    gap: 16,
    padding: 16,
  },
  box: {
    padding: 16,
    borderRadius: 8,
    borderColor: COLORS.primary500,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: COLORS.primary500,
    fontWeight: "condensed",
  },
});
