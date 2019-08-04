import React from "react";
import { Text, View } from "react-native";

class YBaScreen extends React.Component {
  static navigationOptions = {
    title: "Y Bạ Điện Tử"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Không thấy lịch sử khám nào</Text>
      </View>
    );
  }
}

export default YBaScreen;
