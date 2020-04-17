import React, { Component } from "react";
import Navigation from "./src/Navigation/index";
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      OS_Regular: require("./assets/fonts/OpenSans-Regular.ttf"),
      OS_Bold: require("./assets/fonts/OpenSans-Bold.ttf"),
      OS_Light: require("./assets/fonts/OpenSans-Light.ttf"),
      OS_SB: require("./assets/fonts/OpenSans-SemiBold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return <Navigation />;
    } else {
      return <AppLoading />;
    }
  }
}
