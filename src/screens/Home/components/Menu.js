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
import { FLEX_COMMON, SHADOW_BOX } from "../../../common/styles";

const buttonStyle = {
  height: 50,
  width: 50,
  borderRadius: 25,
  backgroundColor: "#def9f3"
};

const styles = StyleSheet.create({
  itemAndTextContainer: {
    ...FLEX_COMMON,
    flexDirection: "column"
  }
});

class Menu extends React.Component {
  render() {
    return (
      <>
        <View backgroundColor="#fff" style={{ alignSelf: "flex-start" }}>
          <Image
            source={require("../../../../assets/menu-up-image.png")}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 2 / 1,
              resizeMode: "stretch"
            }}
          />
        </View>
        <View
          style={{
            ...SHADOW_BOX,
            width: "90%",
            height: "30%",
            backgroundColor: "#fff",
            position: "absolute",
            left: "7%",
            top: "27%"
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
            <View style={styles.itemAndTextContainer}>
              <Button
                buttonStyle={buttonStyle}
                icon={{ name: "add-location", color: "#00977e" }}
                onPress={() => {
                  this.props.navigation.navigate("LaySo");
                }}
              />
              <Text>Lấy Số</Text>
            </View>
            <View style={styles.itemAndTextContainer}>
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
            <View style={styles.itemAndTextContainer}>
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
            <View style={styles.itemAndTextContainer}>
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
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withNavigation(Menu));
