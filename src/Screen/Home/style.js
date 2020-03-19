import Color from "../../Config/Color";
import {Dimensions} from 'react-native';
let width = Dimensions.get("window").width;
export default {
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "red",
    width: width
  },
  subContainerView: {
    backgroundColor: Color.white,
    width: width,
    borderLeftColor: Color.steel,
    borderRightColor: Color.steel,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    opacity: 1,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#CBCBCB",
    //  shadowOpacity: 1,
    elevation: 3
  }
};
