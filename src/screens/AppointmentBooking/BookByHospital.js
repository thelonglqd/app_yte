import React from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";
import { Icon, Card, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import EStyleSheet from "react-native-extended-stylesheet";
import { HEADER_FONT, TEXT_FONT } from "../../common/styles";

const styles = EStyleSheet.create({
  cardContainer: {
    borderColor: "#aeaeae",
    borderRadius: 10
  },
  cardItemsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    aspectRatio: 3 / 1
  },
  description: {
    width: "50%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column"
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
  },
  hospitalNameText: {
    fontSize: HEADER_FONT,
    fontWeight: "800"
  },
  hospitalDescriptionText: {
    fontSize: TEXT_FONT
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
                <Text style={styles.hospitalNameText}>{dep.name}</Text>
                <Text style={styles.hospitalDescriptionText}>
                  {dep.description}
                </Text>
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
