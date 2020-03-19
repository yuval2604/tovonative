import React, { Component } from 'react'
import { Text, View, Platform, TouchableOpacity, Image,StatusBar } from 'react-native'

export default class componentName extends Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                   // marginHorizontal: 15,
                    justifyContent: 'center',
                    ...Platform.select({
                        ios: {
                            zIndex: 9
                        }
                    })
                }}
            >
            <StatusBar hidden={true}/>
                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.props.onBackPress}>
                        <Image
                            source={require("../../Image/arrow-left.png")}
                            style={{
                                width: 16,
                                height: 16
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.props.onPress}
                    >
                        <Image
                            source={require("../../Image/shopping_cart.png")}
                            style={{
                                width: 20,
                                height: 20,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.1, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={this.props.onSearchPress}
                    >
                        <Image
                            source={require("../../Image/search.png")}
                            style={{
                                width: 18,
                                height: 18,
                                alignSelf: 'flex-end'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}