import React from "react";
import { View, Text } from "react-native";
import Header from "./components/Header";
import { createStackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import AuthLoadingScreen from "../AuthLoading/AuthLoadingScreen";
import LaySoScreen from "../LaySoScreen";
import YBaScreen from "../YBaScreen";
import TuVanScreen from "../TuVanScreen";
import Menu from "./components/Menu";
import Promotion from "./components/Promotion";
import TuVanNewScreen from "../TuVanNewScreen";
import AdditionalInfoScreen from "../AdditionalInfoScreen";

import BookAppointment from "../AppointmentBooking/BookAppointment";
import BookByDoctor from "../AppointmentBooking/BookByDoctor";
import DoctorDetailScreen from "../AppointmentBooking/BookByDoctor/DoctorDetailScreen";
import BookByHospital from "../AppointmentBooking/BookByHospital";
import Booking from "../AppointmentBooking/Booking";
import BookByDepartment from "../AppointmentBooking/BookByDepartment";
import BookMultiDepartments from "../AppointmentBooking/BookMultiDepartments";

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
    const displayName = this.props.navigation.getParam("userDisplayName");

    return (
      <>
        <Text>{this.props.navigation.getParam("userDisplayName")}</Text>
        <Menu displayName={displayName} />
        {/* <Promotion /> */}
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
    BookAppointment,
    BookByDoctor,
    DoctorDetailScreen,
    Booking,
    BookByDepartment,
    BookByHospital,
    BookMultiDepartments,
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
  if (navigation.state.index > 5) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default HomeScreenStack;
