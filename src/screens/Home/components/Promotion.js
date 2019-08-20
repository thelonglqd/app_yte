import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    height: undefined,
    aspectRatio: 2.5 / 1,
    resizeMode: "stretch"
  }
});

const promotionCardStyle = {
  // display: "flex",
  // justifyContent: "center",
  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 4
  // },
  // shadowOpacity: 0.3,
  // shadowRadius: 4.65,
  // elevation: 8,
  // borderRadius: 5,
  // backgroundColor: "#fff"
};

class Promotion extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            height: "10%",
            marginLeft: 10
          }}
        >
          <Text style={{ fontSize: 15, color: "#000" }}>Ưu đãi</Text>
        </View>
        <ScrollView horizontal={true} style={{ width: "100%" }}>
          <View style={promotionCardStyle}>
            <Image
              source={require("../../../../assets/menu-up-image.png")}
              style={styles.imageStyles}
            />
          </View>
          <View style={promotionCardStyle}>
            <Image
              source={require("../../../../assets/menu-up-image.png")}
              style={styles.imageStyles}
            />
          </View>
          <View style={promotionCardStyle}>
            <Image
              source={require("../../../../assets/menu-up-image.png")}
              style={styles.imageStyles}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

export default Promotion;
