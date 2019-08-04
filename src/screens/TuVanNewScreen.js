import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { CheckBox, Button } from "react-native-elements";

const TEXT_COLOR = "#aeaeae";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%"
  },
  inputSection: {
    display: "flex",
    position: "absolute",
    left: 20,
    top: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 5,
    width: "90%",
    height: "65%",
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingTop: 10
  },
  textArea: {
    textAlignVertical: "top",
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    borderRadius: 5
  },
  backgroundSection: {
    backgroundColor: "#00977e",
    height: "30%"
  },
  ageAndGenderSection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  ageSection: {
    width: "30%"
  },
  genderSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "70%"
  },
  ageInput: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 5,
    borderColor: TEXT_COLOR,
    // width: "100%",
    padding: 3
  },
  checkBoxContainerStyle: {
    paddingTop: 20,
    borderWidth: 0,
    width: "35%"
  },
  additionInfoButton: {
    backgroundColor: "#00977e",
    width: "90%",
    marginTop: 30
  }
});

class TuVanNewScreen extends React.Component {
  state = { maleChecked: true, femaleChecked: true };
  static navigationOptions = {
    title: "Nội dung"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundSection} />
        <View style={styles.inputSection}>
          <Text style={{ color: TEXT_COLOR }}>Nội dung</Text>
          <TextInput style={styles.textArea} multiline numberOfLines={10} />
          <Text style={{ color: "red" }}>Vui lòng nhập nội dung câu hỏi</Text>
          <View style={styles.ageAndGenderSection}>
            <View style={styles.ageSection}>
              <Text style={{ color: TEXT_COLOR }}>Tuổi</Text>
              <TextInput style={styles.ageInput} />
            </View>
            <View style={styles.genderSection}>
              <CheckBox
                size={20}
                textStyle={{ fontSize: 12 }}
                containerStyle={styles.checkBoxContainerStyle}
                title="Nam"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.maleChecked}
                onPress={() => {
                  this.setState({ femaleChecked: !this.state.femaleChecked });
                  this.setState({ maleChecked: !this.state.maleChecked });
                }}
                checkedColor="#00977e"
              />
              <CheckBox
                size={20}
                containerStyle={styles.checkBoxContainerStyle}
                textStyle={{ fontSize: 12 }}
                title="Nữ"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={!this.state.femaleChecked}
                onPress={() => {
                  this.setState({ maleChecked: !this.state.maleChecked });
                  this.setState({ femaleChecked: !this.state.femaleChecked });
                }}
                checkedColor="#00977e"
              />
            </View>
          </View>
          <Button
            onPress={() => {
              this.props.navigation.navigate("AdditionalInfo");
            }}
            buttonStyle={styles.additionInfoButton}
            title="Thông tin bổ sung"
          />
        </View>
      </View>
    );
  }
}

export default TuVanNewScreen;
