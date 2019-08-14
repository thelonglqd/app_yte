import React from "react";
import { Text, TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import apis from "../../apis";

import { login_success } from "../../redux/actions";

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
    width: "90%",
    minHeight: "40%",
    backgroundColor: "#fff",
    position: "absolute",
    left: 20,
    top: 20
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#aeaeae",
    marginTop: 10,
    padding: 10
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
  },
  errorText: {
    color: "#ea4335"
  },
  serverResponseContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be more than 6 characters")
    .max(255, "Too Long!")
    .required("Password is required")
});

class LoginScreen extends React.Component {
  state = { email: null, name: null, phone: null, password: null };
  static navigationOptions = {
    title: "Đăng nhập"
  };

  render() {
    return (
      <>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.inputContainer}
        >
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values, actions) => {
              apis
                .post("/login/gmail", {
                  ...values,
                  client_id: 4,
                  client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy"
                })
                .then(response => {
                  this.props.login_success(response.data);
                  let resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({
                        routeName: "Profile"
                      })
                    ]
                  });
                  this.props.navigation.dispatch(resetAction);
                  this.props.navigation.navigate("Home");
                })
                .catch(error => {
                  actions.setFieldError(
                    "serverError",
                    error.response.data.message
                  );
                })
                .finally(() => {
                  actions.setSubmitting(false);
                });
            }}
            validationSchema={LoginSchema}
          >
            {formProps => (
              <View>
                <View style={styles.serverResponseContainer}>
                  <Text style={styles.errorText}>
                    {formProps.errors.serverError}
                  </Text>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={formProps.handleChange("username")}
                  onBlur={formProps.handleBlur("username")}
                  value={formProps.values.username}
                />
                {formProps.errors.username && formProps.touched.username ? (
                  <Text style={styles.errorText}>
                    {formProps.errors.username}
                  </Text>
                ) : null}
                <TextInput
                  secureTextEntry
                  style={styles.input}
                  placeholder="Mật khẩu"
                  onChangeText={formProps.handleChange("password")}
                  onBlur={formProps.handleBlur("password")}
                  value={formProps.values.password}
                />
                {formProps.errors.password && formProps.touched.password ? (
                  <Text style={styles.errorText}>
                    {formProps.errors.password}
                  </Text>
                ) : null}
                <Button
                  containerStyle={{ marginTop: 10 }}
                  buttonStyle={{ backgroundColor: "#00977e" }}
                  onPress={formProps.handleSubmit}
                  title="Đăng nhập"
                />
              </View>
            )}
          </Formik>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = ({ registerState }) => ({
  registerState
});

export default connect(
  mapStateToProps,
  { login_success }
)(LoginScreen);
