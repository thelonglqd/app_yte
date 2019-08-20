import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { PRIMARY_COLOR, BACKGROUND_CORLOR } from "../../../../common/styles";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "space-between",
    position: "absolute",
    width: "90%",
    height: "40%",
    left: "5%",
    top: "60%"
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.3,
    borderWidth: 1,
    borderColor: BACKGROUND_CORLOR,
    borderRadius: 15,
    marginBottom: "5%",
    backgroundColor: "white"
  }
});

const items = [
  {
    name: "Tìm bác sĩ",
    routeName: "BookByDoctor",
    icon: { type: "material-community", name: "doctor" }
  },
  {
    name: "Tìm bệnh viện",
    routeName: "BookByHospital",
    icon: {
      color: "#00977e",
      type: "material-community",
      name: "hospital-building"
    }
  },
  {
    name: "Chọn chuyên khoa",
    routeName: "BookByDepartment",
    icon: { type: "font-awesome", name: "heartbeat" }
  },
  {
    name: "Gọi khám tổ hợp",
    routeName: "BookMultiDepartments",
    icon: { type: "material-community", name: "ambulance" }
  }
];

class MenuItems extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {items.map(i => (
          <View style={styles.itemContainer} key={i.name}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate(`${i.routeName}`)}
            >
              <Icon
                size={80}
                color={PRIMARY_COLOR}
                type={i.icon.type}
                name={i.icon.name}
              />
              <Text style={{ alignSelf: "center" }}>{i.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

export default withNavigation(MenuItems);
