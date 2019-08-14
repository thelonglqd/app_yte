import { createStackNavigator } from "react-navigation";

import BookAppointment from "./BookAppointment";
import BookByDoctor from "./BookByDoctor";
import BookByHospital from "./BookByHospital";
import BookByDepartment from "./BookByDepartment";
import BookMultiDepartments from "./BookMultiDepartments";

const BookAppointmentStack = createStackNavigator(
  {
    BookAppointment,
    BookByDoctor,
    BookByHospital,
    BookByDepartment,
    BookMultiDepartments
  },
  {
    initialRouteName: "BookAppointment",
    headerMode: "none",
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

BookAppointmentStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 2) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};

export default BookAppointmentStack;
