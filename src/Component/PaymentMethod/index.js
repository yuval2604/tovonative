import React, { Component } from 'react'
import { Image, Text, View,ImageBackground } from 'react-native'
import Color from '../../Config/Color'
export default class componentName extends Component {
    render() {
        return (
            <View style={{ margin:10,flexDirection: 'column',backgroundColor: Color.gray, width: 200, height: 120, justifyContent: 'center',borderRadius: 8 }}>
                

                    <Image style={{width: 80, height: 80,resizeMode: "contain",alignSelf:'center'}}
                        source={this.props.source} />
              
                <Text style={{fontSize:14,color:Color.white,textAlign:'center', fontFamily: 'OS_SB'}}> {this.props.Text} </Text>
            </View>
        )
    }
}