import React from "react";
import { View, TextInput, Text, StyleSheet, Picker } from "react-native";
import { ButtonGroup, Input } from "react-native-elements";
import { Formik } from "formik";

const styles = StyleSheet.create({
  viewPort: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#72eaea",
    width: "90%",
    height: "90%"
  },
  selectPatient: {
    width: "75%"
  },
  input: {
    width: "90%",
    fontSize: 14,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "grey",
    marginTop: 20,
    padding: 10
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1
  },
  picker: {
    width: "90%",
    borderWidth: 1,
    borderColor: "grey"
  }
});

const buttons = ["Đặt cho mình", "Đặt cho người thân"];

const years = ["1985", "1986", "1987", "1988"];

class Booking extends React.Component {
  static navigationOptions = {
    title: "Đặt lịch khám"
  };

  constructor() {
    super();
    this.state = {
      selectedYear: "",
      selectedIndex: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const { selectedIndex } = this.state;
    return (
      <View style={styles.viewPort}>
        <View style={styles.container}>
          <View style={styles.selectPatient}>
            <ButtonGroup
              onPress={this.updateIndex}
              selectedIndex={selectedIndex}
              selectedButtonStyle={{ backgroundColor: "#18bf21" }}
              containerBorderRadius={15}
              buttons={buttons}
            />
          </View>
          <Formik
            initialValues={{
              patient_name: "",
              phone: "",
              year_of_birth: "",
              city: "",
              state: "",
              town: "",
              reason: ""
            }}
          >
            {formProps => (
              <View style={styles.formContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Họ tên bệnh nhân (bắt buộc)"
                  onChangeText={formProps.handleChange("name")}
                  onBlur={formProps.handleBlur("name")}
                  value={formProps.values.name}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Số điện thoại liên hệ (bắt buộc)"
                  onChangeText={formProps.handleChange("phone")}
                  onBlur={formProps.handleBlur("phone")}
                  value={formProps.values.phone}
                />
                <Picker
                  selectedValue={this.state.language}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item label="1985" value="1985" />
                  <Picker.Item label="1986" value="1986" />
                  <Picker.Item label="1987" value="1987" />
                  <Picker.Item label="1988" value="1988" />
                  <Picker.Item label="1989" value="1989" />
                  <Picker.Item label="1990" value="1990" />
                </Picker>
                <Picker
                  selectedValue={this.state.language}
                  style={styles.picker}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ language: itemValue })
                  }
                >
                  <Picker.Item label="Hà Nội" value="Hà Nội" />
                  <Picker.Item
                    label="TP. Hồ Chí Minh"
                    value="TP. Hồ Chí Minh"
                  />
                  <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
                  <Picker.Item label="Hải Phòng" value="Hải Phòng" />
                  <Picker.Item label="Quảng Ninh" value="Quảng Ninh" />
                  <Picker.Item label="Nam Định" value="Nam Định" />
                </Picker>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

export default Booking;
