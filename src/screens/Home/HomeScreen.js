import React from "react";
import { View } from "react-native";
import Header from "./components/Header";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import LaySoScreen from "../LaySoScreen";
import YBaScreen from "../YBaScreen";
import TuVanScreen from "../TuVanScreen";
import DatKhamScreen from "../DatKham/DatKhamScreen";
import Menu from "./components/Menu";
import Promotion from "./components/Promotion";
import PickLocationScreen from "../DatKham/PickLocationScreen";
import RequestScreen from "../DatKham/RequestScreen";
import ServiceScreen from "../DatKham/ServiceScreen";
import TuVanNewScreen from "../TuVanNewScreen";
import AdditionalInfoScreen from "../AdditionalInfoScreen";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Trang chủ",
    headerTitle: <Header />,
    headerRight: (
      <View style={{ marginRight: 15 }}>
        <Ionicons name="ios-notifications-outline" size={32} color="#00977e" />
      </View>
    ),
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerBackTitleStyle: { color: "black" }
  };

  render() {
    return (
      <>
        <Menu />
        <Promotion />
      </>
    );
  }
}

const HomeScreenStack = createStackNavigator(
  {
    Home: HomeScreen,
    LaySo: LaySoScreen,
    YBa: YBaScreen,
    TuVan: TuVanScreen,
    DatKham: DatKhamScreen,
    PickRequest: RequestScreen,
    PickLocation: PickLocationScreen,
    PickService: ServiceScreen,
    TuVan: TuVanScreen,
    TuVanNew: TuVanNewScreen,
    AdditionalInfo: AdditionalInfoScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "screen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00977e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

HomeScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default HomeScreenStack;
