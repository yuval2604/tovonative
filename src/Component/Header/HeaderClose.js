import React, { Component } from 'react'
import { Text, View, Platform, TouchableOpacity, Image,StatusBar } from 'react-native'

export default class componentName extends Component {
    render() {
        return (


            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 20,
                    marginHorizontal: 15,
                    ...Platform.select({
                        ios: {
                            zIndex: 9
                        }
                    })
                }}
            >
                        <StatusBar hidden={true}/>
                <TouchableOpacity
                    onPress={this.props.onBackPress}>
                    {/* <View style={{backgroundColor:'red' }}> */}

                        <Image
                            source={require("../../Image/close.png")}
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />

                    {/* </View> */}
                </TouchableOpacity>
            </View>
        )
    }
}