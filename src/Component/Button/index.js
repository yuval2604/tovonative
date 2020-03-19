import React, { Component } from "react";
import Styles from "./style";
import { Text, View, TouchableOpacity } from "react-native";

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={[Styles.viewStyle, this.props.viewStyle]}>
          <Text style={[Styles.textStyle, this.props.textStyle]}>
            {this.props.Text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
