import Color from '../../Config/Color'
export default{
    containers: {
        //Below lines will help to set the border radius
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height:130,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        //flex:1,
        resizeMode:'cover'
    },
    titleText: {
        fontSize: 16,
        marginVertical: 2,
        fontFamily: 'OS_Bold',
        color: Color.gray,
        alignSelf: 'center',
    },
    descriptionText:{ 
        fontSize: 12,
        marginVertical: 2,
        color: Color.gray,
        fontFamily: 'OS_Light' ,
        alignSelf: 'center',
    },
    priceText:{
        color: Color.blue,
        fontSize: 14,
        marginTop: 2,
        fontFamily: 'OS_SB',
        alignSelf: 'center',
    },
    rateView:{
      marginTop: -20,
      marginRight: 15,
      backgroundColor: Color.blue,
      borderRadius: 16,
      height: 32,
      width: 32,
      justifyContent:'center',
      alignSelf:'flex-end',
    },
    rateText:{
        textAlign: "center",
        fontSize: 10,
        color: Color.white,
        fontFamily: 'OS_Regular'
      }
}
