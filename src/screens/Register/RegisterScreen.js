import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { NavigationEvents } from "react-navigation";
import { register, clearRegisterState } from "../../redux/actions";

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

class RegisterScreen extends React.Component {
  state = { email: null, name: null, phone: null, password: null };
  static navigationOptions = {
    title: "Đăng kí"
  };

  componentDidMount() {
    this.didBlurSubscription = this.props.navigation.addListener(
      "didBlur",
      payload => this.props.clearRegisterState()
    );
  }

  componentWillUnMount() {
    this.didBlurSubscription.remove();
  }

  handleTextChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
  };

  handleSubmit = () => {
    this.props.register(this.state);
  };

  handleTextFocus = () => {
    this.props.clearRegisterState();
  };

  render() {
    const { isError, message } = this.props.registerState;
    return (
      <>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => this.handleTextChange("email", text)}
            onFocus={this.handleTextFocus}
            value={this.state.email}
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            onChangeText={text => this.handleTextChange("name", text)}
            onFocus={this.handleTextFocus}
            value={this.state.name}
            placeholder="Tên tài khoản"
            style={styles.input}
          />
          <TextInput
            onChangeText={text => this.handleTextChange("phone", text)}
            onFocus={this.handleTextFocus}
            value={this.state.phone}
            placeholder="Số điện thoại"
            style={styles.input}
          />
          <TextInput
            onChangeText={text => this.handleTextChange("password", text)}
            onFocus={this.handleTextFocus}
            value={this.state.password}
            placeholder="Mật khẩu"
            secureTextEntry
            style={styles.input}
          />
          <View>
            <Button onPress={this.handleSubmit} title="Đăng kí" />
          </View>
          {message ? (
            isError ? (
              <Text style={{ color: "red" }}>{message}</Text>
            ) : (
              <Text style={{ color: "green" }}>{message}</Text>
            )
          ) : null}
        </View>
      </>
    );
  }
}

const mapStateToProps = ({ registerState }) => ({
  registerState
});

export default connect(
  mapStateToProps,
  { register, clearRegisterState }
)(RegisterScreen);
