import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

type Props = {
  number: number;
  onGameStart: () => void;
  roundsCount: number;
};

const GameOver: React.FC<Props> = ({ number, onGameStart, roundsCount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Game Over</Text>
        <Text style={styles.text}>Your number is {number}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>
        Your phone took <Text style={styles.highlight}>{roundsCount}</Text>{" "}
        rounds to guess your number{" "}
        <Text style={styles.highlight}>{number}</Text>
      </Text>

      <Button text="Start New Game" onPress={onGameStart} />
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    gap: 36,
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
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 125,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: COLORS.primary500,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
  },
  highlight: {
    color: COLORS.primary500,
    fontFamily: "open-sans-bold",
  },
});
