import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Paths from "../pages/Paths/paths";
import Tasks from "../pages/Tasks/tasks";

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return(
            <Tab.Navigator>
                <Tab.Screen 
                name="Paths"
                component={Paths}
                />
                <Tab.Screen 
                name="Tasks"
                component={Tasks}
                />
            </Tab.Navigator>
    );
}
export default TabNavigation;