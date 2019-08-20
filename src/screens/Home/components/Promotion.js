import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

const promotionCardStyle = {
  display: "flex",
  justifyContent: "center"
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
//../../../../assets/placeholder.png
class Promotion extends React.Component {
  render() {
    return (
      <View>
        <Text>Ưu đãi</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-between"
          }}
        >
          {[1, 2, 3].map(n => (
            <Image
              key={n}
              source={require("../../../../assets/menu-up-image.png")}
              style={{
                width: Dimensions.get("window").width,
                aspectRatio: 2 / 1,
                resizeMode: "stretch"
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Promotion;
