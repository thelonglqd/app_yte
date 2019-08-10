import { createStackNavigator } from "react-navigation";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "../Login/LoginScreen";
import RegisterScreen from "../Register/RegisterScreen";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Profile",
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

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default ProfileStack;
