import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import MenuItems from "./MenuItems";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%"
  },
  backGroundColorContainer: {
    position: "absolute",
    height: "70%",
    width: "100%",
    backgroundColor: "#rgba(0, 151, 126, 0.8)"
  },
  logoContainer: {
    height: "70%",
    width: "50%"
  }
});

class LogoMenu extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../../../assets/book_menu_background.png")}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%"
            }}
          >
            <View style={styles.logoContainer}>
              <Image
                style={{
                  zIndex: 1,
                  backgroundColor: "white",
                  width: 200,
                  height: 200,
                  borderRadius: 100
                }}
                source={require("../../../../../assets/the-caduceus.jpg")}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.backGroundColorContainer} />
        <MenuItems />
      </>
    );
  }
}

export default LogoMenu;
