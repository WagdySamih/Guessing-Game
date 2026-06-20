import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./constants/colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [input, setInput] = useState<number>();
  const [isGameOver, setIsGameOver] = useState(false);

  const onConfirmPick = (num: number) => {
    setInput(num);
  };

  let screen = <StartGame onConfirmPick={onConfirmPick} />;

  if (input)
    screen = <Game input={input} onGameOver={() => setIsGameOver(true)} />;

  if (isGameOver && input) screen = <GameOver number={input} />;

  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.primary500]}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.1 }}
      >
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>{screen}</SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
