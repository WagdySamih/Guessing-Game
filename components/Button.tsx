import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  text?: ReactNode;
  onPress?: () => void;
};

const Button: React.FC<Props> = ({ text, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#4d0429" }}
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    flex: 1,
  },

  container: {
    backgroundColor: "#df0c0c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "open-sans",
  },
  pressed: {
    opacity: 0.75,
  },
});
