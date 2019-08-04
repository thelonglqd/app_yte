import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button, Icon, ButtonGroup } from "react-native-elements";

const g1_buttons = ["Tim mạch", "Mỡ máu"];
const g2_buttons = ["Tiểu đường", "HIV"];
const g3_buttons = ["Hô hấp", "Dạ dày"];
const g4_buttons = ["Xương khớp", "Thiếu chất"];

const TEXT_COLOR = "#aeaeae";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%"
  },
  backGroundSection: {
    backgroundColor: "#00977e",
    height: "30%"
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
    height: "95%",
    backgroundColor: "#fff",
    paddingLeft: 30,
    paddingTop: 10
  },
  selectButtonStyle: {
    width: "90%",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#aeaeae"
  },
  historySection: {
    marginTop: 10
  },
  selectedButtonStyle: {
    backgroundColor: "#00977e"
  },
  otherInfo: {
    marginTop: 10
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
  uploadContainer: {
    marginTop: 10
  }
});

class AdditionalInfoScreen extends React.Component {
  state = {
    selectedIndex_g1: -1,
    selectedIndex_g2: -1,
    selectedIndex_g3: -1,
    selectedIndex_g4: -1
  };

  static navigationOptions = {
    title: "Thông tin bổ sung"
  };

  updateIndex = (selectedIndex, group) => {
    if (group === 1) this.setState({ selectedIndex_g1: selectedIndex });
    if (group === 2) this.setState({ selectedIndex_g2: selectedIndex });
    if (group === 3) this.setState({ selectedIndex_g3: selectedIndex });
    if (group === 4) this.setState({ selectedIndex_g4: selectedIndex });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backGroundSection} />
        <View style={styles.inputSection}>
          <Text style={{ color: TEXT_COLOR }}>Chuyên khoa đang hỏi</Text>
          <Button
            titleStyle={{ color: "black" }}
            buttonStyle={styles.selectButtonStyle}
            title="Chọn chuyên khoa"
            icon={
              <Icon
                containerStyle={{ marginLeft: 30 }}
                type="font-awesome"
                name="caret-down"
                color="#00977e"
              />
            }
            iconRight
          />
          <View style={styles.historySection}>
            <Text style={{ color: TEXT_COLOR }}>Tiểu sử bệnh</Text>
            <View style={{ width: "90%" }}>
              <ButtonGroup
                onPress={selectedIndex => this.updateIndex(selectedIndex, 1)}
                selectedIndex={this.state.selectedIndex_g1}
                buttons={g1_buttons}
                selectedButtonStyle={styles.selectedButtonStyle}
              />
            </View>
            <View style={{ width: "90%" }}>
              <ButtonGroup
                onPress={selectedIndex => this.updateIndex(selectedIndex, 2)}
                selectedIndex={this.state.selectedIndex_g2}
                buttons={g2_buttons}
                selectedButtonStyle={styles.selectedButtonStyle}
              />
            </View>
            <View style={{ width: "90%" }}>
              <ButtonGroup
                onPress={selectedIndex => this.updateIndex(selectedIndex, 3)}
                selectedIndex={this.state.selectedIndex_g3}
                buttons={g3_buttons}
                selectedButtonStyle={styles.selectedButtonStyle}
              />
            </View>
            <View style={{ width: "90%" }}>
              <ButtonGroup
                onPress={selectedIndex => this.updateIndex(selectedIndex, 4)}
                selectedIndex={this.state.selectedIndex_g4}
                buttons={g4_buttons}
                selectedButtonStyle={styles.selectedButtonStyle}
              />
            </View>
          </View>
          <View style={styles.otherInfo}>
            <Text style={{ color: TEXT_COLOR }}>Thông tin khác</Text>
            <TextInput style={styles.textArea} multiline numberOfLines={8} />
          </View>
          <View style={styles.uploadContainer}>
            <Text style={{ color: TEXT_COLOR }}>Tải ảnh lên</Text>
            <Button
              containerStyle={{ width: "20%" }}
              buttonStyle={{ backgroundColor: "#00977e" }}
              icon={<Icon name="add" color="white" />}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default AdditionalInfoScreen;
