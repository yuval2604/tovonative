import React, { Component } from 'react'
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert,StatusBar } from 'react-native'
import CategoryColumnList from '../../Component/CategoryColumnList/index'
import Header from '../../Component/Header/index'

export default class componentName extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FlatListItems: [
                {
                    image: require('../../Image/1.png'),
                    rating: '9.0',
                    title: 'Message cotton',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$19.99',
                },
                {
                    image: require('../../Image/2.png'),
                    rating: '8.9',
                    title: 'Contrasting cotton',
                    desc: 'REF. 13083675 - MICHAEL',
                    price: '$41.99',
                },
                {
                    image: require('../../Image/8.png'),
                    rating: '6.0',
                    title: 'Essential cotton',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$59.99',
                },
                {
                    image: require('../../Image/9.png'),
                    rating: '9.0',
                    title: 'Fine-knit polo shirt',
                    desc: 'REF. 13075009 - PALM',
                    price: '$39.99',
                },
                {
                    image: require('../../Image/10.png'),
                    rating: '7.9',
                    title: 'Fine-knit print polo shirt',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$29.99',
                },
                {
                    image: require('../../Image/11.png'),
                    rating: '9.0',
                    title: 'Message cotton',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$19.99',
                },
                {
                    image: require('../../Image/12.png'),
                    rating: '8.9',
                    title: 'Contrasting cotton',
                    desc: 'REF. 13083675 - MICHAEL',
                    price: '$49.99',
                },
                {
                    image: require('../../Image/13.png'),
                    rating: '6.0',
                    title: 'Essential cotton',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$59.99',
                },
                {
                    image: require('../../Image/14.png'),
                    rating: '9.0',
                    title: 'Fine-knit polo shirt',
                    desc: 'REF. 13075009 - PALM',
                    price: '$39.99',
                },
                {
                    image: require('../../Image/15.png'),
                    rating: '7.9',
                    title: 'Fine-knit print polo shirt',
                    desc: 'REF. 13060273 - WINNIE',
                    price: '$29.99',
                },

            ]
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{ marginBottom:2 }}
            />
        );
    }

    _renderItem = ({ item, index }) => (
        <CategoryColumnList
            source={item.image}
            title={item.title}
            description={item.desc}
            price={item.price}
            rate={item.rating}
            onPress={this.GetItem.bind(this, item.title)}
        // extraStyle={{ index % 2 ==0 ? { marginRight: 10 } : { marginLeft: 10 }}
        />
    );

    GetItem(item) {
        { this.props.navigation.navigate('Details') }
        // Alert.alert(item);
    }
    render() {
        return (

            <View style={styles.MainContainer} >
                <Header
                    onSearchPress={() => this.props.navigation.navigate('Search')}
                    onBackPress={() => this.props.navigation.navigate('Home')}
                    onPress={() => this.props.navigation.navigate('Home')} />
                <FlatList
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: "space-around",
                        //backgroundColor:'#000'
                    }}
                    showsVerticalScrollIndicator={false}
                    data={this.state.FlatListItems}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={this._renderItem}
                    numColumns={2}
                    horizontal={false}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        // Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex: 1,
        marginHorizontal:15
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});