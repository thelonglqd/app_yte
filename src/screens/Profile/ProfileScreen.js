import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Button } from "react-native-elements";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

const styles = StyleSheet.create({
  viewContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  lineStyle: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginTop: 40
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center"
  }
});

const authenticatedItems = [
  { name: "Lịch khám", type: "font-awesome", icon: "calendar-plus-o" },
  { name: "Cài đặt", type: "feather", icon: "settings" },
  { name: "Hỗ trợ", type: "font-awesome", icon: "support" },
  { name: "Báo lỗi", icon: "report" },
  { name: "Điều khoản sử dụng", icon: "format-list-bulleted" },
  { name: "Đăng xuất", type: "feather", icon: "log-out" }
];
const unauthenticatedItems = [
  { name: "Cài đặt", type: "feather", icon: "settings" },
  { name: "Hỗ trợ", type: "font-awesome", icon: "support" },
  { name: "Báo lỗi", icon: "report" },
  { name: "Điều khoản sử dụng", icon: "format-list-bulleted" }
];

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Tài Khoản"
  };

  handleActions = name => {
    if (name === "Đăng xuất") this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const menuItems = isAuthenticated
      ? authenticatedItems
      : unauthenticatedItems;
    return (
      <View style={styles.viewContainerStyle}>
        <View style={styles.lineStyle}>
          {isAuthenticated ? (
            <View style={styles.lineStyle}>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ fontSize: 24 }}>
                  {this.props.auth.displayName}
                </Text>
                <Text style={{ color: "#00977E" }}>Xem hồ sơ cá nhân</Text>
              </View>
              <View style={{ postion: "relative" }}>
                <Icon color="#AEAEAE" size={60} name="account-circle" />
                <View style={{ position: "absolute", top: 40, left: 40 }}>
                  <Icon
                    color="#00977E"
                    size={20}
                    type="ionicon"
                    name="ios-add-circle"
                  />
                </View>
              </View>
            </View>
          ) : (
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}
                buttonStyle={{ backgroundColor: "#00977E" }}
                title="Đăng nhập/Đăng kí"
              />
            </View>
          )}
        </View>
        {menuItems.map(i => {
          return (
            <View key={i.name} style={styles.lineStyle}>
              <View style={{ alignSelf: "center" }}>
                <Text>{i.name}</Text>
              </View>
              <View>
                {i.type ? (
                  <Button
                    type="clear"
                    onPress={() => this.handleActions(i.name)}
                    icon={
                      <Icon
                        size={30}
                        type={i.type}
                        name={i.icon}
                        color="#AEAEAE"
                      />
                    }
                  />
                ) : (
                  <Button
                    type="clear"
                    onPress={() => this.handleActions(i.name)}
                    icon={<Icon size={30} name={i.icon} color="#AEAEAE" />}
                  />
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { logout }
)(ProfileScreen);
