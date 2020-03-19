import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import Header from '../../Component/Header/HeaderClose'
export default class componentName extends Component {
  render() {
    return (
      <View>
      <ScrollView>
        <Header
          onBackPress={() => this.props.navigation.navigate('Home')} />
        <View style={{marginHorizontal:15}}>
        <Text style={{fontFamily:'OS_SB',fontSize:26,textAlign:'justify',alignSelf:'center',marginVertical:10}}>Term & Policy</Text>
        <Text style={{ fontFamily: 'OS_SB', fontSize: 16,  }}>Welcome to iTechNotion </Text>
        <Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION? </Text>
        <Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.

When you browse our store, we also automatically receive your computerâ€™s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.

Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.

 </Text>
<Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}> SECTION 2 – CONSENT</Text>
<Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>
How do you get my consent?
When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.

If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.
</Text>
<Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}> How do I withdraw my consent? </Text>
<Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>
If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at info@itechnotion.com or mailing us at A/404, Arvind Mega trade, Opp Ashok Mill BRTS, Ahmedabad-380025
</Text>
 
<Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}>SECTION 3 – DISCLOSURE </Text>
<Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>
We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
</Text>
 
<Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}>SECTION 4 – PAYMENT  </Text>
<Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>
We use Razorpay for processing payments. We/Razorpay do not store your card data on their servers. The data is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is not saved.

Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.

PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.

For more insight, you may also want to read terms and conditions of razorpay on

https://razorpay.com 

</Text>
<Text style={{fontFamily:'OS_SB',fontSize:22,textAlign:'justify',alignSelf:'center',marginVertical:10}}>SECTION 5 – THIRD-PARTY SERVICES </Text>
<Text style={{marginVertical:10, fontFamily: 'OS_Regular', fontSize: 14,textAlign: 'justify',letterSpacing:1,}}>
In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
</Text>
      </View>
      </ScrollView>
      </View>
    )
  }
}