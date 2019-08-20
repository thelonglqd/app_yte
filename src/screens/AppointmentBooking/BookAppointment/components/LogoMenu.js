import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import MenuItems from "./MenuItems";
import { FLEX_COMMON } from "../../../../common/styles";

const logoWidthAndHeight = Dimensions.get("window").width * 0.4;

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
  imageBackGroundStyle: {
    ...FLEX_COMMON,
    width: "100%",
    height: "100%"
  },
  imageLogoStyle: {
    zIndex: 1,
    backgroundColor: "white",
    width: logoWidthAndHeight,
    height: logoWidthAndHeight,
    borderRadius: logoWidthAndHeight / 2
  }
});

class LogoMenu extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../../../assets/book_menu_background.png")}
            style={styles.imageBackGroundStyle}
          >
            <Image
              style={styles.imageLogoStyle}
              source={require("../../../../../assets/the-caduceus.jpg")}
            />
          </ImageBackground>
        </View>
        <View style={styles.backGroundColorContainer} />
        <MenuItems />
      </>
    );
  }
}

export default LogoMenu;
