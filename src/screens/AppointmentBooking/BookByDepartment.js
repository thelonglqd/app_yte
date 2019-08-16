import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Icon, Card, Button } from "react-native-elements";

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
    {
      return departments.map(dep => (
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
      ));
    }
  }
}

export default BookByDepartment;
