import React, { Component } from 'react'
import {View, Image,TouchableOpacity} from 'react-native'
import container from '../../Styles/Container/style'
import TextInputView from '../../Component/TextInput/index'
import Button from '../../Component/Button/index'
import Text from '../../Component/Text/index'
import Color from '../../Config/Color';
export default class componentName extends Component {

  render() {
    return (
      <View style={[container.container, container.marginHorizontal]}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <View style={{ flex: 1, marginTop:50 }}>
            <Image source={require("../../Image/full-white-logo.png")}
              style={{ height: 150, width: 150, alignSelf: 'center',marginVertical:50,tintColor:'#000'}} resizeMode="contain"
            />
            {/* <TextInput
              style={{ height: 50,fontSize:16,marginVertical:15, borderColor: '#DCE2EE', borderWidth: 2, borderRadius: 5, padding: 10 }}
              placeholder="Username"
              placeholderTextColor='#A0A0A0'
            /> */}
            {/* <View style={{marginTop:50,marginBottom:25}}> */}
            <TextInputView placeholder="Username" />
            <TextInputView placeholder="Email"  />
            <TextInputView placeholder="Password" secureTextEntry={true}/>
            {/* </View> */}
            <Button Text='Sign up' viewStyle={{marginTop:15}} onPress={()=>{this.props.navigation.navigate('Home')}}/>
            <View style={{flexDirection:'row',justifyContent:'center',marginTop:30}}>
            <Text Text="Have an account? " extraTextStyle={{alignSelf:'center',fontSize:14}}/>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}}>
            <Text Text="Sign in" extraTextStyle={{fontSize:14,color:Color.blue,fontFamily: 'OS_SB'}}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
} 