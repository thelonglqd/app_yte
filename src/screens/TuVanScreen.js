import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, ButtonGroup, Button } from "react-native-elements";

const historyButtons = ["Đã trả lời", "Chưa trả lời"];

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class TuVanScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  handleNavigateTuVanNew = () => {
    this.props.navigation.navigate("TuVanNew");
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Tư Vấn online",
      headerRight: (
        <Button
          buttonStyle={{ marginRight: 15, backgroundColor: "#00977e" }}
          icon={
            <Icon
              onPress={() => navigation.navigate("TuVanNew")}
              size={30}
              type="ionicon"
              name="ios-add-circle-outline"
              color="#fff"
            />
          }
        />
      )
    };
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <>
        <View>
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            onPress={this.updateIndex}
            buttons={historyButtons}
            selectedButtonStyle={{ backgroundColor: "#84e088" }}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text>Hiện tại chưa có thông tin</Text>
        </View>
      </>
    );
  }
}

export default TuVanScreen;
