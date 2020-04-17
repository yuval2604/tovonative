import React, { Component } from 'react'
import { Text, View,Image,TouchableOpacity,ImageBackground} from 'react-native'
import Color from '../../Config/Color'
import Style from './style'
export default class componentName extends Component {
  render() {
    return (
      <View style={[{margin:5,flex:1},this.props.extraStyle]}>
      
      <TouchableOpacity onPress={this.props.onPress}>
      <View
        style={Style.containers}
        >
        <Image
          source={this.props.source}
          style={Style.imageContainer}
        />
      </View>
       <View
            style={Style.rateView}
          >
            <Text
              style={Style.rateText}
            >{this.props.rate}</Text>
          </View>
      <View style={{ marginVertical:10,flex:1}}>
        <Text numberOfLines={1}  style={Style.titleText}>{this.props.title}</Text>
        <Text numberOfLines={1} style={Style.descriptionText}>{this.props.description}</Text>

        {/* <View style={{backgroundColor:'red',}}>
          <View style={{justifyContent:'flex-end'}}> */}
          <Text style={Style.priceText}>{this.props.price}</Text>
       
          {/* </View> */}
       
          
        </View>
        </TouchableOpacity>
    </View>
    )
  }
}