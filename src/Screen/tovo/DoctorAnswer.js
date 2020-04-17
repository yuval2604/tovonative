import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Platform,
  StyleSheet,
} from "react-native";
import Header from "../../Component/Header/HeaderClose";
import TwoRowText from "../../Component/TwoRowText/index";
import styleText from "../../Component/TextInput/style";
import ButtonCom from "../../Component/Button/index";
import ClockTime from "../../Component/Clock/Clock";
import { Updates } from "expo";

import DatePicker from "react-native-datepicker";

export default class DoctorCard extends Component {
  state = {
    Time: "00:00",
    Date: "2020-01-01",
  };

  handleSend() {
    console.log("handleSend");
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    var timeOfSec = hours + ":" + minutes;

    console.log(
      timeOfSec,
      this.state.Time,
      this.state.Date,
      this.props["navigation"]["state"]["params"]["number"]
    );

    fetch("http://167.71.44.156:3001/api/updateReqTable", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.props["navigation"]["state"]["params"]["id"],
        number: this.props["navigation"]["state"]["params"]["number"],
        time: this.state.Time,
        date: this.state.Date,
        update: {
          time: this.state.Time,
          timeOfsecretarySet: timeOfSec,
          DateToBeScedule: this.state.Date,
        },
      }),
    });
    console.log("done");
  }
  handleChangeTime = (v) => {
    this.state.Time = v;
  };

  handleChangeDate = (v) => {
    this.state.Date = v;
  };

  componentWillMount() {}
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // justifyContent: "center",
        padding: 25,
        paddingTop: 0,
        width: "100%",
      },
    });
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Header onBackPress={() => this.props.navigation.navigate("AboutUs")} />

        <Text
          style={{
            fontFamily: "OS_SB",
            fontSize: 22,
            textAlign: "justify",
            alignSelf: "center",
            marginBottom: 15,
          }}
        >
          הבקשה של {this.props["navigation"]["state"]["params"]["name"]}
        </Text>

        <TwoRowText
          Title="id"
          Price={this.props["navigation"]["state"]["params"]["id"]}
        />
        <TwoRowText
          Title="name"
          Price={this.props["navigation"]["state"]["params"]["name"]}
        />
        <TwoRowText
          Title="EMAIL"
          Price={this.props["navigation"]["state"]["params"]["email"]}
        />
        <TwoRowText
          Title="number"
          Price={this.props["navigation"]["state"]["params"]["number"]}
        />
        <TwoRowText
          Title="fesition"
          Price={this.props["navigation"]["state"]["params"]["fesition"]}
        />
        <TwoRowText
          Title="avalibility"
          Price={this.props["navigation"]["state"]["params"]["avalibility"]}
        />

        <DatePicker
          style={{ width: 200, margin: 20 }}
          date={this.state.Date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2020-01-01"
          maxDate="2022-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            this.setState({ Date: date });
          }}
        />

        {/* <TextInput
          key="Date"
          placeholder="בחר תאריך"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#A0A0A0"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.handleChangeTime(text)}
        /> */}

        <DatePicker
          style={{ width: 200 }}
          date={this.state.Time}
          mode="time"
          placeholder="select time"
          format="HH:mm"
          minDate="00:00"
          maxDate="23:59"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(time) => {
            this.setState({ Time: time });
          }}
        />

        {/*   <TextInput
          key="Time"
          placeholder="בחר זמן"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#A0A0A0"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.handleChangeDate(text)}
           /> */}

        <ButtonCom
          viewStyle={{ marginTop: 15, padding: 3 }}
          Text="SEND REQUEST1"
          onPress={() => {
            this.handleSend();
            Updates.reload();
          }}
        />
      </View>
    );
  }
}
