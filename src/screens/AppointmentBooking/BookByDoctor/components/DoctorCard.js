import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Icon, Badge, Card } from "react-native-elements";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 10,
    width: "90%",
    height: "50%",
    marginTop: 20,
    paddingRight: 10
  },
  avatarContainer: {
    height: "90%",
    width: "30%"
  },
  doctorDetailBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  badgeContainer: {
    height: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  description: {
    width: "55%"
  },
  user: {
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  }
});

class DoctorCard extends React.Component {
  render() {
    return (
      <Card containerStyle={{ borderColor: "#aeaeae", borderRadius: 10 }}>
        <View style={styles.user}>
          <View style={{ width: "30%", height: "100%" }}>
            <Image
              style={{ borderRadius: 10, width: "100%", height: "100%" }}
              resizeMode="center"
              source={{
                uri:
                  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              }}
            />
          </View>
          <View style={styles.description}>
            <Text>{`${this.props.diploma} ${this.props.name}`}</Text>
            <Text>{this.props.address}</Text>
            <Text>Đặt lịch khám thứ 6 - 9/8</Text>
            <View style={styles.badgeContainer}>
              <Badge
                textStyle={{ fontSize: 16 }}
                value="07:30"
                status="success"
              />
              <Badge
                textStyle={{ fontSize: 16 }}
                value="08:30"
                status="error"
              />
              <Badge
                textStyle={{ fontSize: 16 }}
                value="09:30"
                status="primary"
              />
              <Badge
                textStyle={{ fontSize: 16 }}
                value="10:30"
                status="warning"
              />
            </View>
          </View>
          <View style={styles.doctorDetailBtn}>
            <Button
              type="clear"
              onPress={() =>
                this.props.navigation.navigate("DoctorDetailScreen", {
                  doctorId: this.props.doctorId
                })
              }
              icon={
                <Icon
                  size={48}
                  color="#00977e"
                  type="ionicon"
                  name="ios-arrow-forward"
                />
              }
            />
          </View>
        </View>
      </Card>
    );
  }
}

export default withNavigation(DoctorCard);
