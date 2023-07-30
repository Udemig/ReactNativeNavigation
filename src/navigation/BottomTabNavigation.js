import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen"
import SettingsScreen from "../screens/SettingsScreen"
import ProfileSettingsStackScreen from "../screens/StackScreens/ProfileSettingsStackScreen"



const BottomTabsNavigation=()=>{

    const BottomTab=createBottomTabNavigator()

    return(
<BottomTab.Navigator>
    <BottomTab.Screen
 
    name="ProfileStackScreen" component={ProfileSettingsStackScreen}/>


    <BottomTab.Screen name="SettingsScreen" component={SettingsScreen}/>
</BottomTab.Navigator>
    )
}

export default BottomTabsNavigation