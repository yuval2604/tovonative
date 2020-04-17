import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'
import Button from '../../Component/Button/index'
export default class componentName extends Component {
  render() {
    return (
      <View
        style={{
          //width: "100%",
          //flex: 1
        }}
      >
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          source={this.props.Source}
          style={styles.container}>
          <View style={styles.overlay}>
            <View style={{ alignSelf: 'flex-start', marginHorizontal: 60,}}>
              <Text style={[styles.textStyle, { paddingTop: 10,marginBottom:10,fontSize:22, fontFamily: 'OS_Regular', }]} >{this.props.Text}</Text>
             
              <Button Text='Shop now'
                onPress={this.props.onPress}
                textStyle={{ marginVertical: 5, marginHorizontal: 20,fontSize:12, }}
                viewStyle={{ borderRadius: 5, justifyContent: 'center',width:105,alignSelf:'center' }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    ) 
  }
}
const styles = StyleSheet.create({

  MainContainer: {

    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
    margin: 10

  },
  container: {
    height: 160,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 160,
    justifyContent: 'center',
   borderRadius: 10
  },
  avatarStyle: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  textStyle: {
    marginTop: 10,
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  balanceContainer: {
    padding: 10,
  }
});