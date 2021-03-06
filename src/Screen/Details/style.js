import Color from '../../Config/Color'
export default {
    IndicatorViewPager: {
        flex: 1,
        alignItems: 'center',
    },
    image: { height: 310, resizeMode: 'cover', },
    dropdownContainer: {
        width: 60,
        borderColor: Color.blue,
    },
    dropdownStyle: {
        width: 82,
        borderColor: Color.blue,
        margin: 0, padding: 0,
        alignSelf: 'flex-end',
    },
    dropdownPicker: {
        backgroundColor: '#EAEAEA',
        width: 82,
        height: 150,
        margin: 0, padding: 0,
    },
    selectedImage: {
        width: 18,
        height: 18,
        // resizeMode:'cover',
        marginLeft: 15
    },
    detailText:{ alignSelf: 'center', textAlign: "center" ,fontFamily:'OS_Regular',fontSize:15,color:Color.gray},
    titleText: { alignSelf: 'center', fontSize: 24,fontFamily: 'OS_SB',color:Color.gray , marginTop: 20,marginBottom: 10, },
    descText: { alignSelf: 'center',fontSize:12,color:Color.gray,fontFamily:'OS_Regular' },
    priceText: { alignSelf: 'center', marginTop: 10,marginBottom: 20, color: Color.blue, fontFamily:'OS_SB' , fontSize: 18 },
    rowDataView: { flexDirection: 'row', marginVertical: 15 },
    rowDataTitleView: { flex: 0.5, justifyContent: 'flex-end', },
    rowDataTitleText: { fontSize: 18, marginBottom: 10, fontFamily:'OS_SB',color:Color.gray,},
    rowDataTitleSelectView: { flex: 0.5, flexDirection: 'row', justifyContent: 'flex-end' },
    rowDataTitleSelectText:{ fontSize: 18, marginBottom: 10,fontFamily:'OS_Regular',fontSize:16,color:Color.gray},
    similarDataTitle: { alignSelf: 'center', fontSize: 22, fontFamily:'OS_SB', marginVertical: 20, color: Color.gray },
    similarDataView: { flexDirection: 'row', marginVertical: 15 }

}

