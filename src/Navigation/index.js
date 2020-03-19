import { createStackNavigator, createAppContainer } from "react-navigation";
import Slider from "../Screen/Slider/index";
import SignIn from "../Screen/SignIn/index";
import SignUp from "../Screen/SignUp/index";
import Home from "../Screen/Home/index";
import Category from "../Screen/Category/index";
import SubCategory from "../Screen/SubCategory/index";
import Search from "../Screen/Search/index";
import ShoppingCart from "../Screen/ShoppingCart/index";
import Details from "../Screen/Details/index";
import CheckPayment from "../Screen/CheckPayment/index";
import AboutUs from "../Screen/AboutUs/index";
import Favorite from "../Screen/Favorite/index";
import HelpSupport from "../Screen/Help&Support/index";
import Shops from "../Screen/Shops/index";
import Handicraft from "../Screen/TabScreenPage/Handicraft/index";
import TempPolicy from "../Screen/Temp&Policy/index";
import WishList from "../Screen/WishList/index";
import Tovo from "../Screen/tovo/index";
import Req from "../Screen/tovo/req";

const AppNavigator = createStackNavigator(
  {
    Slider: {
      screen: Slider,
      navigationOptions: {
        header: null
      }
    },

    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null
      }
    },

    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null
      }
    },

    Home: {
      screen: Req,
      navigationOptions: {
        header: null
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        header: null
      }
    },
    SubCategory: {
      screen: SubCategory,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    ShoppingCart: {
      screen: ShoppingCart,
      navigationOptions: {
        header: null
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        header: null
      }
    },
    CheckPayment: {
      screen: CheckPayment,
      navigationOptions: {
        header: null
      }
    },
    AboutUs: {
      screen: Tovo,
      navigationOptions: {
        header: null
      }
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        header: null
      }
    },
    HelpSupport: {
      screen: HelpSupport,
      navigationOptions: {
        header: null
      }
    },
    Shops: {
      screen: Shops,
      navigationOptions: {
        header: null
      }
    },
    Handicraft: {
      screen: Handicraft,
      navigationOptions: {
        header: null
      }
    },
    TempPolicy: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    WishList: {
      screen: WishList,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(AppNavigator);
