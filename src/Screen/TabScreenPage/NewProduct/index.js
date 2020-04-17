import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Color from '../../../Config/Color'
import LeftItemList from '../../../Component/LeftItemList/index';
import RightItemList from '../../../Component/RightItemList/index'
export default class componentName extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={{ flex: 1, marginBottom: 80, }}>
          <LeftItemList source={require('../../../Image/1.png')}
            title="Fine-knit polo shirt"
            description="REF. 13060273 - WINNIE"
            price="$29.99"
            onPress={this.props.onPress}
            rate="9.5" />
          <RightItemList
            source={require('../../../Image/2.png')}
            title='Message cotton'
            description='REF. 13060273 - WINNIE'
            price='$19.99'
            onPress={this.props.onPress}
            rate="9.0" />
          <LeftItemList
            source={require('../../../Image/3.png')}
            title='Contrasting cotton'
            description='REF. 13083675 - MICHAEL'
            price="$59.99"
            onPress={this.props.onPress}
            rate="8.9" />
            
          <RightItemList
            source={require('../../../Image/9.png')}
            title='Essential cotton'
            description="REF. 13060273 - WINNIE"
            price="$129.99"
            onPress={this.props.onPress}
            rate="6.5" />
         
          <LeftItemList
            source={require('../../../Image/8.png')}
            title="Fine-knit polo shirt"
            description='REF. 13075009 - PALM'
            price="$99"
            onPress={this.props.onPress}
            rate="5.5" />


          <RightItemList
            source={require('../../../Image/11.png')}
            title="Fine-knit print polo shirt"
            description="REF. 13060273 - WINNIE"
            price="$99.99"
            onPress={this.props.onPress}
            rate="7.5" />


          <LeftItemList
            source={require('../../../Image/12.png')}
            title="Message cotton"
            description="REF. 13060273 - WINNIE"
            price="$99"
            onPress={this.props.onPress}
            rate="9.5" />


          <RightItemList
            source={require('../../../Image/13.png')}
            title="Contrasting cotton"
            description="REF. 13060273 - WINNIE"
            price="$129.99"
            onPress={this.props.onPress}
            rate="8.5" />
 
          <LeftItemList
            source={require('../../../Image/9.png')}
            title="Fine-knit polo shirt"
            description="REF. 13060273 - WINNIE"
            price="$29.99"
            onPress={this.props.onPress}
            rate="9.5" />

          <RightItemList
            source={require('../../../Image/15.png')}
            title="Essential cotton"
            description="REF. 13060273 - WINNIE"
            price="$69"
            onPress={this.props.onPress}
            rate="8.5" />

        </View>
      </ScrollView>
    )
  }
}
