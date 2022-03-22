import { Platform } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import PlacesListScreen, {
  screenOptions as placesListNavOpt,
} from "../screens/PlacesListScreen";
import PlaceDetailScreen, {screenOptions as placeDetailNavOpt} from "../screens/PlaceDetailScreen";
import NewPlaceScreen, {screenOptions as newPlaceNavOpt} from "../screens/NewPlaceScreen";
import MapScreen, {screenOptions as mapNavOpt} from "../screens/MapScreen";

import Colors from "../constants/Colors";

const PlacesStackNavigator = createNativeStackNavigator();

const defaultOptForPlacesNavigator = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const PlacesNavigator = (props) => {
  return (
    <NavigationContainer>
      <PlacesStackNavigator.Navigator
        screenOptions={defaultOptForPlacesNavigator}
      >
        <PlacesStackNavigator.Screen
          name="Places"
          component={PlacesListScreen}
          options={placesListNavOpt}
        />
        <PlacesStackNavigator.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={placeDetailNavOpt}
        />
        <PlacesStackNavigator.Screen
          name="NewPlace"
          component={NewPlaceScreen}
          options={newPlaceNavOpt}
        />
        <PlacesStackNavigator.Screen name="Map" component={MapScreen} options={mapNavOpt}/>
      </PlacesStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default PlacesNavigator;
