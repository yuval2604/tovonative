import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Color from "../../Config/Color";
import TextInputView from "../../Component/TextInput/index";
import PaymentMethod from "../../Component/PaymentMethod/index";

const buttonTextStyle = {
  color: Color.white,
  // fontWeight: '400',
  fontSize: 14,
  fontFamily: "OS_Regular",
  alignSelf: "center",
  // marginHorizontal: 30,
  // marginVertical: 5,
};
const previousBtnText = {
  color: Color.blue,
  fontSize: 14,
  fontFamily: "OS_Regular",
  alignSelf: "center",
};
const nextBtnStyle = {
  backgroundColor: Color.blue,
  borderRadius: 2,
  width: 100,
  marginRight: 0,
};
const previousBtnStyle = {
  // backgroundColor: Color.blue,
  borderRadius: 2,
  width: 100,
  marginRight: 0,
  borderColor: Color.blue,
  borderWidth: 0.5,
};
export default class componentName extends Component {
  state = {
    isValid: false,
    errors: false,
  };
  onSubmit = () => {
    this.props.navigation.navigate("Home");
  };
  onNextStep = () => {
    // if (!this.state.isValid) {
    //   this.setState({ errors: true });
    // } else {
    //   this.setState({ errors: false });
    // }
  };
  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 15 }}>
        {this.Header()}
        <ProgressSteps
          progressBarColor={Color.gray}
          borderWidth={1}
          activeStepIconBorderColor={Color.blue}
          activeLabelColor={Color.blue}
          completedStepIconColor={Color.blue}
          completedProgressBarColor={Color.blue}
        >
          <ProgressStep
            label="Billing"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={nextBtnStyle}
            // previousBtnTextStyle={previousBtnText}
            // previousBtnStyle={previousBtnStyle}
            //onNext={this.onNextStep}
            //errors={this.state.errors}
          >
            {this.onFirstSteps()}
          </ProgressStep>
          <ProgressStep
            label="Payment"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={nextBtnStyle}
            previousBtnTextStyle={previousBtnText}
            previousBtnStyle={previousBtnStyle}
          >
            {this.onSecondSteps()}
          </ProgressStep>
          <ProgressStep
            label="Confirm"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={nextBtnStyle}
            previousBtnTextStyle={previousBtnText}
            previousBtnStyle={previousBtnStyle}
            onSubmit={this.onSubmit}
          >
            {this.onThirdSteps()}
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
  onFirstSteps() {
    return (
      <View>
        <TextInputView placeholder="Full Name" />
        <TextInputView placeholder="Phone" />
        <TextInputView placeholder="Email" />
        <TextInputView placeholder="Address" />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5, marginRight: 7 }}>
            <TextInputView placeholder="City" />
          </View>
          <View style={{ flex: 0.5, marginLeft: 7 }}>
            <TextInputView placeholder="Zip Code" />
          </View>
        </View>
        <TextInputView placeholder="State" />
      </View>
    );
  }
  onSecondSteps() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PaymentMethod
            Text="Credit"
            source={require("../../Image/credit-card.png")}
          />
          <PaymentMethod
            Text="Debit"
            source={require("../../Image/debit.png")}
          />
          <PaymentMethod Text="Cash" source={require("../../Image/cash.png")} />
        </ScrollView>
        <TextInputView placeholder="Name on Card" />
        <TextInputView placeholder="Card Number" />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 0.5, marginRight: 7 }}>
            <TextInputView placeholder="MM" />
          </View>
          <View style={{ flex: 0.5, marginLeft: 7 }}>
            <TextInputView placeholder="YYYY" />
          </View>
        </View>
        <TextInputView placeholder="CCV" />
      </View>
    );
  }
  onThirdSteps() {
    return (
      <View style={{ justifyContent: "center" }}>
        <View
          style={{ justifyContent: "center", alignContent: "center", flex: 1 }}
        >
          <Image
            source={require("../../Image/check-circle.png")}
            style={{
              alignSelf: "center",
              resizeMode: "cover",
              width: 50,
              height: 50,
              marginTop: 50,
            }}
          />
          <Text
            style={{
              color: Color.blue,
              fontSize: 24,
              alignSelf: "center",
              fontWeight: "500",
              marginVertical: 30,
            }}
          >
            Payment Complete
          </Text>
          <Text
            style={{
              letterSpacing: 0.5,
              fontSize: 16,
              textAlign: "center",
              alignSelf: "center",
              color: Color.gray,
            }}
          >
            Order code is <Text style={{ color: Color.blue }}>#FS8686</Text> We
            will contact you within 24 hours via phone or email (business days){" "}
          </Text>
        </View>
      </View>
    );
  }
  Header() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
          ...Platform.select({
            ios: {
              zIndex: 9,
            },
          }),
        }}
      >
        <View style={{ flex: 0.1 }}>
          <StatusBar hidden={true} />
          <TouchableOpacity onPress={this.props.onBackPress}>
            <Image
              source={require("../../Image/arrow-left.png")}
              style={{
                width: 16,
                height: 16,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
