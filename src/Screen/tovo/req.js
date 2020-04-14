import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../../Component/Header/HeaderClose";
import Card from "./card";

export default class Req extends Component {
  state = {
    data: "null",
  };

  handleSend() {
    console.log("handleSend");
    console.log(this.state.data);
    fetch("http://167.71.44.156:3001/api/getRequests", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson["data"],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleReq() {
    console.log("handlereq ", this.state.data);
    var tifOptions = Object.keys(this.state.data).map(function (key) {
      return <Card value={key}>{this.state.data[key]}</Card>;
    });

    // const handle2 = this.state.data.map((item, i) => {
    //   console.log(i);
    // });
    // const handle = this.state.data.map((item, i) => {
    //   <Text>{this.state.data[i]["name"]}</Text>;
    //<Card data1={this.state.data[i]["name"]}></Card>;
    // });
    return tifOptions;
  }

  componentWillMount() {
    this.handleSend();
  }
  render() {
    console.log("render", this.state.data[0]);
    return (
      <View>
        <ScrollView>
          <Header onBackPress={() => this.props.navigation.navigate("Home")} />
          {/* <Header
          onBackPress={() => this.props.navigation.navigate("TempPolicy")}
        /> */}
          <View style={{ marginHorizontal: 15 }}>
            {Object.entries(this.state.data).map((t, k) => (
              <Card
                key={k}
                data1={this.state.data[k]}
                onPress={() =>
                  this.props.navigation.navigate("DoctorCard", {
                    id: this.state.data[k]["id"],
                    name: this.state.data[k]["name"],
                    email: this.state.data[k]["email"],
                    number: this.state.data[k]["number"],
                  })
                }
              ></Card>
            ))}
            <Text
              style={{
                fontFamily: "OS_SB",
                fontSize: 22,
                textAlign: "justify",
                alignSelf: "center",
                marginBottom: 15,
              }}
            >
              {/* {this.state.data[0]["name"]}
            {this.state.data[0]["number"]} */}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
