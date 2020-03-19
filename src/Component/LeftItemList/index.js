import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity} from 'react-native'
import Color from '../../Config/Color'
import Style from './style'
export default class componentName extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
      <View style={{ flexDirection: 'row', marginTop: 15,marginHorizontal:15}}>
    
      <View
        style={Style.containers}>
        <Image
          source={this.props.source}
          style={Style.imageContainer}
        />
      </View>
      <View style={{ margin: 15,flex:1,}}>
        <Text numberOfLines={1} style={Style.titleText}>{this.props.title}</Text>
        <Text numberOfLines={1} style={Style.descriptionText}>{this.props.description}</Text>

        {/* <View style={{backgroundColor:'red',}}>
          <View style={{justifyContent:'flex-end'}}> */}
          <View style={{flexDirection:'row'}}>
          <View style={{flex:0.5}}>
          <Text style={Style.priceText}>{this.props.price}</Text>
          </View>
          <View style={{flex:0.5}}>
          <View
            style={Style.rateView}
          >
            <Text
              style={Style.rateText}
            >{this.props.rate}</Text>
          </View>
          </View>
          </View>
          {/* </View> */}
       
          
        </View>
       
          
    </View>
    </TouchableOpacity>
    )
  }
}