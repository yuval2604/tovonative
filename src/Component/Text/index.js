import React, { Component } from "react";
import { Text, View } from "react-native";
import Color from '../../Config/Color'
export default class index extends Component {
  render() {
    return (
      <View style={[this.props.viewStyle]}>
        <Text style={[{ fontSize: 16, fontFamily: 'OS_Regular', color: Color.gray,marginVertical:10},this.props.extraTextStyle]}>{this.props.Text}</Text>
      </View>
    );
  }
}
