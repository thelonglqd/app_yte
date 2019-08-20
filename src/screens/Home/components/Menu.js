import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import { Button, Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
  PRIMARY_COLOR,
  BACKGROUND_CORLOR,
  FLEX_COMMON,
  SHADOW_BOX,
  HEADER_FONT,
  TEXT_FONT,
  FLEX_ROW
} from "../../../common/styles";
import EStyleSheet from "react-native-extended-stylesheet";

const buttonStyle = {
  height: 50,
  width: 50,
  borderRadius: 25,
  backgroundColor: "#def9f3"
};

const styles = EStyleSheet.create({
  itemAndTextContainer: {
    ...FLEX_COMMON,
    flexDirection: "column"
  },
  welComeTextContainer: {
    ...FLEX_COMMON,
    height: "40%"
  },
  welcomeText: {
    fontSize: HEADER_FONT
  },
  nameText: {
    fontSize: HEADER_FONT,
    color: "orange"
  },
  normalText: {
    fontSize: TEXT_FONT
  },
  cardContainer: {
    ...SHADOW_BOX,
    width: "90%",
    height: "30%",
    backgroundColor: "#fff",
    position: "absolute",
    left: "7%",
    top: "27%"
  },
  menuItemsContainer: {
    ...FLEX_ROW,
    justifyContent: "space-around"
  },
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 2 / 1,
    resizeMode: "stretch"
  },
  divider: {
    backgroundColor: BACKGROUND_CORLOR,
    width: "90%",
    marginTop: 10
  }
});

const menuItems = [
  {
    name: "Lấy Số",
    icon: { type: "material", name: "add-location" },
    navigateScreen: "LaySo"
  },
  {
    name: "Đặt Khám",
    icon: { type: "material-community", name: "stethoscope" },
    navigateScreen: "BookAppointment"
  },
  {
    name: "Tư Vấn",
    icon: { type: "material-community", name: "chat-processing" },
    navigateScreen: "TuVan"
  },
  {
    name: "Y Bạ",
    icon: { type: "ionicon", name: "md-paper" },
    navigateScreen: "YBa"
  }
];

class Menu extends React.Component {
  render() {
    return (
      <>
        <View backgroundColor="#fff" style={{ alignSelf: "flex-start" }}>
          <Image
            source={require("../../../../assets/menu-up-image.png")}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.welComeTextContainer}>
            <Text>
              <Text style={styles.welcomeText}>Xin chào, </Text>
              <Text style={styles.nameText}>{this.props.auth.displayName}</Text>
            </Text>
            <Divider style={styles.divider} />
          </View>
          <View style={styles.menuItemsContainer}>
            {menuItems.map(item => (
              <View key={item.name} style={styles.itemAndTextContainer}>
                <Button
                  buttonStyle={buttonStyle}
                  icon={{
                    type: item.icon.type,
                    name: item.icon.name,
                    color: PRIMARY_COLOR
                  }}
                  onPress={() => {
                    this.props.navigation.navigate(item.navigateScreen);
                  }}
                />
                <Text style={styles.normalText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withNavigation(Menu));
