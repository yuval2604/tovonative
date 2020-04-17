import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Color from '../../Config/Color'
import Style from './style'
export default class componentName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        }
    }
    incrementFunc() {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrementFunc() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <View style={{ flexDirection: 'row', }}>
                <View
                    style={Style.containers}>
                    <Image
                        source={this.props.source}
                        style={Style.imageContainer}
                    />
                </View>
                <View style={{ margin: 15, flex: 1, justifyContent: 'center' }}>
                    <Text numberOfLines={1} style={Style.titleText}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={Style.descriptionText}>{this.props.description}</Text>

                    <View style={Style.Quantity}>

                        <View style={{ flex: 0.25, justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'flex-start', fontFamily: 'OS_Regular', color: Color.gray }}>{this.props.size}</Text>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'row', alignContent: 'center' }}>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity onPress={this.decrementFunc.bind(this)}>
                                    <Image
                                        style={Style.iconMinus}
                                        source={this.props.decrIconSource}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ marginHorizontal: 3, fontSize: 14, color: Color.gray, fontFamily: 'OS_Regular' }}>{this.state.count}</Text>
                            </View>
                            <View style={{ justifyContent: 'center' }}>

                                <TouchableOpacity onPress={this.incrementFunc.bind(this)}>
                                    <Image
                                        style={Style.icon}
                                        source={this.props.iconSource}
                                    />
                                </TouchableOpacity>
                            </View> 
                        </View>
                        <View style={{ flex: 0.35, justifyContent: 'center', }}>
                            <Text style={Style.priceText}>{this.props.price}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }
}
