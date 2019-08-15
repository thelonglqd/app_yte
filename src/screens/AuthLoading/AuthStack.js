import { createStackNavigator } from "react-navigation";
import AuthLoadingScreen from "./AuthLoadingScreen";

const AuthStack = createStackNavigator(
  {
    AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoadingScreen",
    headerMode: "none"
  }
);

AuthStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default AuthStack;
