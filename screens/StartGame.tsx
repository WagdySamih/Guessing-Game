import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import { COLORS } from "../constants/colors";

type Props = {
  onConfirmPick: (num: number) => void;
};

const StartGame: React.FC<Props> = ({ onConfirmPick }) => {
  const [value, setValue] = useState("");
  const { width, height } = useWindowDimensions();

  const onChange = (v: string) => {
    setValue(v || "");
  };

  const onConfirm = () => {
    const num = +value;
    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert("Invalid Number!", "Number must be between 1 & 99", [
        { text: "Okay", style: "default", onPress: onReset },
      ]);

      return;
    }

    onConfirmPick(num);
  };

  const onReset = () => setValue("");

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View
          style={[styles.container, { marginTop: width < height ? 100 : 30 }]}
        >
          <Text style={styles.label}>Enter Your Number</Text>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={value}
            onChangeText={onChange}
          />

          <View style={styles.buttons}>
            <Button text="Reset" onPress={onReset} />
            <Button text="Confirm" onPress={onConfirm} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: width < 320 ? 12 : 16,
    marginHorizontal: width < 320 ? 16 : 26,
    borderRadius: 8,
    backgroundColor: COLORS.primary500,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  label: {
    color: COLORS.accent,
  },
  input: {
    height: 55,
    fontSize: 32,
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 2,
    color: COLORS.accent,
    marginVertical: 16,
    fontWeight: "500",
    width: 50,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
});

export default StartGame;
