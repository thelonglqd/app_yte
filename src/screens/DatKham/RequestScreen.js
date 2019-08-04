import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  textContainer: {
    marginBottom: 15
  },
  requestText: {
    fontSize: 20
  }
});

const requestsList = [
  { name: "Siêu âm" },
  { name: "Chụp cộng hưởng từ" },
  { name: "Khám bệnh" },
  { name: "Xét nghiệm" },
  { name: "Nội soi" },
  { name: "Chụp CT - cắt lớp" },
  { name: "Khác" }
];

class RequestScreen extends React.Component {
  static navigationOptions = {
    title: "Chọn yêu cầu"
  };
  render() {
    return (
      <View style={styles.container}>
        {requestsList.map(req => (
          <View style={styles.textContainer} key={req.name}>
            <Text style={styles.requestText}>{req.name}</Text>
            <Divider />
          </View>
        ))}
      </View>
    );
  }
}

export default RequestScreen;
