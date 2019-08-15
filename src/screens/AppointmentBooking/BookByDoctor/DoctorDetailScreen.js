import React from "react";
import { Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import { withNavigation } from "react-navigation";
import { Button, Badge, Divider } from "react-native-elements";

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
    width: "60%"
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  bookingTime: {
    marginLeft: 10,
    padding: 10,
    alignSelf: "center",
    height: "15%",
    width: "90%",
    backgroundColor: "#72eaea"
  },
  addressAndPrice: {
    marginLeft: 10,
    padding: 10,
    alignSelf: "center",
    height: "25%",
    width: "90%",
    backgroundColor: "#72eaea",
    marginTop: 20
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
        client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy",
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
      <View style={styles.container}>
        <View style={styles.doctorInfo}>
          <View style={styles.avatarContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../../assets/doctor_default_avt.jpg")}
            />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={{ fontSize: 18, fontWeight: "900" }}>{`${
              this.state.doctor.diploma_name
            }, ${this.state.doctor.name}`}</Text>
            <Text>Nguyên trưởng khoa xương khớp bệnh viện Bạch Mai</Text>
            <Text>Chủ tịch hội thấp khớp học Việt Nam</Text>
            <Text>Bác sĩ cho người bệnh từ 14 tuổi trở lên</Text>
            <Button
              containerStyle={{ marginTop: 10 }}
              type="outline"
              title="Gửi ý kiến sau khi khám"
            />
          </View>
        </View>
        <View style={styles.bookingTime}>
          <Text style={{ fontSize: 18, fontWeight: "900" }}>
            Đặt Lịch Khám Thứ 6 - 9/8
          </Text>
          <View style={styles.badgeContainer}>
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "07:30" })
              // }
              textStyle={{ fontSize: 18 }}
              value="07:30"
              status="success"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "08:30" })
              // }
              textStyle={{ fontSize: 18 }}
              value="08:30"
              status="error"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "09:30" })
              // }
              textStyle={{ fontSize: 18 }}
              value="09:30"
              status="primary"
            />
            <Badge
              // onPress={() =>
              //   this.props.navigation.navigate("Booking", { time: "10:30" })
              // }
              textStyle={{ fontSize: 18 }}
              value="10:30"
              status="warning"
            />
          </View>
        </View>
        <View style={styles.addressAndPrice}>
          <Text style={{ color: "#aeaeae", fontSize: 18, fontWeight: "900" }}>
            Địa chỉ
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "900" }}>
            Bệnh viện đa khoa Hồng Phát
          </Text>
          <Text style={{ color: "#aeaeae", fontSize: 18, fontWeight: "900" }}>
            Số 219 LÊ DUẨN - HAI BÀ TRƯNG - HÀ NỘI
          </Text>
          <Divider style={{ marginBottom: 10 }} />
          <Text style={{ fontSize: 18, fontWeight: "900", color: "#aeaeae" }}>
            Giá khám: <Text style={{ color: "black" }}>500.000 Đồng</Text>
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "900", color: "#aeaeae" }}>
            Thanh toán bởi BHYT:{" "}
            <Text style={{ color: "black" }}>230.000 Đồng</Text>
          </Text>
        </View>
      </View>
    ) : (
      <ActivityIndicator />
    );
  }
}

export default withNavigation(DoctorDetailScreen);
