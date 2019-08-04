import React from "react";
import { Text, View, Image } from "react-native";
import { ButtonGroup, SearchBar, Icon, Badge } from "react-native-elements";

const activatedHospital = [
  {
    id: 1,
    name: "Bệnh viện E Trung Ương",
    logoUrl: "../../assets/benhvien_e_logo.jpg",
    address:
      "Số 87 - 89 Trần Cung, Phường Nghĩa Tân, Quận Cầu Giấy, Thành Phố Hà Nội",
    availableOptions: ["Khám DV", "BHYT", "BHYT CA"]
  },
  {
    id: 2,
    name: "Bệnh viện E Trung Ương",
    logoUrl: "../../assets/benhvien_e_logo.jpg",
    address:
      "Số 87 - 89 Trần Cung, Phường Nghĩa Tân, Quận Cầu Giấy, Thành Phố Hà Nội",
    availableOptions: ["Khám DV", "BHYT", "BHYT CA"]
  }
];

class LaySoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      searchTerm: ""
    };
  }
  static navigationOptions = {
    title: "Chọn CSYT"
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  updateSearch = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const buttons = ["Lấy só mới", " Lịch sử lấy số"];
    return (
      <>
        <View>
          <ButtonGroup
            buttons={buttons}
            onPress={this.updateIndex}
            selectedIndex={this.state.selectedIndex}
            containerBorderRadius={10}
            selectedButtonStyle={{ backgroundColor: "#84e088" }}
          />
          <SearchBar
            lightTheme
            placeholder="Tìm kiếm ..."
            onChangeText={this.updateSearch}
            value={this.state.searchTerm}
            inputContainerStyle={{
              height: 30,
              minWidth: "100%",
              backgroundColor: "#fff"
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: "grey" }}>
            Bệnh viện đã triển khai
          </Text>
          {activatedHospital.map(hos => (
            <View
              key={hos.id}
              style={{
                display: "flex",
                flexDirection: "row",
                borderTopWidth: 1,
                borderColor: "#d9e0da",
                height: 100
              }}
            >
              <View style={{ width: "30%", alignSelf: "center" }}>
                <Image
                  style={{ width: 80, height: 80 }}
                  source={require("../../assets/benhvien_e_logo.jpg")}
                />
              </View>
              <View style={{ width: "70%", position: "relative" }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {hos.name}
                </Text>
                <Text style={{ fontSize: 14, color: "grey" }}>
                  {hos.address}
                </Text>
                <Icon
                  containerStyle={{
                    position: "absolute",
                    left: 190,
                    top: 1
                  }}
                  type="ionicon"
                  name="ios-checkmark-circle"
                  size={20}
                  color="green"
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10
                  }}
                >
                  {hos.availableOptions.map((opt, idx) => (
                    <Badge key={idx} value={opt} />
                  ))}
                </View>
                <View />
              </View>
            </View>
          ))}
        </View>
      </>
    );
  }
}

export default LaySoScreen;
