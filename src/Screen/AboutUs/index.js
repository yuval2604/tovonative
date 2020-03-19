import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "../../Component/Header/HeaderClose";
export default class componentName extends Component {
  render() {
    return (
      <View>
        <Header onBackPress={() => this.props.navigation.navigate("Home")} />
        <View style={{ marginHorizontal: 15 }}>
          <Text
            style={{
              fontFamily: "OS_SB",
              fontSize: 22,
              textAlign: "justify",
              alignSelf: "center",
              marginBottom: 15
            }}
          >
            About Us1
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: "OS_Regular",
              fontSize: 14,
              textAlign: "justify",
              letterSpacing: 1
            }}
          >
            <Text style={{ fontFamily: "OS_SB", fontSize: 16 }}>
              Welcome to iTechNotion{" "}
            </Text>
            iTechNotion has an excellent team of website development
            professionals who are experienced enough to develop websites of any
            complexity.{" "}
          </Text>
          <Text
            style={{
              marginVertical: 20,
              fontFamily: "OS_Regular",
              fontSize: 14,
              textAlign: "justify",
              letterSpacing: 1
            }}
          >
            We provide end to end solutions from front-end programming to back
            end programming and maintenance. Our team uses latest technologies
            and industry trends to develop your websites in order to give you
            the best.We understand that building an online business is not an
            easy task today.
          </Text>
          <Text
            style={{
              fontFamily: "OS_Regular",
              fontSize: 14,
              textAlign: "justify",
              letterSpacing: 1
            }}
          >
            The competition is growing by the minute and everyone is trying to
            make a successful attempt to create an independent income flow via
            the internet. The world has taken a turn away from physical
            retailers and now relies more dependently on what the internet and
            their PC can provide for them. Not only can you sell downloadable
            products but more and more people are beginning to buy their
            everyday necessities online as well and this has allowed the
            internet industry to boom.
          </Text>
        </View>
      </View>
    );
  }
}
