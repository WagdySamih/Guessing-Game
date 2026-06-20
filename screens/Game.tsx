import { Alert, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { useEffect, useState } from "react";
import { generateRandomBetween } from "../utils/generateRandomBetween";
import Button from "../components/Button";

type Props = {
  input: number;
  onGameOver: () => void;
};

let lowerBound = 1;
let higherBound = 100;

const Game: React.FC<Props> = ({ input, onGameOver }) => {
  const initialGuess = generateRandomBetween(lowerBound, higherBound, input);
  const [guess, setGuess] = useState(initialGuess);

  useEffect(() => {
    if (guess === input) onGameOver();
    console.log({ guess, input });
  }, [guess, input]);

  const onGuess = (direction: "higher" | "lower") => {
    if (
      (direction === "higher" && input < guess) ||
      (direction == "lower" && input > guess)
    ) {
      Alert.alert("Don't Lie!", "You know you're wrong", [{ text: "Sorry" }]);
      return;
    }
    if (direction === "higher") {
      lowerBound = guess + 1;
    } else {
      higherBound = guess;
    }
    const newGuess = generateRandomBetween(lowerBound, higherBound, guess);
    setGuess(newGuess);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <Text style={styles.input}>{guess}</Text>
      <Text style={styles.subText}>Higher Or Lower</Text>
      <View style={styles.buttons}>
        <Button text="-" onPress={() => onGuess("lower")} />
        <Button text="+" onPress={() => onGuess("higher")} />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    textAlign: "center",
    color: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 4,
  },
  input: {
    fontSize: 34,
    fontWeight: "condensedBold",
    textAlign: "center",
    color: COLORS.primary,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: COLORS.primary,
    padding: 14,
  },
  subText: {
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    gap: 14,
  },
});
