import React, { Component } from "react";

import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform
} from "react-native";
import { Drawer, Icon, Col } from "native-base";
import SideBar from "../../Screen/SideMenu/index";
import Container from "../../Styles/Container/style";
import Color from "../../Config/Color";
import { Tab, Tabs, ScrollableTab } from "native-base";
import Tab1 from "../TabScreenPage/NewProduct/index";
import Tab2 from "../TabScreenPage/Popular/index";
import Tab3 from "../TabScreenPage/Handicraft/index";
import styles from "./style";
// import IconText from "../../Component/Icon2Text/index";
// import Icons from "react-native-vector-icons/MaterialCommunityIcons";
export default class index extends Component {
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.drawer._root.close()}
      >
        <StatusBar hidden={true} />
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{
              // position: "absolute",
              //flex: 1,
              flexDirection: "row",
              marginLeft: 15,
              ...Platform.select({
                ios: {
                  marginTop: 32
                },
                android: {
                  marginTop: 15
                }
              }),
              ...Platform.select({
                ios: {
                  zIndex: 9
                }
              })
            }}
          >
            <View style={{ flex: 0.1, justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.drawer._root.open()}>
                <Image
                  source={require("../../Image/menu.png")}
                  style={{
                    width: 15,
                    height: 15
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.7, justifyContent: "center" }}>
              <Image
                source={require("../../Image/harrier.png")}
                style={{ width: 70, height: 70, flex: 1, alignSelf: "center" }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 0.1, justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ShoppingCart")}
              >
                <Image
                  source={require("../../Image/shopping_cart.png")}
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.1, justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Search")}
              >
                <Image
                  source={require("../../Image/search.png")}
                  style={{
                    width: 18,
                    height: 18
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Tabs
            renderTabBar={() => (
              <ScrollableTab
                style={{ backgroundColor: "#fff" }}
                tabBarUnderlineStyle={{
                  backgroundColor: "#fff",
                  borderBottomWidth: 0
                }}
                underlineStyle={{
                  backgroundColor: Color.blue,
                  borderBottomWidth: 0
                }}
                tabContainerStyle={{
                  elevation: 0,
                  borderBottomColor: Color.white,
                  borderBottomWidth: 0,
                  marginTop: 30
                  //  width:400,
                  // marginHorizontal:0
                }}
              />
            )}
          >
            <Tab
              heading="New Product"
              activeTextStyle={{
                color: Color.blue,
                fontSize: 20,
                fontFamily: "OS_Light"
              }}
              textStyle={{
                color: Color.lightGray,
                fontFamily: "OS_Light",
                fontSize: 20
              }}
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
            >
              <Tab1 onPress={() => this.props.navigation.navigate("Details")} />
            </Tab>
            <Tab
              heading="Popular"
              activeTextStyle={{
                color: Color.blue,
                fontSize: 20,
                fontFamily: "OS_Light"
              }}
              textStyle={{
                color: Color.lightGray,
                fontFamily: "OS_Light",
                fontSize: 20
              }}
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
            >
              <Tab2 onPress={() => this.props.navigation.navigate("Details")} />
            </Tab>
            <Tab
              heading="Handicraft"
              activeTextStyle={{
                color: Color.blue,
                fontSize: 20,
                fontFamily: "OS_Light"
              }}
              textStyle={{
                color: Color.lightGray,
                fontFamily: "OS_Light",
                fontSize: 20
              }}
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
            >
              <Tab3 onPress={() => this.props.navigation.navigate("Details")} />
            </Tab>
          </Tabs>
        </View>
      </Drawer>
    );
  }
}
Drawer.defaultProps.styles.mainOverlay.elevation = 0;
