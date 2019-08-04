import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./src/screens/Home/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const TabNavigator = createBottomTabNavigator(
  {
    "Trang chủ": HomeScreen,
    "Tài khoản": ProfileScreen
  },
  {
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Trang chủ") {
          iconName = `heart${focused ? "" : "-o"}`;
        } else if (routeName === "Tài khoản") {
          iconName = `user`;
        }

        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      }
    }),
    resetOnBlur: true,
    tabBarOptions: {
      activeTintColor: "#00977E",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
