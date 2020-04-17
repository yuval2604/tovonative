import Color from '../../Config/Color'
import { Col } from 'native-base';
export default {
    containers: {
        width: 138,
        height: 120,
        //Below lines will help to set the border radius
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        overflow: 'hidden',
        marginHorizontal:15
    },
    imageContainer: {
        width: 138,
        height: 120,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 17,
        fontFamily: 'OS_SB',
        color:Color.gray
        //marginVertical: 2
    },
    descriptionText: {
        fontSize: 12,
        marginVertical: 2,
        fontFamily:'OS_Light',
        color: Color.gray
    },
    priceText: {
        color: Color.blue,
        fontSize: 14,
        fontFamily:'OS_Regular',
       // marginHorizontal: 10,
        alignSelf: 'flex-end',
       // marginTop: 10
    },
    rateView: {
        margin: 10,
        backgroundColor: Color.blue,
        // this.state.tabsFlag == 0 ? Color.purple : Color.white,
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    // rateText: {
    //     textAlign: "center",
    //     fontSize: 14,
    //     paddingVertical: 5,
    //     paddingHorizontal: 5,
    //     margin: 5,
    //     // fontWeight: this.state.tabsFlag == 0 ? "bold" : "normal",
    //     color: Color.white,
    //     // this.state.tabsFlag == 0 ? Color.white : Color.black
    // },
    Quantity: {
        flexDirection: "row",
        marginTop: 8,
        fontFamily:'OS_Light'
        //alignItems: "center",
        //justifyContent: "center",
       
    },
    icon: {
        width: 12,
        height: 12,
       // marginLeft: 5,
       
    },
    iconMinus: {
        width: 8,
        height: 15,
       // marginLeft: 5,
       
    },


}
