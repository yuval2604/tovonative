import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Color from '../../Config/Color'
export default class componentName extends Component {
  render() {
    return (
      <View style={{flexDirection:'row',borderBottomColor:Color.gray,borderBottomWidth:0.2}}>
        <View style={{flex:0.5,justifyContent:'center'}}>
        <Text style={{marginVertical:10, fontFamily: 'OS_Regular',color:Color.gray}}>{this.props.Title}</Text>
        </View>
        <View style={{flex:0.5,justifyContent:'center'}}>
        <Text style={{alignSelf:"flex-end",marginVertical:10,color:Color.gray, fontFamily: 'OS_Regular',}}> {this.props.Price} </Text>
        </View>
      </View>
    )
  }
}