import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Icon, Badge } from "react-native-elements";
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
  doctorDetailBtn: {},
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  }
});

class DoctorCard extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../../../../assets/doctor_default_avt.jpg")}
          />
        </View>
        <View style={styles.description}>
          <Text>{`${this.props.diploma} ${this.props.name}`}</Text>
          <Text>{this.props.address}</Text>
          <Text>Đặt lịch khám thứ 6 - 9/8</Text>
          <View style={styles.badgeContainer}>
            <Badge value="07:30" status="success" />
            <Badge value="08:30" status="error" />
            <Badge value="09:30" status="primary" />
            <Badge value="10:30" status="warning" />
          </View>
        </View>
        <View style={styles.doctorDetailBtn}>
          <Button
            onPress={() =>
              this.props.navigation.navigate("DoctorDetailScreen", {
                doctorId: this.props.doctorId
              })
            }
            type="clear"
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
