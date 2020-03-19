// import React, { Component } from 'react'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert } from 'react-native'
import CategoryColumnList from '../../Component/CategoryColumnList/index'
import CartList from '../../Component/CartList/index'
import Button from '../../Component/Button/index';
import Header from '../../Component/Header/HeaderClose'
import Color from '../../Config/Color'
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
        style={{ marginBottom: 20 }}
      />
    );
  }

  _renderItem = ({ item, index }) => (
    <CartList
      source={item.image}
      title={item.title}
      description={item.desc}
      size='M'
      iconSource={require("../../Image/add-plus-button.png")}
      decrIconSource={require("../../Image/substract.png")}
      price={item.price}
    />
  );

  GetItem(item) {
    { this.props.navigation.navigate('SubCategory') }
    // Alert.alert(item);
  }
  render() {
    return (

      <View style={styles.MainContainer} >
        <Header
          onBackPress={() => this.props.navigation.navigate('Home')} />
        <FlatList
         
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this._renderItem}
          showsVerticalScrollIndicator={false}
         
        />
        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontSize: 20, fontFamily: 'OS_Bold', color: '#6A6A77' }}>Total:</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontSize: 20, alignSelf: 'flex-end', fontFamily: 'OS_Bold', color: '#6A6A77' }}>$57.97</Text>
          </View>
        </View>

        <Button Text='Process to Checkout'
          onPress={() => this.props.navigation.navigate('CheckPayment')}
          textStyle={{ fontSize: 16, }}
          viewStyle={{ borderRadius: 5, marginHorizontal: 20 }}
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
    margin: 10,
    // backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

});


// import { Text, View } from 'react-native'
// import CartList from '../../Component/CartList/index'

// export default class componentName extends Component {
//   render() {
//     return (
//       <View>
//          <CartList
//             source={require('../../Image/poloshirt.jpg')}
//             title="Fine-knit polo shirt"
//             description="REF. 13060273 - WINNIE"
//             iconSource={require("../../Image/plus.png")}
//             price="$22.00"
//              />
//         {/* <CartList
//             sourceImg={require("../../Image/man-in-suit2.jpg")}
//             titleText="Daniel Wellington"
//             colorText="Color: Brown"
//             sizeText="Size: One Size"
//             source={require("../../Image/plus.png")}
//             priceText="$22.00"
//           /> */}
//       </View>
//     )
//   }
// }