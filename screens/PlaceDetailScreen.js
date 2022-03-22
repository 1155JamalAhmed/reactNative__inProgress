import { StyleSheet, View, Text } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View>
      <Text>Places Detail Screen</Text>
    </View>
  );
};

export const screenOptions = (props) => {
  return {
    title: props.route.params.placeTitle,
  };
}; 

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
