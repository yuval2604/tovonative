import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Header from "../../Component/Header/HeaderClose";
import Color from "../../Config/Color";
import LeftItemList from "../../Component/LeftItemList/index";
import RightItemList from "../../Component/RightItemList/index";

const Card = props => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, marginBottom: 80 }}>
          {/* <LeftItemList
            source={require("../../Image/9.png")}
            title={props.data1["name"]}
            description={props.data1["phone"]}
            price={"time:" + props.data1["time"]}
            rate="9.5"
          /> */}

          <RightItemList
            source={require("../../Image/15.png")}
            title={props.data1["name"]}
            description={props.data1["number"]}
            price={props.data1["dateofevent"]}
            rate={props.data1["timeOfPatiant"]}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Card;
