import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StatusBar
} from "react-native";
import styles from "./style";
import Texts from "../../Component/Text/index";
import Color from "../../Config/Color";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
export default class index extends Component {
    ratingCompleted(rating) {
        console.log(rating);
    }
    render() {
        return (
            <View style={{ backgroundColor: "#fff", flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View
                            style={[
                                {
                                    flex: 1,
                                    marginTop: 60,
                                    marginLeft: 20,
                                    marginBottom: 40,
                                    flexDirection: 'row',
                                    flex: 1,
                                }
                            ]}
                        >
                            <TouchableOpacity
                                style={{ flexDirection: 'row' }}
                                onPress={() => this.props.navigation.navigate("MyAccount")}
                            >
                                <View
                                    style={{
                                        width: 68,
                                        height: 68,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../../Image/icon.png")}
                                        style={[
                                            {
                                                width: 65,
                                                height: 65,
                                                alignSelf: "center",
                                                resizeMode: "contain",

                                            }
                                        ]}
                                    />
                                </View>

                                <View style={{ marginLeft: 10, flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text
                                        style={[
                                            {
                                                color: "#000",
                                                fontSize: 18,
                                                fontFamily:'OS_SB'
                                                // marginTop: 20
                                            }
                                        ]}
                                    >
                                        Harrier Ui
                  </Text>
                                    <Text
                                        style={[
                                            {
                                                color: "#9B9B9B",
                                                fontSize: 13,
                                                fontFamily:'OS_Regular'
                                            }
                                        ]}
                                    >Product Manager
                  </Text>
                                </View>
                                <View
                                    style={{
                                        alignSelf: 'flex-end',
                                        width: 60,
                                        height: 60,
                                        marginLeft: 25,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={require("../../Image/rightArrow.png")}
                                        style={[
                                            {
                                                width: 20,
                                                height: 20,
                                                alignSelf: "center",
                                                resizeMode: "contain",

                                            }
                                        ]}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            marginHorizontal: 15,
                            marginTop: 10,
                            backgroundColor: "#fff",
                            marginLeft: 40
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Category")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/shoppingCartD.png")}
                                        style={[styles.image, { tintColor: '#9B9B9B' }]}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts Text="Shops" extraTextStyle={styles.TitleText} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("WishList")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/life-buoy.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts Text="Wishlist" extraTextStyle={styles.TitleText} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("Favorite")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/heart.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts Text="Favorite" extraTextStyle={styles.TitleText} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("HelpSupport")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/life-buoy.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts
                                        Text="Help & Support"
                                        extraTextStyle={styles.TitleText}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("TempPolicy")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/temp_police.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts
                                        Text="Temp & Policy"
                                        extraTextStyle={styles.TitleText}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("AboutUs")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/comment.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts Text="About Us" extraTextStyle={styles.TitleText} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("SignUp")}
                        >
                            <View style={styles.rowView}>
                                <View style={styles.imageView}>
                                    <Image
                                        source={require("../../Image/log_out.png")}
                                        style={styles.image}
                                    />
                                </View>
                                <View style={styles.textView}>
                                    <Texts Text="Logout" extraTextStyle={styles.TitleText} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
