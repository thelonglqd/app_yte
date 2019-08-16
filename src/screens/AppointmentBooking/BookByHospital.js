import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "#aeaeae",
    borderRadius: 10
  },
  cardItemsContainer: {
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  description: {
    width: "50%"
  },
  doctorDetailBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  searchBoxContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  searchBox: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 20,
    height: 40,
    width: "70%",
    padding: 10
  },
  searchBtnContainer: {
    position: "absolute",
    top: 17,
    right: 60
  }
});

const hospitals = [
  {
    name: "Bệnh viện Bạch Mai",
    logo: require("../../../assets/benhvien_default.jpg"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Bệnh viện Việt Đức",
    logo: require("../../../assets/benhvien_default.jpg"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Bệnh viện Việt Pháp",
    logo: require("../../../assets/benhvien_default.jpg"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Bệnh viện 108",
    logo: require("../../../assets/benhvien_default.jpg"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  }
];

class BookByHospital extends React.Component {
  static navigationOptions = {
    title: "Bệnh viện",
    tabBarVisible: false
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.searchBoxContainer}>
          <TextInput placeholder="Tìm kiếm" style={styles.searchBox} />
        </View>
        <Button
          containerStyle={styles.searchBtnContainer}
          type="clear"
          icon={<Icon color="#aeaeae" size={30} name="search" />}
        />
        {hospitals.map(dep => (
          <Card key={dep.name} containerStyle={styles.cardContainer}>
            <View style={styles.cardItemsContainer}>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  width: "30%",
                  height: "100%"
                }}
              >
                <Image
                  style={{
                    borderRadius: 10,
                    width: "100%",
                    height: "100%"
                  }}
                  resizeMode="center"
                  source={dep.logo}
                />
              </View>
              <View style={styles.description}>
                <Text style={{ fontSize: 18, fontWeight: "900" }}>
                  {dep.name}
                </Text>
                <Text>{dep.description}</Text>
              </View>
              <View style={styles.doctorDetailBtn}>
                <Button
                  type="clear"
                  onPress={() =>
                    this.props.navigation.navigate("BookByDoctor", {
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
        ))}
      </ScrollView>
    );
  }
}

export default BookByHospital;
