import React, { Component } from 'react'
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert } from 'react-native'
import CategoryList from '../../Component/CategoryList/index'
import Header from '../../Component/Header/index'
export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FlatListItems: [
        { key: 'Men', image: require('../../Image/4.png') },
        { key: 'Women', image: require('../../Image/20.png') },
        { key: 'Boy',  image: require('../../Image/6.png')},
        { key: 'Girl',  image: require('../../Image/7.png')},
        { key: 'Baby',  image: require('../../Image/27.png')},
        { key: 'Beauty', image: require('../../Image/5.png') },
        { key: 'Books' ,  image: require('../../Image/24.png')},
        { key: 'Home & Kitchen',  image: require('../../Image/26.png')},
        { key: 'Toys & Games', image: require('../../Image/25.png') },
      ]
    }
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{ marginBottom: 20 }}
      />
    );
  }

  _renderItem = ({ item }) => (
    <CategoryList onPress={this.GetItem.bind(this, item.key)}
      Text={item.key}
      Source={item.image}
    />
  );

  GetItem(item) {
    { this.props.navigation.navigate('SubCategory') }
    // Alert.alert(item);
  }
  render() {
    return (

      <View style={styles.MainContainer}>
        <Header
          onSearchPress={() => this.props.navigation.navigate('Search')}
          onBackPress={() => this.props.navigation.navigate('Home')}
          onPress={() => this.props.navigation.navigate('ShoppingCart')} />
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this._renderItem}
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
    margin: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});