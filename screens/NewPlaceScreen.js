import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Button,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as placesActions from "../store/places-actions";
import TakeImage from "../components/TakeImage";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");

  const dispatch = useDispatch();
  const titleChangeHandler = (text) => {
    //you could add validation over here
    setTitleValue(text);
  };

  const savePlaceHandler = () => {
    console.log("save per click hua he or value ye he: ", titleValue);
    dispatch(placesActions.addPlace(titleValue));
    props.navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <TakeImage />
        <View style={styles.savePlaceBtnContainer}>
          <Button
            title="Save Place"
            color={Colors.primary}
            onPress={savePlaceHandler}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const screenOptions = () => {
  return {
    title: "Add Place",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    margin: 30,
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    height: 40,
    marginBottom: 15,
    padding: 10,
  },
  savePlaceBtnContainer: {
    marginVertical: 10,
  },
});

export default NewPlaceScreen;
