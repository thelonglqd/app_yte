import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Button, Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";

const buttonStyle = {
  height: 50,
  width: 50,
  borderRadius: 25,
  backgroundColor: "#def9f3"
};

class Menu extends React.Component {
  componentDidUpdate() {
    console.log("menu componentDidUpdate this.props.auth: ", this.props.auth);
  }

  render() {
    return (
      <>
        <View backgroundColor="#fff">
          <Image
            source={require("../../../../assets/menu-up-image.png")}
            style={{
              minWidth: "100%",
              height: "60%"
            }}
          />
        </View>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            borderRadius: 5,
            width: "90%",
            height: "30%",
            backgroundColor: "#fff",
            position: "absolute",
            left: 20,
            top: 170
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
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(withNavigation(Menu));
