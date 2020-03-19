import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,TouchableOpacity,ImageBackground} from 'react-native'
import Swiper from 'react-native-swiper';
import styles from './style';
import Button from '../../Component/Button/index'
import Color from '../../Config/Color'
export default class index extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}
       showsButtons={false} dot={
        <View
          style={styles.deActiveDot}
        />
      }
      activeDot={
        <View
          style={styles.activeDot}
        />
      } >
        <View style={styles.slide1}>
          <ImageBackground style={styles.image} source={require('../../Image/slide1.png')}>
          <Image style={{width:150,height:150,alignSelf:'center'}} source={require('../../Image/full-white-logo.png')}/>
          <Text style={styles.text}>Explore great products</Text>
          <Text style={styles.contentText}>An exciting place for the whole family to shop.</Text>
        </ImageBackground>
        </View>
        <View style={styles.slide2}>
        <ImageBackground style={styles.image} source={require('../../Image/slide2.png')}>
        <Image style={{width:150,height:150,alignSelf:'center'}} source={require('../../Image/full-white-logo.png')}/>
          <Text style={styles.text}>Confirm your order</Text>
          <Text style={styles.contentText}>The best of both worlds. Store and web.</Text>
        </ImageBackground>
        </View>
        <View style={styles.slide3}>
        <ImageBackground style={styles.image} source={require('../../Image/slide3.png')}>
        <Image style={{width:150,height:150,alignSelf:'center'}} source={require('../../Image/full-white-logo.png')}/>
          <Text style={styles.text}>Track your order</Text>
          <Text style={styles.contentText}>Transforming shopping into an experience.</Text>
          <Button Text='GET STARTED!' viewStyle={{marginTop:10,backgroundColor:Color.white,marginHorizontal:50}}
            textStyle={{color:Color.black}}
            onPress={()=>this.props.navigation.navigate('SignUp')}
          />
         
        </ImageBackground>
        </View> 
      </Swiper>
    )
  }
}
