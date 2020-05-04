import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Linking,
  TextInput,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Color from "../../Config/Color";
import TextInputView from "../../Component/TextInput/index";
import PaymentMethod from "../../Component/PaymentMethod/index";
import styleText from "../../Component/TextInput/style";
import Imgback from "../../../assets/background.png";
import { Dropdown } from "react-native-material-dropdown";
import Header from "../../Component/Header/HeaderClose";
import Style from "../Details/style";
import ButtonCom from "../../Component/Button/index";
import Expo, { Notifications, Updates } from "expo";

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

const pickerStyle = {
  inputIOS: {
    color: "white",
    paddingTop: 20,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  inputAndroid: {
    color: "white",
    paddingTop: 40,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  placeholderColor: "white",
  underline: { borderTopWidth: 0 },
  icon: {
    position: "absolute",
    backgroundColor: "transparent",
    borderTopWidth: 5,
    borderTopColor: "#00000099",
    borderRightWidth: 5,
    borderRightColor: "transparent",
    borderLeftWidth: 5,
    borderLeftColor: "transparent",
    width: 0,
    height: 0,
    top: 20,
    right: 15,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    padding: 20,
    paddingTop: 0,
    height: "100%",
  },
  formLabel: {
    fontSize: 40,
    color: "#18e7d3",
  },
  inputStyle: {
    marginTop: 0,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: "#ecf0f1",
  },
  Picker: {
    marginTop: "300px",
  },
  buttonStyle: {
    backgroundColor: Color.blue,
  },
  scrollView: {},
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  dropdownStyle: {
    alignItems: "center",
  },
});

export default class componentName extends Component {
  state = {
    isValid: false,
    errors: false,
    specialty: "בחר נושא",
    avalibility: "בחר זמינות",
    fesition: "בחר רופא",
    Name: "",
    phone: "",
    email: "",
    ID: "",
  };

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async (title, body) => {
    const message = {
      to: this.state.expoPushToken,
      sound: "default",
      title: title,
      body: body,
      data: { data: "goes here" },
      _displayInForeground: true,
    };
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  handleChangespecialty = (v) => {
    console.log("h");
    this.state.specialty = v;
  };
  handleChangeavalibility = (v) => {
    this.state.avalibility = v;
  };
  handleChangefesition = (v) => {
    this.state.fesition = v;
  };

  onChangeName = (v) => {
    this.state.Name = v;
  };

  onChangePhone = (v) => {
    this.state.phone = v;
  };
  onChangeEmail = (v) => {
    this.state.email = v;
  };
  onChangeID = (v) => {
    this.state.ID = v;
  };

  handleChange = (v) => {
    this.state.value = v;
  };

  handleDelete = () => {
    this.state = {
      specialty: "בחר נושא",
      avalibility: "בחר זמינות",
      fesition: "בחר רופא",
      Name: "",
      phone: "",
      email: "",
      ID: "",
    };
  };

  handleSendPOST = () => {
    console.log("handle POST", this.state);
    fetch("http://167.71.44.156:3001/api/getAllData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avalibility: this.state.avalibility,
        specialty: this.state.specialty,
        fesition: this.state.fesition,
        name: this.state.Name,
        number: this.state.phone,
        email: this.state.email,
        id: this.state.ID,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .then(this.handleDelete())
      .then(console.log(this.state))

      .catch((error) => {
        console.error(error);
      });
    console.log("back");
  };

  handleSend = () => {
    console.log("handleSend");
    console.log(this.state);
    fetch("http://192.168.1.15:3001/api/getRequests", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: undefined,
      // JSON.stringify({
      //     firstParam: "yourValue",
      //     secondParam: "yourOtherValue"
      //   })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("back");
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
        <ImageBackground source={Imgback} style={styles.image}>
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
              label="בחר רופאים"
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
              label="פרטים"
              // nextBtnTextStyle={buttonTextStyle}
              // nextBtnStyle={nextBtnStyle}
              previousBtnTextStyle={previousBtnText}
              previousBtnStyle={previousBtnStyle}
              onSubmit={() => {
                this.handleSendPOST();
                title = "New Request";
                body = "New request from" + this.state.Name;
                this.sendPushNotification(title, body); //Only for doctors
                Updates.reload();
              }}
            >
              {this.onSecondSteps()}
            </ProgressStep>
            {/* <ProgressStep
            label="Confirm"
            nextBtnTextStyle={buttonTextStyle}
            nextBtnStyle={nextBtnStyle}
            previousBtnTextStyle={previousBtnText}
            previousBtnStyle={previousBtnStyle}
            onSubmit={this.onSubmit}
          >
            {this.onThirdSteps()}
          </ProgressStep> */}
          </ProgressSteps>
          <ButtonCom
            Text="Go to the website"
            viewStyle={{ marginTop: 15, padding: 3 }}
            onPress={() => {
              console.log(this.state);
              Linking.openURL("http://167.71.44.156:3000/main");
            }}
          />
        </ImageBackground>
      </View>
    );
  }
  onFirstSteps() {
    return (
      <View>
        <Text style={styles.formLabel}> Get Doctor </Text>

        <Dropdown
          data={[
            { label: "אונקולוגיה", value: "אונקולוגיה", key: "אונקולוגיה" },
          ]}
          baseColor={Color.blue}
          itemColor={Color.blue}
          selectedItemColor={Color.blue}
          containerStyle={Style.dropdownStyle}
          pickerStyle={Style.dropdownPicker}
          valueExtractor={({ value }) => value}
          placeholder={this.state.specialty}
          placeholderTextColor={"#000000"}
          onChangeText={(value) => this.handleChangespecialty(value)}
        ></Dropdown>

        <Dropdown
          data={[
            { label: "מיידי", value: "מיידי", key: "מיידי" },
            { label: "תוך שבוע", value: "תוך שבוע", key: "תוך שבוע" },
            { label: "בעוד כחודש", value: "בעוד כחודש", key: "בעוד כחודש" },
            {
              label: "בעוד כ-3 חודשים",
              value: "בעוד כ-3 חודשים",
              key: "בעוד כ-3 חודשים",
            },
            {
              label: "בעוד כ-6 חודשים",
              value: "בעוד כ-6 חודשים",
              key: "בעוד כ-6 חודשים",
            },
            { label: "בעוד שנה", value: "בעוד שנה" },
          ]}
          baseColor={Color.blue}
          itemColor={Color.blue}
          selectedItemColor={Color.blue}
          containerStyle={Style.dropdownStyle}
          pickerStyle={Style.dropdownPicker}
          valueExtractor={({ value }) => value}
          placeholder={this.state.avalibility}
          placeholderTextColor={"#000000"}
          onChangeText={(value) => this.handleChangeavalibility(value)}
        ></Dropdown>

        <Dropdown
          data={[
            {
              label: "דר נועם אסנה",
              value: "דר נועם אסנה",
              key: "דר נועם אסנה",
            },
            {
              label: "פרופ משה שפר",
              value: "פרופ משה שפר",
              key: "פרופ משה שפר",
            },
          ]}
          baseColor={Color.blue}
          itemColor={Color.blue}
          selectedItemColor={Color.blue}
          containerStyle={Style.dropdownStyle}
          pickerStyle={Style.dropdownPicker}
          valueExtractor={({ value }) => value}
          placeholder={this.state.fesition}
          placeholderTextColor={"#000000"}
          onChangeText={(value) => this.handleChangefesition(value)}
        ></Dropdown>
      </View>
    );
  }
  onSecondSteps() {
    return (
      <View>
        <TextInput
          key="fullname"
          placeholder="שם מלא"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#000000"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.onChangeName(text)}
        />
        <TextInput
          key="phone"
          placeholder="טלפון"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#000000"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.onChangePhone(text)}
        />
        <TextInput
          key="email"
          placeholder="אימייל"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#000000"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.onChangeEmail(text)}
        />
        <TextInput
          key="id"
          placeholder="תעודת זהות"
          style={[styleText.textViewContainer, this.props.TextInputStyle]}
          placeholderTextColor="#000000"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.onChangeID(text)}
        />

        {/* <ButtonCom
          viewStyle={{ marginTop: 15, padding: 3 }}
          Text="SEND REQUEST1"
          onPress={() => {
            this.handleSendPOST();
            title = "New Request";
            body = "New request from" + this.state.Name;
            this.sendPushNotification(title, body); //Only for doctors
            Updates.reload();
          }}
        /> */}
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AboutUs")}
          >
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
