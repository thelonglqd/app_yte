import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import { Button, Icon, Divider } from "react-native-elements";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { StackActions, NavigationActions } from "react-navigation";
import { register } from "../../redux/actions";
import apis from "../../apis";

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
    marginTop: 20,
    padding: 10
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 15
  },
  buttonTitleStyle: {
    fontSize: 14,
    color: "#18bf21"
  },
  socialButtonContainer: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 10
  },
  dividersContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  divider: {
    height: 1,
    backgroundColor: "#aeaeae",
    marginTop: 15
  },
  loginPageNavigation: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be more than 6 characters")
    .max(255, "Too Long!")
    .required("Password is required"),
  phone: Yup.number()
    .typeError("Phone must be number")
    .integer("Invalid phone number")
    .required("Phone number is required")
});

class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: "Đăng kí"
  };

  render() {
    const { isError, message } = this.props.registerState;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.inputContainer}
        >
          <View style={styles.socialButtonContainer}>
            <Button
              containerStyle={{ width: "40%" }}
              buttonStyle={{ backgroundColor: "#3b5998" }}
              title="Facebook Login"
              titleStyle={{ marginLeft: 5, fontSize: 14 }}
              icon={
                <Icon
                  type="font-awesome"
                  name="facebook"
                  size={30}
                  color="white"
                />
              }
            />
            <Button
              containerStyle={{ width: "40%" }}
              buttonStyle={{ backgroundColor: "#DB4437" }}
              title="Google Login"
              titleStyle={{ marginLeft: 5, fontSize: 14 }}
              icon={
                <Icon
                  type="font-awesome"
                  name="google"
                  size={30}
                  color="white"
                />
              }
            />
          </View>
          <Divider style={styles.divider} />
          {/* formik code here */}
          <Formik
            initialValues={{ email: "", password: "", phone: "", name: "" }}
            onSubmit={(values, actions) => {
              apis
                .post("/register/gmail", {
                  ...values,
                  client_id: 4,
                  client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy"
                })
                .then(response => {
                  Alert.alert(
                    "Kích hoạt tài khoản",
                    response.data.message,
                    [
                      {
                        text: "Back to Home",
                        onPress: () => {
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
                        }
                      }
                    ],
                    { cancelable: false }
                  );
                })
                .catch(error => {
                  actions.set;
                  actions.setFieldError(
                    "serverError",
                    error.response.data.data.email[0]
                  );
                })
                .finally(() => {
                  actions.setSubmitting(false);
                });
            }}
            validationSchema={RegisterSchema}
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
                  onChangeText={formProps.handleChange("email")}
                  onBlur={formProps.handleBlur("email")}
                  value={formProps.values.email}
                />
                {formProps.errors.email && formProps.touched.email ? (
                  <Text style={styles.errorText}>{formProps.errors.email}</Text>
                ) : null}
                <TextInput
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
                <TextInput
                  style={styles.input}
                  placeholder="Số điện thoại"
                  onChangeText={formProps.handleChange("phone")}
                  onBlur={formProps.handleBlur("phone")}
                  value={formProps.values.phone}
                />
                {formProps.errors.phone && formProps.touched.phone ? (
                  <Text style={styles.errorText}>{formProps.errors.phone}</Text>
                ) : null}
                <TextInput
                  style={styles.input}
                  placeholder="Tên"
                  onChangeText={formProps.handleChange("name")}
                  onBlur={formProps.handleBlur("name")}
                  value={formProps.values.name}
                />
                <Button
                  containerStyle={{ marginTop: 10 }}
                  buttonStyle={{ backgroundColor: "#00977e" }}
                  onPress={formProps.handleSubmit}
                  title="Đăng kí"
                />
              </View>
            )}
          </Formik>
          <Divider style={styles.divider} />
          <View style={styles.loginPageNavigation}>
            <Text style={{ fontSize: 18 }}>Đã có tài khoản? </Text>
            <Button
              type="clear"
              titleStyle={{ color: "#00977e" }}
              title="Đăng nhập"
              onPress={() => this.props.navigation.navigate("Login")}
            />
          </View>
          {message ? (
            isError ? (
              <Text style={{ color: "red" }}>{message}</Text>
            ) : (
              <Text style={{ color: "green" }}>{message}</Text>
            )
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = ({ registerState }) => ({ registerState });

export default connect(
  mapStateToProps,
  { register }
)(RegisterScreen);
