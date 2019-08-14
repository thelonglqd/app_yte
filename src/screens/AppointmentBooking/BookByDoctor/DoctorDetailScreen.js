import React from "react";
import { Text, View } from "react-native";

class DoctorDetailScreen extends React.Component {
  static navigationOptions = {
    title: "Thông tin chi tiết bác sĩ"
  };

  render() {
    return (
      <View>
        <Text>DoctorDetailScreen</Text>
      </View>
    );
  }
}

export default DoctorDetailScreen;
