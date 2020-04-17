import React, { Component } from 'react'
import { Text, View, Platform, TouchableOpacity, Image } from 'react-native'
import TwoRowText from '../../Component/TwoRowText/index'
import CategoryColumnList from '../../Component/CategoryColumnList/index'
import Header from '../../Component/Header/HeaderClose'
import TextInputView from '../../Component/TextInput/index'
import Color from '../../Config/Color'
export default class componentName extends Component {
    render() {
        return (
            <View style={{ marginTop: 15 }}>
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
                
                    <View style={{ flex: 0.1, }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Image
                                source={require("../../Image/close.png")}
                                style={{
                                    width: 18,
                                    height: 18,
                                    marginTop: 5
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8,marginVertical:10}}>
                        <TextInputView extraTextStyle={{fontSize:20}} placeholder="Search on e-Commerce" TextInputStyle={{ marginVertical: 0, height: 36,borderWidth:1 }} />
                    </View>
                </View>

                <View style={{ marginTop: 40, marginHorizontal: 15, marginBottom: 15 }}>
                    <TwoRowText Title="Coats" Price="100" />
                    <TwoRowText Title="Jackets" Price="12" />
                    <TwoRowText Title="Blazers" Price="45" />
                    <TwoRowText Title="T-Shirts" Price="458" />
                    <View style={{ marginVertical: 40, }}>
                        <Text style={{ fontSize: 22, alignSelf: 'center',fontFamily:'OS_SB',color:Color.gray }}>Selling Product</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <CategoryColumnList
                            source={require('../../Image/1.png')}
                            title="Message cotton"
                            description='REF. 13060273 - WINNIE'
                            price='$19.99'
                            rate='9.0' />
                        <CategoryColumnList
                            source={require('../../Image/2.png')}
                            title='Essential cotton'
                            description='REF. 13060274 - WINNIE'
                            price='$29.99'
                            rate='8.0' />
                    </View>
                </View>
            </View>
        )
    }
}