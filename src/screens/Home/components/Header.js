import React from "react";
import { Image, View } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Image
          source={require("../../../../assets/logo.png")}
          style={{ width: 200, height: 20, flex: 1, marginLeft: 50 }}
        />
      </View>
    );
  }
}

export default Header;
