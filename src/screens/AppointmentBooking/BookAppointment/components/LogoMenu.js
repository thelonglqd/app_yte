import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MenuItems from "./MenuItems";

const styles = StyleSheet.create({
  container: {
    height: "70%",
    position: "relative"
  },
  backGroundColorContainer: {
    position: "absolute",
    height: "70%",
    width: "100%",
    backgroundColor: "#rgba(0, 151, 126, 0.8)"
  },
  logoContainer: {
    position: "absolute",
    height: "50%",
    width: "50%",
    top: 60,
    left: 110
  }
});

class LogoMenu extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../../../assets/book_menu_background.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.backGroundColorContainer} />
        <View style={styles.logoContainer}>
          <Image
            style={{
              backgroundColor: "white",
              width: 200,
              height: 200,
              borderRadius: 100
            }}
            source={require("../../../../../assets/the-caduceus.jpg")}
          />
        </View>
        <MenuItems />
      </>
    );
  }
}

export default LogoMenu;
