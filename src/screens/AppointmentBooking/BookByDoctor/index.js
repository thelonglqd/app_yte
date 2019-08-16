import React from "react";
import { TextInput, View, StyleSheet, ScrollView } from "react-native";
import { Icon, ButtonGroup, Input, Button } from "react-native-elements";

import Indicator from "../../../common/components/Indicator";
import DoctorCard from "./components/DoctorCard";
import apis from "../../../apis";

const styles = StyleSheet.create({
  searchBoxContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  searchBox: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    borderRadius: 20,
    height: 40,
    width: "70%",
    padding: 10
  },
  searchBtnContainer: {
    position: "absolute",
    top: 17,
    right: 60
  },
  doctorsListContainer: {}
});

class BookByDoctor extends React.Component {
  state = { doctors: null };
  static navigationOptions = {
    title: "Tìm bác sĩ",
    tabBarVisible: false
  };

  componentDidMount() {
    apis
      .post("/login/gmail", {
        client_id: 4,
        client_secret: "ZOCrAJAI16VGAXKYt8GzXbJnYGmQgCcODvv8TJOy",
        username: "thelonglqd@gmail.com",
        password: "1234567890"
      })
      .then(response => {
        apis
          .get("/doctor", {
            headers: {
              Authorization: "Bearer " + response.data.data.access_token
            }
          })
          .then(response => {
            this.setState({ doctors: response.data.data });
          });
      })
      .catch(error => console.log(error.response));
  }

  render() {
    console.log(this.state.doctors);
    {
      return this.state.doctors ? (
        <ScrollView>
          <View style={styles.searchBoxContainer}>
            <TextInput placeholder="Tìm kiếm" style={styles.searchBox} />
          </View>
          <Button
            containerStyle={styles.searchBtnContainer}
            type="clear"
            icon={<Icon color="#aeaeae" size={30} name="search" />}
          />
          <View style={styles.doctorsListContainer}>
            {this.state.doctors.map(doctor => (
              <DoctorCard
                key={doctor.id}
                doctorId={doctor.id}
                avatar={doctor.avatar}
                diploma={doctor.diploma_name}
                name={doctor.name}
                address={doctor.address}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Indicator />
      );
    }
  }
}

export default BookByDoctor;
