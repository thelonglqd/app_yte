import React from "react";
import { Text, View, StyleSheet, Picker } from "react-native";
import { Icon, ButtonGroup, Input, Button } from "react-native-elements";

class BookAppointment extends React.Component {
  static navigationOptions = {
    title: "Đặt Khám",
    tabBarVisible: false
  };

  render() {
    return (
      <View>
        <Button
          title="Đặt theo bác sĩ"
          onPress={() => this.props.navigation.navigate("BookByDoctor")}
        />
        <Button
          title="Đặt theo bệnh viện"
          onPress={() => this.props.navigation.navigate("BookByHospital")}
        />
        <Button
          title="Đặt theo chuyên khoa"
          onPress={() => this.props.navigation.navigate("BookByDepartment")}
        />
        <Button
          title="Đặt khám tổ hợp"
          onPress={() => this.props.navigation.navigate("BookMultiDepartments")}
        />
      </View>
    );
  }
}

export default BookAppointment;
