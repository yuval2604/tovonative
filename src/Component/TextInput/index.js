import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import style from './style';
export default class componentName extends Component {
  render() {
    return (
      <View>
       <TextInput
              style={[style.textViewContainer,this.props.TextInputStyle]}
              placeholder={this.props.placeholder}
              placeholderTextColor='#A0A0A0'
              underlineColorAndroid="transparent"
              secureTextEntry={this.props.secureTextEntry}
            />
      </View>
    )
  }
}