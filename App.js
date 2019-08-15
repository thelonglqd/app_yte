import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./src/screens/Home/HomeScreen";
import ProfileStack from "./src/screens/Profile/ProfileStack";

import reducers from "./src/redux/reducers";

import NavigationService from "./NavigationService";
import AuthLoadingScreen from "./src/screens/AuthLoading/AuthLoadingScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileStack
  },
  {
    animationEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `heart${focused ? "" : "-o"}`;
        } else if (routeName === "Profile") {
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

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    TabNavigator
  })
);

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
