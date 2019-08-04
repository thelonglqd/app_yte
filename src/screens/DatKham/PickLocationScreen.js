import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Button, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 10,
    display: "flex"
  },
  searchLocationButton: {
    backgroundColor: "white",
    borderRadius: 0,
    borderTopWidth: 1,
    borderTopColor: "#aeaeae",
    borderBottomWidth: 1,
    borderBottomColor: "#aeaeae"
  },
  searchLocationButtonTitle: {
    color: "#00977e"
  },
  searchLocationButtonIcon: {
    marginTop: 5,
    marginLeft: 5,
    color: "#00977e"
  },
  searchInput: {
    height: 40,
    position: "relative",
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#aeaeae"
  },
  searchIcon: {
    position: "absolute",
    top: -33,
    left: -3,
    color: "#aeaeae"
  },
  resultContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

class PickLocationScreen extends React.Component {
  static navigationOptions = {
    title: "Địa điểm"
  };

  render() {
    return (
      <>
        <View style={styles.searchBox}>
          <Button
            textAlign="left"
            buttonStyle={styles.searchLocationButton}
            titleStyle={styles.searchLocationButtonTitle}
            title="Tìm kiếm gần tôi"
            icon={
              <Icon
                type="evilicon"
                iconStyle={styles.searchLocationButtonIcon}
                name="location"
                size={24}
              />
            }
          />
          <TextInput style={styles.searchInput} placeholder="Tìm kiếm" />
          <Icon
            size={36}
            iconStyle={styles.searchIcon}
            type="evilicon"
            name="search"
          />
        </View>
        <View style={styles.resultContainer}>
          <Text>Không có dữ liệu</Text>
        </View>
      </>
    );
  }
}

export default PickLocationScreen;
