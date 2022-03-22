// step - 01 install expo-camera
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from "react-native";

import { Camera } from "expo-camera";
import { useState, useEffect } from "react";

const TakeImage = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState();

  const takePermissionForCamera = async () => {
    //this line when executed on web browser crashes the app with errors
    const { status } = await Camera.requestCameraPermissionsAsync();
    
    if (status === "granted") {
      return true;
    }
    return false;
  };

  const takePictureHandler = async () => {
    const isCameraPermissionGranted = await takePermissionForCamera();
    setHasCameraPermission(isCameraPermissionGranted);
    if (isCameraPermissionGranted) {
      setStartCamera(true);
    } else {
      Alert.alert(
        "Camera Permission Denied!",
        "This app has no access to camera, grant camera access from settings",
        [{ text: "Okey", onPress: () => console.log("okey") }]
      );
    }
  };

  let camera;

  const imageClickedHandler = async () => {
    if (!camera && !hasCameraPermission) return;
    const photo = await camera.takePictureAsync();
    setImage(photo);
    setStartCamera(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        {!startCamera && image && (
          <Image style={styles.image} source={{ uri: image.uri }} /> // <========== here is the uri =========
        )}
        {startCamera && (
          <TouchableOpacity onPress={imageClickedHandler}>
            <View style={styles.cameraContainer}>
              <Camera
                style={styles.camera}
                type={type}
                ratio="16:3"
                useCamera2Api
                ref={(r) => {
                  camera = r;
                }}
              >
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <Text style={styles.text}> Flip </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {!startCamera && (
        <View>
          <Button title="Take Image" onPress={takePictureHandler} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    height: "100%",
  },
  cameraContainer: {
    height: "100%",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.3,
    alignSelf: "flex-end",
    padding: 10,
    alignItems: "center",
    borderColor: "skyblue",
    borderWidth: 0.4,
    borderRadius: 50,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

export default TakeImage;

// export default TakeImage;

// import { useState } from "react";
// import { View, Button, Text, StyleSheet, Image, Alert } from "react-native";
// import Colors from "../constants/Colors";
// import * as ImagePicker from "expo-image-picker";

// const ImgPicker = () => {
//   const [pickedImage, setPickedImage] = useState();

//   const verifyPermissions = async () => {
//     const result = await ImagePicker.requestCameraPermissionsAsync();

//     if (result.status !== "granted") {
//       Alert.alert(
//         "Insufficient Permission!",
//         "You have to grant Camera permissions to use this app.",
//         [{ text: "okay" }]
//       );
//       return false;
//     }
//     return true;
//   };

//   const takeImageHandler = async () => {
//     const hasPermission = await verifyPermissions();
//     if (!hasPermission) {
//       return;
//     }
//     try {
//       const image = await ImagePicker.launchCameraAsync({
//         allowsEditing: true,
//         aspect: [16, 9],
//         quality: 0.5,
//       });
//       setPickedImage(image.uri);
//     } catch (err) {
//       console.log("An error occured while taking image");
//     }
//   };
//   return (
//     <View style={styles.imagePicker}>
//       <View style={styles.imagePreview}>
//         {!pickedImage && <Text>No image picked yet...</Text>}
//         {pickedImage && (
//           <Image style={styles.image} source={{ uri: pickedImage }} />
//         )}
//       </View>
//       <Button
//         title="Take Image"
//         color={Colors.primary}
//         onPress={takeImageHandler}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imagePicker: {
//     alignItems: "center",
//     marginVertical: 30,
//   },
//   imagePreview: {
//     width: "100%",
//     height: 200,
//     marginBottom: 10,
//     justifyContent: "center",
//     alignItems: "center",
//     borderColor: "#ccc",
//     borderWidth: 1,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default ImgPicker;
