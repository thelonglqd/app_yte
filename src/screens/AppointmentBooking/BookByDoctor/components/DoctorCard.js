import React from "react";
import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import { Button, Icon, Badge, Card } from "react-native-elements";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  // cardContainer: {
  //   display: "flex",
  //   alignSelf: "center",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   flexWrap: "nowrap",
  //   borderWidth: 1,
  //   borderColor: "#aeaeae",
  //   borderRadius: 10,
  //   width: "90%",
  //   height: "50%",
  //   marginTop: 20,
  //   paddingRight: 10
  // },
  avatarContainer: {
    height: "90%",
    width: "30%"
  },
  doctorDetailBtn: {
    display: "flex",
    width: "10%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  badgeContainer: {
    height: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  descriptionAndTime: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "60%",
    paddingLeft: "2%"
  },
  description: {
    alignSelf: "flex-start",
    height: "75%"
  },
  cardItemsContainer: {
    display: "flex",
    flexDirection: "row"
  },
  cardContainer: {
    paddingTop: "2%",
    paddingLeft: "2%",
    marginTop: "2%",
    width: "90%",
    aspectRatio: 3 / 1,
    borderRadius: 10,
    borderColor: "#aeaeae",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  diplomaText: {
    fontSize: 16,
    fontWeight: "900"
  },
  addressText: {
    fontSize: 14
  }
});

class DoctorCard extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View
          style={{
            width: Dimensions.get("window").width * 0.3,
            flex: 1,
            borderRadius: 10
          }}
        >
          <Image
            style={{
              borderRadius: 10,
              width: "100%",
              height: undefined,
              aspectRatio: 1
            }}
            resizeMode="center"
            source={{
              uri:
                "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            }}
          />
        </View>
        <View style={styles.descriptionAndTime}>
          <View style={styles.description}>
            <Text style={styles.diplomaText}>{`${this.props.diploma} ${
              this.props.name
            }`}</Text>
            <Text style={styles.addressText}>{this.props.address}</Text>
          </View>
          <View>
            <Text>Đặt lịch khám thứ 6 - 9/8</Text>
            <View style={styles.badgeContainer}>
              <Badge
                textStyle={{ fontSize: 14 }}
                value="07:30"
                status="success"
              />
              <Badge
                textStyle={{ fontSize: 14 }}
                value="08:30"
                status="error"
              />
              <Badge
                textStyle={{ fontSize: 14 }}
                value="09:30"
                status="primary"
              />
              <Badge
                textStyle={{ fontSize: 14 }}
                value="10:30"
                status="warning"
              />
            </View>
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
    );
  }
}

export default withNavigation(DoctorCard);
