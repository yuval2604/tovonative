import React, { useState, Component } from "react";
import {
  Slider,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Linking,
  Navigator
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Header from "../../Component/Header/HeaderClose";

//state object

export default class index extends Component {
  state = {
    specialty: "בחר נושא",
    avalibility: "בחר זמינות",
    fesition: "בחר רופא",
    Name: "",
    phone: "",
    email: "",
    ID: ""
  };

  handleChangespecialty = v => {
    this.state.specialty = v;
  };
  handleChangeavalibility = v => {
    this.state.avalibility = v;
  };
  handleChangefesition = v => {
    this.state.fesition = v;
  };

  onChangeName = v => {
    this.state.Name = v;
  };

  onChangePhone = v => {
    this.state.phone = v;
  };
  onChangeEmail = v => {
    this.state.email = v;
  };
  onChangeID = v => {
    this.state.ID = v;
  };

  handleChange = v => {
    this.state.value = v;
  };

  handleSendPOST = () => {
    console.log("handl POST");
    fetch("http://167.71.44.156:3001/api/getAllData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avalibility: this.state.avalibility,
        specialty: this.state.specialty,
        fesition: this.state.fesition,
        name: this.state.Name,
        number: this.state.phone,
        email: this.state.email,
        id: this.state.ID
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
    console.log("back");
  };

  handleSend = () => {
    console.log("handleSend");
    console.log(this.state);
    fetch("http://192.168.1.15:3001/api/getRequests", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: undefined
      // JSON.stringify({
      //     firstParam: "yourValue",
      //     secondParam: "yourOtherValue"
      //   })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
    console.log("back");
  };
  render() {
    const pickerStyle = {
      inputIOS: {
        color: "white",
        paddingTop: 40,
        paddingHorizontal: 40,
        paddingBottom: 40
      },
      inputAndroid: {
        color: "white",
        paddingTop: 40,
        paddingHorizontal: 40,
        paddingBottom: 40
      },
      placeholderColor: "white",
      underline: { borderTopWidth: 0 },
      icon: {
        position: "absolute",
        backgroundColor: "transparent",
        borderTopWidth: 5,
        borderTopColor: "#00000099",
        borderRightWidth: 5,
        borderRightColor: "transparent",
        borderLeftWidth: 5,
        borderLeftColor: "transparent",
        width: 0,
        height: 0,
        top: 20,
        right: 15
      }
    };

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      },
      formLabel: {
        fontSize: 20,
        color: "#18e7d3"
      },
      inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: "#ecf0f1"
      },
      Picker: {
        marginTop: "300px"
      }
    });
    return (
      <View style={styles.container}>
        <Header onBackPress={() => this.props.navigation.navigate("Home")} />
        <Text style={styles.formLabel}> Get Doctor</Text>

        <Button
          title="Go to the website"
          onPress={() => {
            Linking.openURL("http://167.71.44.156:3000/main");
          }}
        />

        <RNPickerSelect
          style={pickerStyle}
          placeholder={{
            label: this.state.specialty,
            value: null
          }}
          onValueChange={value => handleChangespecialty(value)}
          items={[{ label: "אונקולוגיה", value: "אונקולוגיה" }]}
        />
        <RNPickerSelect
          style={pickerStyle}
          placeholder={{
            label: this.state.avalibility,
            value: null
          }}
          onValueChange={value => handleChangeavalibility(value)}
          items={[
            { label: "מיידי", value: "מיידי" },
            { label: "בעוד כחודש", value: "בעוד כחודש" },
            { label: "בעוד כ-3 חודשים", value: "בעוד כ-3 חודשים" },
            { label: "בעוד כ-6 חודשים", value: "בעוד כ-6 חודשים" },
            { label: "בעוד שנה", value: "בעוד שנה" }
          ]}
        />

        <RNPickerSelect
          style={pickerStyle}
          placeholder={{
            label: this.state.fesition,
            value: null
          }}
          value={this.state.value}
          onValueChange={value => handleChangefesition(value)}
          items={[
            { label: "דר נועם אסנא", value: "דר נועם אסנא" },
            { label: "פרופ משה שפר", value: "פרופ משה שפר" }
          ]}
        />

        <TextInput
          placeholder="שם מלא"
          style={styles.inputStyle}
          onChangeText={text => onChangeName(text)}
        />
        <TextInput
          placeholder="טלפון"
          style={styles.inputStyle}
          onChangeText={text => onChangePhone(text)}
        />
        <TextInput
          placeholder="email"
          style={styles.inputStyle}
          onChangeText={text => onChangeEmail(text)}
        />
        <TextInput
          placeholder="תעודת זהות"
          style={styles.inputStyle}
          onChangeText={text => onChangeID(text)}
        />
        <Button
          title="post request"
          onPress={() => {
            handleSendPOST();
          }}
        />
      </View>
    );
  }
}
