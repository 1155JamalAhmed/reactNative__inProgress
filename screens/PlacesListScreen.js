import { StyleSheet, View, Text, FlatList } from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  return (
    <FlatList
      data={places}
      renderItem={(itemData) => {
        return (
          <PlaceItem
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() => {
              props.navigation.navigate("PlaceDetail", {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export const screenOptions = (naveData) => {
  return {
    title: "All Places",
    headerRight: () => {
      return (
        <CustomHeaderButton
          onPress={() => {
            naveData.navigation.navigate("NewPlace");
          }}
        />
      );
    },
  };
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
