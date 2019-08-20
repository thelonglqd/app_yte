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
    // width: "15%",
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
  departMentNameText: {
    fontSize: HEADER_FONT,
    fontWeight: "800"
  },
  departMentDescriptionText: {
    fontSize: TEXT_FONT
  }
});

const departments = [
  {
    name: "Khoa hô hấp",
    logo: require("../../../assets/lung_logo.png"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Khoa thần kinh",
    logo: require("../../../assets/brain_logo.png"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Khoa tai mũi họng",
    logo: require("../../../assets/ear_logo.png"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  },
  {
    name: "Khoa tim mạch",
    logo: require("../../../assets/heart_logo.png"),
    description:
      "Khoa hô hấp còn được gọi là khoa lồng ngực ở 1 số vùng lãnh thổ. Khoa hô háp được coi là 1 ngành nội khoa"
  }
];

class BookByDepartment extends React.Component {
  static navigationOptions = {
    title: "Chuyên khoa",
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
        {departments.map(dep => (
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
                    backgroundColor: "#00977e",
                    width: "100%",
                    height: "100%"
                  }}
                  resizeMode="center"
                  source={dep.logo}
                />
              </View>
              <View style={styles.description}>
                <Text style={styles.departMentNameText}>{dep.name}</Text>
                <Text style={styles.departMentDescriptionText}>
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
                      size={32}
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

export default BookByDepartment;
