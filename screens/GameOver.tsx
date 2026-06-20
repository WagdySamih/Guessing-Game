import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";
import Button from "../components/Button";

type Props = {
  number: number;
  onGameStart: () => void;
  roundsCount: number;
};

const GameOver: React.FC<Props> = ({ number, onGameStart, roundsCount }) => {
  return (
    <ScrollView style={styles.container}>
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
      <View style={{ paddingBottom: 30 }}>
        <Button text="Start New Game" onPress={onGameStart} />
      </View>
    </ScrollView>
  );
};

export default GameOver;

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    gap: 100,
    padding: 16,
  },
  box: {
    padding: 16,
    borderRadius: 8,
    borderColor: COLORS.primary500,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 30,
    color: COLORS.primary500,
    fontWeight: "condensed",
    fontFamily: "open-sans-bold",
  },
  imageContainer: {
    width: Math.min(width, height) - 100,
    height: Math.min(width, height) - 100,
    borderRadius: (Math.min(width, height) - 100) / 2,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 3,
    borderColor: COLORS.primary500,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    marginBottom: 16,
  },
  highlight: {
    color: COLORS.primary500,
    fontFamily: "open-sans-bold",
  },
});
