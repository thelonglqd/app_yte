import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button, Icon } from "react-native-elements";
import { login } from "../../redux/actions";
import { connect } from "react-redux";

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 5,
    width: "90%",
    minHeight: "40%",
    backgroundColor: "#fff",
    position: "absolute",
    left: 20,
    top: 170
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "#18bf21",
    marginBottom: 10
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonTitleStyle: {
    fontSize: 14,
    color: "#18bf21"
  },
  socialButtonContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row"
  }
});

class LoginScreen extends React.Component {
  state = { username: null, password: null };
  static navigationOptions = {
    title: "Đăng nhập/Đăng kí"
  };

  handleTextChange = (value, field) => {
    this.setState({ ...this.state, [field]: value });
  };

  handleSubmit = () => {
    this.props.login(this.state);
  };

  render() {
    const { isError, message } = this.props.loginState;
    return (
      <View style={styles.inputContainer}>
        <View style={styles.socialButtonContainer}>
          <Button
            containerStyle={{ width: "40%" }}
            type="clear"
            title="Facebook Login"
            titleStyle={{ marginLeft: 5, fontSize: 14, color: "#3b5998" }}
            icon={
              <Icon
                type="font-awesome"
                name="facebook-square"
                size={30}
                color="#3b5998"
              />
            }
          />
          <Button
            containerStyle={{ width: "40%" }}
            type="clear"
            title="Google Login"
            titleStyle={{ marginLeft: 5, fontSize: 14, color: "#ea4335" }}
            icon={
              <Icon
                type="font-awesome"
                name="google"
                size={30}
                color="#ea4335"
              />
            }
          />
        </View>
        <TextInput
          onChangeText={text => this.handleTextChange(text, "username")}
          value={this.state.username}
          placeholder="Tên đăng nhập"
          style={styles.input}
        />
        <TextInput
          onChangeText={text => this.handleTextChange(text, "password")}
          value={this.state.password}
          placeholder="Mật khẩu"
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <Button
            containerStyle={{ width: "40%" }}
            titleStyle={styles.buttonTitleStyle}
            title="Quên mật khẩu ?"
            type="clear"
          />
          <Button
            containerStyle={{ width: "40%" }}
            type="clear"
            titleStyle={styles.buttonTitleStyle}
            title="Đăng kí"
            icon={
              <Icon
                type="feather"
                name="arrow-right"
                size={15}
                color="#18bf21"
              />
            }
            iconRight
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          />
        </View>
        <View>
          <Button onPress={this.handleSubmit} title="Đăng nhập" />
        </View>
        {message ? (
          isError ? (
            <Text style={{ color: "red" }}>{message}</Text>
          ) : (
            <Text style={{ color: "green" }}>{message}</Text>
          )
        ) : null}
        <View />
      </View>
    );
  }
}

const mapStateToProp = ({ loginState }) => ({ loginState });

export default connect(
  mapStateToProp,
  { login }
)(LoginScreen);
