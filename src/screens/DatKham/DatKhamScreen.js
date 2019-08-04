import React from "react";
import { Text, View, StyleSheet, Picker } from "react-native";
import { Icon, ButtonGroup, Input, Button } from "react-native-elements";

const SELECT_TEXT_CORLOR = "#AEAEAE";
const contactButtons = ["Điện thoại", "SMS"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  itemInList: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    marginTop: 5
  },
  avatarAndNameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  accountIconColor: { color: SELECT_TEXT_CORLOR },
  accountName: { fontSize: 14 },
  iconAndNameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  horizontalLine: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: SELECT_TEXT_CORLOR,
    width: "70%",
    alignSelf: "center",
    borderBottomWidth: 2
  },
  contactContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  bookButtonContainerStyle: {
    width: "50%",
    alignSelf: "center"
  }
});

const items = [
  { name: "Địa điểm", type: "font-awesome", icon: "location-arrow" },
  { name: "Yêu cầu", type: "font-awesome", icon: "stethoscope" },
  { name: "Dịch vụ", type: "font-awesome", icon: "medkit" },
  { name: "Ngày khám", type: "font-awesome", icon: "calendar-plus-o" },
  { name: "Giờ khám", type: "ionicon", icon: "md-time" }
];

class DatKhamScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 2
    };
  }

  static navigationOptions = {
    title: "Đặt Khám",
    tabBarVisible: false
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  goToPage = name => {
    switch (name) {
      case "Yêu cầu":
        this.props.navigation.navigate("PickRequest");
        return;
      case "Địa điểm":
        this.props.navigation.navigate("PickLocation");
        return;
      case "Dịch vụ":
        this.props.navigation.navigate("PickService");
        return;
      default:
        return;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemInList}>
          <View style={styles.avatarAndNameContainer}>
            <Icon
              color={styles.accountIconColor.color}
              size={40}
              name="account-circle"
            />
            <Text style={styles.accountName}>Thịnh Phạm</Text>
          </View>
          <View>
            <Icon
              color={SELECT_TEXT_CORLOR}
              type="ionicon"
              name="ios-arrow-forward"
              size={32}
            />
          </View>
        </View>
        {items.map(i => {
          return (
            <View key={i.name} style={styles.itemInList}>
              <View style={styles.iconAndNameContainer}>
                {i.type ? (
                  <Icon size={30} type={i.type} name={i.icon} color="#00977e" />
                ) : (
                  <Icon size={30} name={i.icon} color="#00977e" />
                )}
                <Text style={{ marginLeft: 10 }}>{i.name}</Text>
              </View>
              <Button
                onPress={() => this.goToPage(i.name)}
                titleStyle={{ color: SELECT_TEXT_CORLOR }}
                type="clear"
                title="Chọn"
                icon={
                  <Icon
                    iconStyle={{ marginTop: 5, marginLeft: 5 }}
                    name="keyboard-arrow-right"
                    size={24}
                    color={SELECT_TEXT_CORLOR}
                  />
                }
                iconRight
              />
            </View>
          );
        })}
        <View style={{ marginTop: 10, alignSelf: "center" }}>
          <Text style={{ color: SELECT_TEXT_CORLOR }}>
            Gợi ý: Chọn những giờ màu xanh sẽ giúp bạn được phục vụ nhanh hơn
          </Text>
        </View>
        <View style={styles.horizontalLine} />
        <View>
          <Text style={{ alignSelf: "center" }}>Liên lạc với tôi qua</Text>
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            onPress={this.updateIndex}
            buttons={contactButtons}
            selectedButtonStyle={{ backgroundColor: "#84e088" }}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <Input
            rightIcon={{ type: "feather", name: "camera" }}
            placeholder="Mô tả triệu chứng"
            size={18}
          />
          <Text
            style={{
              color: SELECT_TEXT_CORLOR,
              alignSelf: "center",
              marginTop: 5
            }}
          >
            Mô tả triệu chứng sẽ giúp bạn được phục vụ tốt hơn
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Button
            containerStyle={styles.bookButtonContainerStyle}
            title="Đặt Khám"
            disabled
          />
        </View>
      </View>
    );
  }
}

export default DatKhamScreen;
