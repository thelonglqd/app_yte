import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";

const viewContainerStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  margin: 10
};

const lineStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
  marginTop: 40
};

const profileItems = [
  { name: "Lịch khám", type: "font-awesome", icon: "calendar-plus-o" },
  { name: "Cài đặt", type: "feather", icon: "settings" },
  { name: "Hỗ trợ", type: "font-awesome", icon: "support" },
  { name: "Báo lỗi", icon: "report" },
  { name: "Điều khoản sử dụng", icon: "format-list-bulleted" },
  { name: "Đăng xuất", type: "feather", icon: "log-out" }
];

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Tài Khoản"
  };

  render() {
    return (
      <View style={viewContainerStyle}>
        <View style={lineStyle}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 24 }}>Thịnh Phạm</Text>
            <Text
              style={{
                color: "#00977E"
              }}
            >
              Xem hồ sơ cá nhân
            </Text>
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
        {profileItems.map(i => {
          return (
            <View key={i.name} style={lineStyle}>
              <View style={{ alignSelf: "center" }}>
                <Text>{i.name}</Text>
              </View>
              <View>
                {i.type ? (
                  <Icon size={30} type={i.type} name={i.icon} color="#AEAEAE" />
                ) : (
                  <Icon size={30} name={i.icon} color="#AEAEAE" />
                )}
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default ProfileScreen;
