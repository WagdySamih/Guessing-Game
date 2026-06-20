import { Alert, StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react-native";
import { COLORS } from "../constants/colors";
import { generateRandomBetween } from "../utils/generateRandomBetween";
import Button from "../components/Button";

type Props = {
  input: number;
  onGameOver: () => void;
  onNewRound: (guess: number) => void;
  rounds: number[];
};

const Game: React.FC<Props> = ({ input, onGameOver, onNewRound, rounds }) => {
  const initialGuess = generateRandomBetween(1, 100, input);
  const [lowerBound, setLowerBound] = useState(0);
  const [upperBound, setUpperBound] = useState(100);
  const [guess, setGuess] = useState(initialGuess);

  useEffect(() => {
    if (guess === input) onGameOver();
    console.log({ guess, input, upperBound, lowerBound });
  }, [guess, input]);

  const onGuess = (direction: "higher" | "lower") => {
    let newGuess;
    if (
      (direction === "higher" && input < guess) ||
      (direction == "lower" && input > guess)
    ) {
      Alert.alert("Don't Lie!", "You know you're wrong", [{ text: "Sorry" }]);
      return;
    }
    if (direction === "higher") {
      setLowerBound(guess + 1);
      newGuess = generateRandomBetween(guess + 1, upperBound, guess);
    } else {
      setUpperBound(guess);
      newGuess = generateRandomBetween(lowerBound, guess, guess);
    }

    setGuess(newGuess);
    onNewRound(newGuess);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <Text style={styles.input}>{guess}</Text>
      <Text style={styles.subText}>Higher Or Lower</Text>
      <View style={styles.buttons}>
        <Button
          text={<Minus color={COLORS.white} size={18} />}
          onPress={() => onGuess("lower")}
        />
        <Button
          text={<Plus color={COLORS.white} size={18} />}
          onPress={() => onGuess("higher")}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={({ item, index }) => (
            <View style={styles.rounds}>
              <Text style={styles.roundText}>
                <Text style={styles.order}>#{rounds.length - index} </Text>
                the opponent's guess is {item}
              </Text>
            </View>
          )}
        />
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
    fontSize: 24,
    textAlign: "center",
    color: COLORS.primary,
    borderWidth: 3,
    borderColor: COLORS.primary,
    borderRadius: 6,
    paddingVertical: 4,
    fontFamily: "open-sans-bold",
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
    fontFamily: "open-sans",
  },
  subText: {
    textAlign: "center",
    fontFamily: "open-sans",
  },
  buttons: {
    flexDirection: "row",
    gap: 14,
  },
  listContainer: {
    flex: 1,
  },
  rounds: {
    backgroundColor: COLORS.accent,
    borderRadius: 8,
    padding: 8,
    marginVertical: 4,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  roundText: {
    fontFamily: "open-sans",
  },
  order: {
    color: COLORS.primary,
  },
});
