import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";
import Header from "../../Component/Header/HeaderClose";
import TwoRowText from "../../Component/TwoRowText/index";
import styleText from "../../Component/TextInput/style";
import ButtonCom from "../../Component/Button/index";
import { Updates } from "expo";

export default class DoctorCard extends Component {
  state = {
    Time: "",
    Date: "",
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
    console.log(this.props);
    return (
      <View>
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
          Header
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

        <TextInput
          key="Date"
          placeholder="בחר תאריך"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#A0A0A0"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.handleChangeTime(text)}
        />
        <TextInput
          key="Time"
          placeholder="בחר זמן"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#A0A0A0"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.handleChangeDate(text)}
        />

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
