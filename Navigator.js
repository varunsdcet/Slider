import { createStackNavigator  , createDrawerNavigator ,createAppContainer,TouchableHighlight} from 'react-navigation';
import Home from './Home.js';
import Drawer from './Drawer.js';
import Detail from './Detail.js';
import { DrawerActions } from 'react-navigation';



const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Home
    }
},{
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: 200
});

const StackNavigator = createStackNavigator({
   DrawerNavigator: { screen: DrawerNavigator },

   Detail: { screen: Detail },
   
});

export default createAppContainer(StackNavigator);

