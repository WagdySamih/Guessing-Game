import { useEffect, useState, useCallback } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { COLORS } from "./constants/colors";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [input, setInput] = useState<number>();
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState<number[]>([]);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => setRounds([]), []);

  // This ensures splash screen hides ONLY when fonts are ready
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // keep splash screen visible
  }

  let screen = <StartGame onConfirmPick={setInput} />;

  if (input)
    screen = (
      <Game
        input={input}
        onGameOver={() => setIsGameOver(true)}
        onNewRound={(newGuess) => setRounds((prev) => [newGuess, ...prev])}
        rounds={rounds}
      />
    );

  if (isGameOver && input)
    screen = (
      <GameOver
        number={input}
        onGameStart={() => {
          setIsGameOver(false);
          setInput(undefined);
          setRounds([]);
        }}
        roundsCount={rounds.length}
      />
    );

  return (
    <LinearGradient
      colors={[COLORS.white, COLORS.primary500]}
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}
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
