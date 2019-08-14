import React from "react";
import { Text, View, StyleSheet, Picker } from "react-native";
import { Icon, ButtonGroup, Input, Button } from "react-native-elements";
import LogoMenu from "./components/LogoMenu";

const styles = StyleSheet.create({
  container: {
    position: "absolute"
  }
});

class BookAppointment extends React.Component {
  static navigationOptions = {
    title: "Đặt Khám",
    tabBarVisible: false
  };

  render() {
    return (
      <View>
        <LogoMenu />
      </View>
    );
  }
}

export default BookAppointment;
