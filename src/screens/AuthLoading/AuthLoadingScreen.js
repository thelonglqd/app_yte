import React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as SecureStore from "expo-secure-store";
import Indicator from "../../common/components/Indicator";
import { login_success, login_failed } from "../../redux/actions";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  loadUserAccessToken() {
    return AsyncStorage.getItem("access_token");
  }

  loadUserDisplayName() {
    return AsyncStorage.getItem("user_display_name");
  }

  loadRefreshToken() {
    return SecureStore.getItemAsync("refresh_token");
  }

  _bootstrapAsync = async () => {
    const response = await Promise.all([
      this.loadUserAccessToken(),
      this.loadUserDisplayName(),
      this.loadRefreshToken()
    ]);

    const access_token = response[0];
    const refresh_token = response[2];

    access_token && refresh_token
      ? this.props.login_success({
          data: { access_token, name: response[1] }
        })
      : this.props.login_failed();
  };

  render() {
    return <Indicator />;
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { login_success, login_failed }
)(AuthLoadingScreen);
