import *as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from  "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screem name="Home" component={TabNavigator}/>
            <Drawer.Screen />
        </Drawer.Navigator>
    )
}