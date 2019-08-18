import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { Card, Button, Icon, Badge } from "react-native-elements";

import Indicator from "../../../common/components/Indicator";
import apis from "../../../apis";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: 20,
    paddingRight: 15
  },
  avatarContainer: {
    height: "50%",
    width: "40%"
  },
  doctorInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "40%",
    padding: 10
  },
  descriptionContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    width: "70%"
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 10
  },
  bookingTime: {
    borderRadius: 10,
    marginTop: "5%",
    height: "30%",
    width: "100%",
    backgroundColor: "#72eaea"
  },
  imageAndDesContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start"
  }
});

class DoctorDetailScreen extends React.Component {
  state = { doctor: null };
  static navigationOptions = {
    title: "Thông tin chi tiết bác sĩ"
  };

  componentDidMount() {
    apis
      .post("/login/gmail", {
        client_id: 4,
        // client_id: 5,
        client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy",
        // client_secret: "78Rdiw9cExVMvJU0seHBSVG0QB0KJCQTQvW7uzW7",
        username: "thelonglqd@gmail.com",
        password: "1234567890"
      })
      .then(response => {
        apis
          .get(`/doctor`, {
            headers: {
              Authorization: "Bearer " + response.data.data.access_token
            }
          })
          .then(response => {
            this.setState({ doctor: response.data.data[0] });
          });
      })
      .catch(error => console.log(error.response));
  }

  render() {
    return this.state.doctor ? (
      <ScrollView>
        <Card
          containerStyle={{
            // width: "90%",
            // aspectRatio: 2 / 1,
            borderColor: "#aeaeae",
            borderRadius: 10
          }}
        >
          <View style={styles.imageAndDesContainer}>
            <View style={{ width: "30%", height: "100%" }}>
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
            <View style={styles.descriptionContainer}>
              <Text style={{ fontSize: 16, fontWeight: "900" }}>{`${
                this.state.doctor.diploma_name
              } ${this.state.doctor.name}`}</Text>
              <Text style={{ fontSize: 14 }}>
                Nguyên trưởng khoa cơ xướng khớp, bệnh viện Bạch Mai
              </Text>
              <Text style={{ fontSize: 14 }}>
                Chủ tịch hội thấp khớp học Việt Nam
              </Text>
              <Text style={{ fontSize: 14 }}>
                Bác sĩ khám cho người bệnh từ 14 tuổi trở lên
              </Text>
              <Button
                buttonStyle={{ borderRadius: 10 }}
                containerStyle={{ marginTop: "3%", width: "95%" }}
                type="outline"
                titleStyle={{ fontSize: 14 }}
                title="Gửi ý kiến sau khi khám"
              />
            </View>
            {/* </Card> */}
          </View>
        </Card>
        <Card
          containerStyle={{
            borderWidth: 1,
            borderColor: "#aeaeae",
            borderRadius: 10,
            backgroundColor: "#ccf9f9"
          }}
          title="Đặt Lịch Khám Thứ 6 - 9/8"
        >
          <View style={styles.badgeContainer}>
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "07:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="07:30"
              status="success"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "08:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="08:30"
              status="error"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "09:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="09:30"
              status="primary"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              containerStyle={{ marginRight: 5 }}
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
          </View>
        </Card>
        <Card
          title="Địa chỉ"
          containerStyle={{
            borderWidth: 1,
            borderColor: "#aeaeae",
            borderRadius: 10,
            backgroundColor: "#ccf9f9"
          }}
        >
          <View style={styles.addressAndPrice}>
            <Text style={{ fontSize: 18, fontWeight: "900" }}>
              Bệnh viện đa khoa Hồng Phát
            </Text>
            <Text style={{ color: "#aeaeae", fontSize: 14 }}>
              Số 219 LÊ DUẨN - HAI BÀ TRƯNG - HÀ NỘI
            </Text>
          </View>
        </Card>
        <Card
          title="Thanh toán"
          containerStyle={{
            borderWidth: 1,
            borderColor: "#aeaeae",
            borderRadius: 10,
            backgroundColor: "#ccf9f9"
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "900", color: "#aeaeae" }}>
            Giá khám: <Text style={{ color: "black" }}>500.000 Đồng</Text>
            <Text style={{ color: "blue", textDecorationLine: "underline" }}>
              (Xem chi tiết)
            </Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: "#aeaeae" }}>
            Thanh toán bởi BHYT:{" "}
            <Text style={{ color: "black" }}>230.000 Đồng</Text>
          </Text>
        </Card>
      </ScrollView>
    ) : (
      <Indicator />
    );
  }
}

export default withNavigation(DoctorDetailScreen);
