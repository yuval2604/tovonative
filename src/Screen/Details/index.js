import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import Header from '../../Component/Header/index'
import color from '../../Config/Color'
import { IndicatorViewPager, PagerDotIndicator, } from 'rn-viewpager';
import Color from '../../Config/Color';
import CategoryColumnList from '../../Component/CategoryColumnList/index'
import Style from './style'
import Button from '../../Component/Button/index';
import { Dropdown } from 'react-native-material-dropdown'
export default class componentName extends Component {
    constructor() {
        super();
        this.state = {
            tabsFlag: 0
        };
    }
    onchangetabs(i) {
        var that = this;
        that.setState({
            tabsFlag: i
        });
        // console.log(i);
    }

    onChangeText = this.onChangeText.bind(this);

    onChangeText(text) {
        this.setState({
            selected: text,
        })
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />
    }
    render() {
        return (
            <View style={{ flex: 1, marginHorizontal: 15, marginBottom: 15 }}>
                <Header
                    onSearchPress={() => this.props.navigation.navigate('Search')}
                    onBackPress={() => this.props.navigation.navigate('Category')}
                    onPress={() => this.props.navigation.navigate('ShoppingCart')} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ justifyContent: 'center', alignContent: 'center', }}>
                        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                            <Text style={Style.titleText}>Fine-knit polo shirt</Text>
                            <Text style={Style.descText}>REF 13060273-WINNIE</Text>
                            <Text style={Style.priceText}>$19.99</Text>
                        </View>
                        <IndicatorViewPager
                            style={{ height: 350, }}
                            indicator={this._renderDotIndicator()}>
                            {/*_renderDotIndicator() will return the PagerDotIndicator*/}
                            <View
                                style={Style.IndicatorViewPager}>
                                <Image
                                    imageStyle={{ borderRadius: 5, }}
                                    source={require('../../Image/1.png')}
                                    style={Style.image} />
                            </View>
                            <View
                                style={Style.IndicatorViewPager}>
                                <Image
                                    imageStyle={{ borderRadius: 5, }}
                                    source={require('../../Image/10.png')}
                                    style={Style.image} />
                            </View>
                            <View
                                style={Style.IndicatorViewPager}>
                                <Image
                                    imageStyle={{ borderRadius: 5, }}
                                    source={require('../../Image/3.png')}
                                    style={Style.image} />
                            </View>
                        </IndicatorViewPager>


                        <View style={{ justifyContent: 'center', }}>
                            <Text style={Style.detailText}>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</Text>


                            <View style={Style.rowDataView}>
                                <View style={Style.rowDataTitleView}>
                                    <Text style={Style.rowDataTitleText}>Size</Text>
                                </View>
                                <View style={Style.rowDataTitleSelectView}>
                                    <Dropdown data={data}
                                        baseColor={Color.blue} itemColor={Color.blue} selectedItemColor={Color.blue}
                                        containerStyle={Style.dropdownStyle}
                                        pickerStyle={Style.dropdownPicker}
                                        valueExtractor={({ value }) => value}
                                        onChangeText={this.onChangeText}
                                    ></Dropdown>
                                </View>
                            </View>

                            <View style={Style.rowDataView}>
                                <View style={Style.rowDataTitleView}>
                                    <Text style={Style.rowDataTitleText}>Color</Text>
                                </View>
                                <View style={Style.rowDataTitleSelectView}>
                                    <TouchableOpacity onPress={() => this.onchangetabs(0)}>
                                        <Image source={this.state.tabsFlag == 0 ? require('../../Image/select.png') : require('../../Image/blue.png')} style={Style.selectedImage} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.onchangetabs(1)}>
                                        <Image source={this.state.tabsFlag == 1 ? require('../../Image/select.png') : require('../../Image/red.png')} style={Style.selectedImage} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.onchangetabs(2)}>
                                        <Image source={this.state.tabsFlag == 2 ? require('../../Image/select.png') : require('../../Image/black.png')} style={Style.selectedImage} />
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View style={Style.rowDataView}>
                                <View style={Style.rowDataTitleView}>
                                    <Text style={Style.rowDataTitleText}>Category</Text>
                                </View>
                                <View style={Style.rowDataTitleSelectView}>
                                    <Text style={Style.rowDataTitleSelectText}>T-shirt</Text>
                                </View>
                            </View>
                            <Text style={Style.similarDataTitle}>You Might Also Like</Text>
                            <View style={Style.similarDataView}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <CategoryColumnList
                                        source={require('../../Image/1.png')}
                                        title="Message cotton"
                                        description='REF. 13060273 - WINNIE'
                                        price='$19.99'
                                        rate='9.0'
         
                                    />
                                    <CategoryColumnList
                                        source={require('../../Image/2.png')}
                                        title='Contrasting cotton'
                                        description='REF. 13083675 - MICHAEL'
                                        price= '$41.99'
                                        rate='8.0' />
    
                                    <CategoryColumnList
                                        source={require('../../Image/3.png')}
                                        title='Fine-knit polo shirt'
                                        description='REF. 13075009 - PALM'
                                        price='$29.99'
                                        rate='9.8' />
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Button Text='Add to Cart'
                    onPress={() => this.props.navigation.navigate('CheckPayment')}
                    textStyle={{ fontSize: 16 }}
                    viewStyle={{ borderRadius: 5, }}
                />
            </View>
        )
    }
}

const data = [
    { value: 'S' },
    { value: 'M' },
    { value: 'L' },
    { value: 'XL' },
    { value: 'XXL' },
    { value: 'XXXL' },

]

