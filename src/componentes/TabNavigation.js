import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Path from "../pages/Path";
import Task from "../pages/Task";

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return(
            <Tab.Navigator>
                <Tab.Screen 
                name="Path"
                component={Path}
                />
                <Tab.Screen 
                name="Task"
                component={Task}
                />
            </Tab.Navigator>
    );
}
export default TabNavigation;