import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Card, Button, Divider, Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
  SHADOW_BOX,
  FLEX_COMMON,
  PRIMARY_COLOR,
  TEXT_FONT
} from "../../../common/styles";

const styles = StyleSheet.create({
  imageStyles: {
    width: "100%",
    height: undefined,
    aspectRatio: 2 / 1,
    resizeMode: "stretch"
  },
  cardContainer: {
    ...SHADOW_BOX,
    zIndex: 10,
    backgroundColor: "#fff",
    top: "100%",
    width: "90%",
    left: "2%",
    aspectRatio: 2 / 1
  },
  displayName: {
    color: "orange"
  },
  itemsContainer: {
    ...FLEX_COMMON,
    justifyContent: "space-around"
  },
  buttonAndTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textContainer: {
    height: "30%"
  }
});

const items = [
  {
    name: "Lấy số",
    icon: { type: "evilicon", name: "location" },
    navigateScreen: "LaySo"
  },
  {
    name: "Đặt khám",
    icon: { type: "material-community", name: "stethoscope" },
    navigateScreen: "BookAppointment"
  },
  {
    name: "Tư vấn",
    icon: { type: "material-community", name: "chat-processing" },
    navigateScreen: "TuVan"
  },
  {
    name: "Y Bạ",
    icon: { type: "ionicon", name: "md-paper" },
    navigateScreen: "YBa"
  }
];

const buttonStyle = {
  height: 50,
  width: 50,
  borderRadius: 25,
  backgroundColor: "#def9f3"
};

class Menu extends React.Component {
  render() {
    return (
      <>
        <ImageBackground
          source={require("../../../../assets/menu-up-image.png")}
          style={styles.imageStyles}
        >
          <Card containerStyle={styles.cardContainer} title="Xin chào">
            <View style={styles.itemsContainer}>
              {items.map(item => (
                <View key={item.name} style={styles.buttonAndTextContainer}>
                  {/* <Button
                    onPress={() =>
                      this.props.navigation.navigate(item.navigateScreen)
                    }
                    buttonStyle={buttonStyle}
                    icon={{
                      type: item.icon.type,
                      name: item.icon.name,
                      color: PRIMARY_COLOR
                    }}
                  /> */}
                  <Button
                    icon={<Icon name="code" color="#ffffff" />}
                    backgroundColor="#03A9F4"
                    buttonStyle={{
                      borderRadius: 0,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0
                    }}
                    title="VIEW NOW"
                  />
                  <Text style={{ fontSize: TEXT_FONT }}>{item.name}</Text>
                </View>
              ))}
            </View>
          </Card>
        </ImageBackground>
        {/* <Card style={styles.menuContainer}>
          <View
            style={{
              ...SHADOW_BOX,
              width: "90%",
              height: "30%",
              backgroundColor: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0
              // left: Dimensions.get("window").width * 0.05,
              // top: Dimensions.get("window").height * 0.3
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "40%"
              }}
            >
              <Text>
                <Text style={{ fontSize: 20 }}>Xin chào, </Text>
                <Text style={{ fontSize: 20, color: "orange" }}>
                  {this.props.auth.displayName}
                </Text>
              </Text>
              <Divider
                style={{
                  backgroundColor: "#aeaeae",
                  width: "90%",
                  marginTop: 10
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <View>
                <Button
                  buttonStyle={buttonStyle}
                  icon={{ name: "add-location", color: "#00977e" }}
                  onPress={() => {
                    this.props.navigation.navigate("LaySo");
                  }}
                />
                <Text>Lấy Số</Text>
              </View>
              <View>
                <Button
                  buttonStyle={buttonStyle}
                  icon={{
                    name: "stethoscope",
                    type: "material-community",
                    color: "#00977e"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("BookAppointment");
                  }}
                />
                <Text>Đặt Khám</Text>
              </View>
              <View>
                <Button
                  buttonStyle={buttonStyle}
                  icon={{
                    name: "chat-processing",
                    type: "material-community",
                    color: "#00977e"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("TuVan");
                  }}
                />
                <Text>Tư Vấn</Text>
              </View>
              <View>
                <Button
                  buttonStyle={buttonStyle}
                  icon={{
                    name: "md-paper",
                    type: "ionicon",
                    color: "#00977e"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate("YBa");
                  }}
                />
                <Text>Y Bạ</Text>
              </View>
            </View>
          </View>
        </View> */}
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withNavigation(Menu));
