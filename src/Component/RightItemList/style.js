import Color from '../../Config/Color'
export default {
    containers: {
        width: 150,
        height: 120,
        //Below lines will help to set the border radius
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        overflow: 'hidden',
    },
    imageContainer: {
        width: 150,
        height: 120
    },
    titleText: {
        fontSize: 16,
        marginVertical: 2,
        fontFamily: 'OS_Bold',
        color: Color.gray
    },
    descriptionText: {
        fontSize: 12,
        marginVertical: 2,
        color: Color.gray,
        fontFamily: 'OS_Light'
    },
    priceText: {
        color: Color.blue,
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'OS_Regular'
    },
    rateView: {
        margin: 10,
        backgroundColor: Color.blue,
        // this.state.tabsFlag == 0 ? Color.purple : Color.white,
        borderRadius: 16,
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    rateText: {
        textAlign: "center",
        fontSize: 10,
        margin: 5,
        // fontWeight: this.state.tabsFlag == 0 ? "bold" : "normal",
        color: Color.white,
        fontFamily: 'OS_Regular'
        // this.state.tabsFlag == 0 ? Color.white : Color.black
    }

}