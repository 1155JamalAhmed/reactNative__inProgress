import { Platform, View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      android_ripple={{
        color: "#bb6a00",
        borderless: true,
        radius: 500,
        foreground: true,
      }}
    >
      <View style={styles.headerButton}>
        <Ionicons
          name={Platform.OS === "android" ? "md-add" : "ios-add"}
          size={28}
          color={Platform.OS === "android" ? "white" : Colors.primary}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    borderColor: Platform.OS === 'android' ? "#bb6a00" : Colors.primary,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: Platform.OS === 'android' ? "#eb8b0d": 'white' ,
    borderRadius: 50,
  },
});

export default CustomHeaderButton;
